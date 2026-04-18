import argparse
import html
import json
import re
import shutil
import subprocess
import tempfile
from pathlib import Path

import fitz


LABELS = [
    "Hit Dice",
    "Initiative",
    "Speed",
    "AC",
    "Attacks",
    "Damage",
    "Face/Reach",
    "Special Attacks",
    "Special Qualities",
    "Saves",
    "Abilities",
    "Skills",
    "Feats",
    "Climate/Terrain",
    "Organization",
    "Challenge Rating",
    "Treasure",
    "Alignment",
    "Advancement Range",
    "Faction",
]

HEADING_LABELS = ["Description", "Combat", "Habitat/Society"]
SIZE_PREFIXES = [
    "Fine",
    "Diminutive",
    "Tiny",
    "Small",
    "Medium-Size",
    "Medium-size",
    "Large",
    "Huge",
    "Gargantuan",
    "Colossal",
]


def find_tesseract():
    candidates = [
        shutil.which("tesseract"),
        r"C:\Program Files\Tesseract-OCR\tesseract.exe",
        r"C:\Program Files (x86)\Tesseract-OCR\tesseract.exe",
    ]
    for candidate in candidates:
        if candidate and Path(candidate).exists():
            return str(candidate)
    raise FileNotFoundError("Could not find tesseract.exe")


def normalize_ocr_text(text):
    text = text.replace("\r", "\n").replace("\x0c", " ")
    text = text.replace("ﬁ", "fi").replace("ﬂ", "fl")
    text = text.replace("—", "-").replace("–", "-")
    text = text.replace("’", "'").replace("“", '"').replace("”", '"')
    text = text.replace("\t", " ")
    text = re.sub(r"[ ]{2,}", " ", text)
    text = re.sub(r"([A-Za-z])- *\n([A-Za-z])", r"\1\2", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = re.sub(r"\bOescription\b", "Description", text, flags=re.I)
    text = re.sub(r"\bial description\b", "\nDescription\n", text, flags=re.I)
    return text.strip()


def build_title_pattern(title):
    words = [re.escape(part) for part in re.findall(r"[A-Za-z0-9']+", title or "")]
    if not words:
        return None
    return r"\b" + r"[\s\-]+".join(words) + r"\b"


def trim_to_entry_start(text, title):
    normalized = normalize_ocr_text(text)
    if not normalized:
        return normalized

    patterns = []
    full_title = build_title_pattern(title)
    if full_title:
        patterns.append(full_title)

    title_words = re.findall(r"[A-Za-z0-9']+", title or "")
    if title_words:
        lead = re.escape(title_words[0])
        patterns.append(rf"(?:^|\n)\s*{lead}\b")

    for pattern in patterns:
        match = re.search(pattern, normalized, flags=re.I)
        if match:
            line_start = normalized.rfind("\n", 0, match.start())
            return normalized[(line_start + 1 if line_start >= 0 else 0):].strip()

    return normalized


def collapse_field_value(value):
    value = normalize_ocr_text(value)
    lines = [line.strip() for line in value.splitlines() if line.strip()]
    return re.sub(r"\s+", " ", " ".join(lines)).strip()


def leaf_toc_entries(pdf):
    toc = pdf.get_toc(simple=True)
    leaves = []
    for index, entry in enumerate(toc):
        level, title, page = entry
        if level < 3:
            continue
        next_level = toc[index + 1][0] if index + 1 < len(toc) else 0
        if next_level > level:
            continue
        next_page = toc[index + 1][2] - 1 if index + 1 < len(toc) else pdf.page_count
        leaves.append(
            {
                "title": title.strip(),
                "level": level,
                "start_page": max(1, int(page)),
                "end_page": max(int(page), int(next_page)),
            }
        )
    return leaves


def render_page(pdf, page_no, out_path):
    page = pdf.load_page(page_no - 1)
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    pix.save(str(out_path))


def ocr_image(tesseract_path, image_path):
    result = subprocess.run(
        [tesseract_path, str(image_path), "stdout", "--psm", "3"],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="ignore",
        check=False,
    )
    return normalize_ocr_text(result.stdout)


def ocr_page(pdf, tesseract_path, page_no, temp_dir, cache):
    if page_no in cache:
        return cache[page_no]
    image_path = temp_dir / f"mon_page_{page_no:03d}.png"
    render_page(pdf, page_no, image_path)
    text = ocr_image(tesseract_path, image_path)
    cache[page_no] = text
    return text


def extract_type_line(first_page_text):
    hit_match = re.search(r"Hit Dice\s*:", first_page_text, flags=re.I)
    if hit_match:
        prefix = first_page_text[: hit_match.start()]
        candidates = [line.strip() for line in prefix.splitlines() if line.strip() and ":" not in line]
        for candidate in reversed(candidates):
            if any(size in candidate for size in SIZE_PREFIXES):
                return collapse_field_value(candidate)
    return ""


def is_type_line(line):
    return any(line.startswith(size) for size in SIZE_PREFIXES)


def parse_type_line(type_line):
    cleaned = type_line.replace("Medium-size", "Medium-Size").strip()
    subs = ""
    if "(" in cleaned and ")" in cleaned:
        cleaned, subs = cleaned.split("(", 1)
        subs = subs.rsplit(")", 1)[0].strip()
        cleaned = cleaned.strip()

    for size in SIZE_PREFIXES:
        if cleaned.startswith(size):
            creature_type = cleaned[len(size):].strip()
            return size.replace("Medium-size", "Medium-Size"), creature_type, subs
    return "", cleaned, subs


def parse_unlabeled_statblock(first_page_text, title):
    text = normalize_ocr_text(first_page_text)
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    type_index = next((i for i, line in enumerate(lines) if is_type_line(line)), -1)
    if type_index < 0:
        return {}

    stat_lines = lines[type_index:]
    fields = {
        "hitDice": "",
        "initiative": "",
        "speed": "",
        "ac": "",
        "attacks": "",
        "damage": "",
        "faceReach": "",
        "specialAttacks": "",
        "specialQualities": "",
        "saves": "",
        "abilities": "",
        "skills": "",
        "feats": "",
        "climateTerrain": "",
        "organization": "",
        "challengeRating": "",
        "treasure": "",
        "alignment": "",
        "advancement": "",
        "faction": "",
    }

    if len(stat_lines) > 1 and re.search(r"\(\d+\s*hp\)", stat_lines[1], flags=re.I):
        fields["hitDice"] = stat_lines[1]
    if len(stat_lines) > 2 and re.match(r"^[+-]\d+", stat_lines[2]):
        fields["initiative"] = stat_lines[2]
    if len(stat_lines) > 3 and "ft." in stat_lines[3].lower():
        fields["speed"] = stat_lines[3]
    if len(stat_lines) > 4 and re.match(r"^\d+\s*\(", stat_lines[4]):
        fields["ac"] = stat_lines[4]

    saves_index = next((i for i, line in enumerate(stat_lines) if re.search(r"\bFort\b.*\bRef\b.*\bWill\b", line, flags=re.I)), -1)
    abilities_index = next((i for i, line in enumerate(stat_lines) if re.search(r"\bStr\b.*\bDex\b.*\bCon\b", line, flags=re.I)), -1)
    climate_index = next((i for i, line in enumerate(stat_lines) if re.search(r"\b(?:Any|Warm|Temperate|Cold)\b", line)), -1)
    description_index = next((i for i, line in enumerate(stat_lines) if line in HEADING_LABELS), len(stat_lines))

    attack_start = 5 if len(stat_lines) > 5 else -1
    attack_end = min(index for index in [saves_index, abilities_index, description_index] if index >= 0) if any(index >= 0 for index in [saves_index, abilities_index, description_index]) else len(stat_lines)
    attack_lines = stat_lines[attack_start:attack_end] if attack_start >= 0 else []

    if attack_lines:
        if attack_lines:
            fields["attacks"] = attack_lines[0]
        if len(attack_lines) > 1 and re.search(r"\d+d\d|Id\d", attack_lines[1], flags=re.I):
            fields["damage"] = attack_lines[1]
        if len(attack_lines) > 2 and re.search(r"ft\./", attack_lines[2], flags=re.I):
            fields["faceReach"] = attack_lines[2]
            quality_start = 3
        else:
            quality_start = 2

        qualities = [line for line in attack_lines[quality_start:] if line and not is_type_line(line)]
        if qualities:
            joined = " ".join(qualities)
            attack_bits = []
            quality_bits = []
            for part in [piece.strip() for piece in re.split(r"\s{2,}|; ", joined) if piece.strip()]:
                if re.search(r"\b(?:poison|breath|trample|spell-like|constrict|rake|improved grab|gaze|fear aura|berserking)\b", part, flags=re.I):
                    attack_bits.append(part)
                else:
                    quality_bits.append(part)
            fields["specialAttacks"] = "; ".join(attack_bits)
            fields["specialQualities"] = "; ".join(quality_bits)

    if saves_index >= 0:
        fields["saves"] = stat_lines[saves_index]
    if abilities_index >= 0:
        fields["abilities"] = stat_lines[abilities_index]

    if abilities_index >= 0:
        tail = stat_lines[abilities_index + 1:description_index]
        if tail:
            fields["skills"] = tail[0]
        if len(tail) > 1:
            fields["feats"] = tail[1]
        if climate_index >= 0:
            fields["climateTerrain"] = stat_lines[climate_index]
            after_climate = stat_lines[climate_index + 1:description_index]
            if after_climate:
                fields["organization"] = after_climate[0]
            if len(after_climate) > 1 and re.match(r"^\d+/?\d*$", after_climate[1]):
                fields["challengeRating"] = after_climate[1]
            if len(after_climate) > 2:
                fields["treasure"] = after_climate[2]
            if len(after_climate) > 3:
                fields["alignment"] = after_climate[3]
            if len(after_climate) > 4:
                fields["advancement"] = after_climate[4]

    return fields


def extract_statblock_text(first_page_text):
    text = normalize_ocr_text(first_page_text)
    hit_match = re.search(r"Hit Dice\s*:", text, flags=re.I)
    if not hit_match:
        return text
    end_match = re.search(r"\n(?:Description|Combat|Habitat/Society)\b", text, flags=re.I)
    end = end_match.start() if end_match else len(text)
    statblock = text[hit_match.start():end]
    for token in sorted(LABELS, key=len, reverse=True):
        statblock = re.sub(rf"\s+(?={re.escape(token)}\s*:)", "\n", statblock)
    for token in HEADING_LABELS:
        statblock = re.sub(rf"\s+(?={re.escape(token)}\b)", "\n", statblock)
    return normalize_ocr_text(statblock)


def extract_field_block(text, label):
    ordered = sorted(LABELS + HEADING_LABELS, key=len, reverse=True)
    next_tokens = [token for token in ordered if token != label]
    next_pattern = "|".join(re.escape(token) for token in next_tokens)
    pattern = rf"{re.escape(label)}\s*:\s*(.*?)(?=\n(?:{next_pattern})(?:\s*:|\b)|$)"
    match = re.search(pattern, text, flags=re.I | re.S)
    if not match:
        return ""
    return collapse_field_value(match.group(1))


def extract_heading_block(text, heading, next_headings):
    if next_headings:
        next_pattern = "|".join(re.escape(token) for token in next_headings)
        pattern = rf"(?:^|\n)\s*{re.escape(heading)}\s*(.*?)(?=\n(?:{next_pattern})\b|$)"
    else:
        pattern = rf"(?:^|\n)\s*{re.escape(heading)}\s*(.*)$"
    match = re.search(pattern, text, flags=re.I | re.S)
    if not match:
        return ""
    return normalize_ocr_text(match.group(1))


def parse_int_from_text(text, default=0):
    match = re.search(r"[-+]?\d+", text or "")
    return int(match.group(0)) if match else default


def clean_field_bleed(value, stop_labels=None):
    text = collapse_field_value(value)
    if not text:
        return ""
    stop_labels = stop_labels or []
    for label in sorted(stop_labels, key=len, reverse=True):
        text = re.split(rf"\b{re.escape(label)}\s*:", text, maxsplit=1, flags=re.I)[0].strip()
        text = re.split(rf"\b{re.escape(label)}\b", text, maxsplit=1, flags=re.I)[0].strip()
    return text.strip(" .,-;")


def postprocess_monster_fields(fields):
    fields["faceReach"] = clean_field_bleed(fields["faceReach"], ["Special Attacks", "Special Qualities", "Saves", "Combat"])
    fields["specialAttacks"] = clean_field_bleed(fields["specialAttacks"], ["Special Qualities", "Saves", "Description", "Combat"])
    fields["specialQualities"] = clean_field_bleed(fields["specialQualities"], ["Saves", "Abilities", "Description", "Combat"])
    fields["skills"] = clean_field_bleed(fields["skills"], ["Feats", "Climate/Terrain", "Organization", "Challenge Rating", "Treasure", "Alignment", "Advancement Range", "Faction", "Description", "Combat"])
    fields["feats"] = clean_field_bleed(fields["feats"], ["Climate/Terrain", "Organization", "Challenge Rating", "Treasure", "Alignment", "Advancement Range", "Faction", "Description", "Combat"])
    fields["climateTerrain"] = clean_field_bleed(fields["climateTerrain"], ["Organization", "Challenge Rating", "Treasure", "Alignment", "Advancement Range", "Faction", "Description", "Combat"])
    fields["organization"] = clean_field_bleed(fields["organization"], ["Challenge Rating", "Treasure", "Alignment", "Advancement Range", "Faction", "Description", "Combat"])
    fields["challengeRating"] = clean_field_bleed(fields["challengeRating"], ["Treasure", "Alignment", "Advancement Range", "Faction", "Description", "Combat"])
    fields["treasure"] = clean_field_bleed(fields["treasure"], ["Alignment", "Advancement Range", "Faction", "Description", "Combat"])
    fields["alignment"] = clean_field_bleed(fields["alignment"], ["Advancement Range", "Faction", "Description", "Combat"])
    fields["advancement"] = clean_field_bleed(fields["advancement"], ["Faction", "Description", "Combat"])
    fields["faction"] = clean_field_bleed(fields["faction"], ["Description", "Combat"])
    return fields


def parse_hit_points(hit_dice):
    match = re.search(r"\((\d+)\s*hp\)", hit_dice, flags=re.I)
    return int(match.group(1)) if match else 0


def parse_speed(speed_text):
    match = re.search(r"(\d+)\s*ft", speed_text, flags=re.I)
    return int(match.group(1)) if match else 0


def parse_saves(save_text):
    fort = parse_int_from_text(re.search(r"Fort\s*([+-]?\d+)", save_text, flags=re.I).group(1) if re.search(r"Fort\s*([+-]?\d+)", save_text, flags=re.I) else "0")
    reflex = parse_int_from_text(re.search(r"Ref\s*([+-]?\d+)", save_text, flags=re.I).group(1) if re.search(r"Ref\s*([+-]?\d+)", save_text, flags=re.I) else "0")
    will = parse_int_from_text(re.search(r"Will\s*([+-]?\d+)", save_text, flags=re.I).group(1) if re.search(r"Will\s*([+-]?\d+)", save_text, flags=re.I) else "0")
    return fort, reflex, will


def parse_abilities(abilities_text):
    abilities = {}
    for key in ["str", "dex", "con", "int", "wis", "cha"]:
        match = re.search(rf"{key.title()}\s*([0-9]+)", abilities_text, flags=re.I)
        abilities[key] = int(match.group(1)) if match else 10
    return abilities


def paragraphs_to_html(paragraphs):
    html_parts = []
    for paragraph in paragraphs:
        if not paragraph:
            continue
        if paragraph in HEADING_LABELS:
            html_parts.append(f"<h2>{html.escape(paragraph)}</h2>")
        else:
            html_parts.append(f"<p>{html.escape(paragraph)}</p>")
    return "".join(html_parts)


def build_biography_html(entry_text):
    text = normalize_ocr_text(entry_text)
    start_match = re.search(r"(?:^|\n)\s*(?:Description|Combat|Habitat/Society)\b", text, flags=re.I)
    if start_match:
        text = text[start_match.start():]
    description = extract_heading_block(text, "Description", ["Combat", "Habitat/Society"])
    combat = extract_heading_block(text, "Combat", ["Habitat/Society"])
    habitat = extract_heading_block(text, "Habitat/Society", [])

    paragraphs = []
    if description:
        paragraphs.extend(["Description", description])
    if combat:
        paragraphs.extend(["Combat", combat])
    if habitat:
        paragraphs.extend(["Habitat/Society", habitat])

    if not paragraphs:
        paragraphs = [collapse_field_value(text)]

    expanded = []
    for paragraph in paragraphs:
        if paragraph in HEADING_LABELS:
            expanded.append(paragraph)
            continue
        chunks = [chunk.strip() for chunk in re.split(r"\n\s*\n", paragraph) if chunk.strip()]
        if chunks:
            expanded.extend(collapse_field_value(chunk) for chunk in chunks)
        else:
            expanded.append(collapse_field_value(paragraph))

    return paragraphs_to_html(expanded)


def build_monster_entry(entry, first_page_text, full_text):
    first_page_text = trim_to_entry_start(first_page_text, entry["title"])
    full_text = trim_to_entry_start(full_text, entry["title"])
    statblock_text = extract_statblock_text(first_page_text)
    type_line = extract_type_line(first_page_text)
    size, creature_type, subtypes = parse_type_line(type_line)

    fields = {
        "hitDice": extract_field_block(statblock_text, "Hit Dice"),
        "initiative": extract_field_block(statblock_text, "Initiative"),
        "speed": extract_field_block(statblock_text, "Speed"),
        "ac": extract_field_block(statblock_text, "AC"),
        "attacks": extract_field_block(statblock_text, "Attacks"),
        "damage": extract_field_block(statblock_text, "Damage"),
        "faceReach": extract_field_block(statblock_text, "Face/Reach"),
        "specialAttacks": extract_field_block(statblock_text, "Special Attacks"),
        "specialQualities": extract_field_block(statblock_text, "Special Qualities"),
        "saves": extract_field_block(statblock_text, "Saves"),
        "abilities": extract_field_block(statblock_text, "Abilities"),
        "skills": extract_field_block(statblock_text, "Skills"),
        "feats": extract_field_block(statblock_text, "Feats"),
        "climateTerrain": extract_field_block(statblock_text, "Climate/Terrain"),
        "organization": extract_field_block(statblock_text, "Organization"),
        "challengeRating": extract_field_block(statblock_text, "Challenge Rating"),
        "treasure": extract_field_block(statblock_text, "Treasure"),
        "alignment": extract_field_block(statblock_text, "Alignment"),
        "advancement": extract_field_block(statblock_text, "Advancement Range"),
        "faction": extract_field_block(statblock_text, "Faction"),
    }
    if not fields["hitDice"]:
        fallback_fields = parse_unlabeled_statblock(first_page_text, entry["title"])
        for key, value in fallback_fields.items():
            if value and not fields[key]:
                fields[key] = value
    fields = postprocess_monster_fields(fields)

    hit_dice = fields["hitDice"]
    initiative = fields["initiative"]
    speed_text = fields["speed"]
    ac_text = fields["ac"]
    attacks = fields["attacks"]
    damage = fields["damage"]
    face_reach = fields["faceReach"]
    special_attacks = fields["specialAttacks"]
    special_qualities = fields["specialQualities"]
    saves_text = fields["saves"]
    abilities_text = fields["abilities"]
    skills = fields["skills"]
    feats = fields["feats"]
    climate_terrain = fields["climateTerrain"]
    organization = fields["organization"]
    challenge_rating = fields["challengeRating"]
    treasure = fields["treasure"]
    alignment = fields["alignment"]
    advancement = fields["advancement"]
    faction = fields["faction"]

    fort, reflex, will = parse_saves(saves_text)
    ability_scores = parse_abilities(abilities_text)
    hit_points = parse_hit_points(hit_dice)
    speed = parse_speed(speed_text)
    ac_value = parse_int_from_text(ac_text, 10)
    initiative_value = parse_int_from_text(initiative, 0)
    cr = parse_int_from_text(challenge_rating, 0)

    biography = build_biography_html(full_text)
    source = f"Monsters of Norrath pp. {entry['start_page']}-{entry['end_page']}" if entry["end_page"] > entry["start_page"] else f"Monsters of Norrath p. {entry['start_page']}"

    return {
        "name": entry["title"],
        "type": "npc",
        "img": "icons/svg/mystery-man.svg",
        "system": {
            "abilities": {
                key: {
                    "value": value,
                    "mod": (value - 10) // 2,
                }
                for key, value in ability_scores.items()
            },
            "details": {
                "cr": cr,
                "size": size,
                "type": creature_type,
                "subtypes": subtypes,
                "faction": faction,
                "alignment": alignment,
                "speed": speed,
            },
            "resources": {
                "hp": {
                    "value": hit_points,
                    "max": hit_points,
                    "temp": 0,
                    "bonus": 0,
                },
                "mana": {
                    "value": 0,
                    "max": 0,
                },
            },
            "combat": {
                "ac": {
                    "value": ac_value,
                },
                "bab": 0,
                "saves": {
                    "fortitude": {"value": fort},
                    "reflex": {"value": reflex},
                    "will": {"value": will},
                },
                "initiative": {
                    "value": initiative_value,
                },
                "attackMisc": 0,
                "magicSaveBonus": 0,
            },
            "statblock": {
                "hitDice": hit_dice,
                "speed": speed_text,
                "ac": ac_text,
                "attacks": attacks,
                "damage": damage,
                "faceReach": face_reach,
                "specialAttacks": special_attacks,
                "specialQualities": special_qualities,
                "saves": saves_text,
                "abilities": abilities_text,
                "skills": skills,
                "feats": feats,
                "climateTerrain": climate_terrain,
                "organization": organization,
                "treasure": treasure,
                "advancement": advancement,
                "challengeRating": challenge_rating,
                "source": source,
                "rawText": normalize_ocr_text(full_text)[:65000],
            },
            "biography": biography,
        },
    }


def main():
    parser = argparse.ArgumentParser(description="Generate Monsters of Norrath actor source data.")
    parser.add_argument("--pdf", required=True, help="Path to Monsters of Norrath PDF")
    parser.add_argument("--output", required=True, help="Output monsters.json path")
    parser.add_argument("--limit", type=int, default=0, help="Optional limit for testing")
    args = parser.parse_args()

    pdf_path = Path(args.pdf)
    output_path = Path(args.output)
    tesseract_path = find_tesseract()

    pdf = fitz.open(pdf_path)
    entries = leaf_toc_entries(pdf)
    if args.limit > 0:
        entries = entries[: args.limit]

    cache = {}
    monsters = []

    with tempfile.TemporaryDirectory(prefix="eqrpg_mon_ocr_") as temp_dir_name:
        temp_dir = Path(temp_dir_name)
        for index, entry in enumerate(entries, start=1):
            page_texts = []
            for page_no in range(entry["start_page"], entry["end_page"] + 1):
                page_texts.append(ocr_page(pdf, tesseract_path, page_no, temp_dir, cache))

            first_page_text = page_texts[0] if page_texts else ""
            full_text = "\n\n".join(page_texts)
            monsters.append(build_monster_entry(entry, first_page_text, full_text))
            print(f"[{index}/{len(entries)}] {entry['title']} ({entry['start_page']}-{entry['end_page']})")

    output_path.write_text(json.dumps(monsters, indent=2), encoding="utf-8")
    print(f"Wrote {len(monsters)} monsters to {output_path}")


if __name__ == "__main__":
    main()
