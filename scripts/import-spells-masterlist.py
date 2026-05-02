#!/usr/bin/env python3
"""Import PHB spell data from the EverQuest spell masterlist workbook.

The workbook is an .xlsx file, which is a ZIP archive of XML documents. This
script uses only Python's standard library so the repo does not need a package
install step just to refresh spell data.
"""

from __future__ import annotations

import html
import json
import re
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


ROOT_DIR = Path(__file__).resolve().parents[1]
DEFAULT_WORKBOOK = Path(r"c:\Users\erikw\Downloads\EverQuest_Spells_MASTERLIST.xlsx")
SPELLS_PATH = ROOT_DIR / "module" / "packs" / "source" / "spells.json"

NS = {"a": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
CLASS_COLUMNS = {
    "Bard": "bard",
    "Beastlord": "beastlord",
    "Cleric": "cleric",
    "Druid": "druid",
    "Enchanter": "enchanter",
    "Magician": "magician",
    "Necromancer": "necromancer",
    "Paladin": "paladin",
    "Ranger": "ranger",
    "Shadowknight": "shadowknight",
    "Shaman": "shaman",
    "Wizard": "wizard",
}


def column_index(cell_ref: str) -> int:
    match = re.match(r"([A-Z]+)", cell_ref)
    if not match:
        raise ValueError(f"Could not parse cell reference {cell_ref!r}")
    value = 0
    for char in match.group(1):
        value = (value * 26) + ord(char) - 64
    return value - 1


def shared_strings(archive: zipfile.ZipFile) -> list[str]:
    root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
    values: list[str] = []
    for item in root.findall("a:si", NS):
        values.append("".join(text.text or "" for text in item.findall(".//a:t", NS)))
    return values


def read_sheet_rows(archive: zipfile.ZipFile, sheet_path: str) -> list[list[str]]:
    strings = shared_strings(archive)
    root = ET.fromstring(archive.read(sheet_path))
    rows: list[list[str]] = []

    for row in root.findall(".//a:sheetData/a:row", NS):
        values: dict[int, str] = {}
        for cell in row.findall("a:c", NS):
            idx = column_index(cell.attrib["r"])
            cell_type = cell.attrib.get("t")
            raw_value = cell.find("a:v", NS)

            if cell_type == "s" and raw_value is not None:
                value = strings[int(raw_value.text or 0)]
            elif cell_type == "inlineStr":
                value = "".join(text.text or "" for text in cell.findall(".//a:t", NS))
            elif raw_value is not None:
                value = raw_value.text or ""
            else:
                value = ""

            values[idx] = value.strip() if isinstance(value, str) else str(value)

        if values:
            rows.append([values.get(index, "") for index in range(max(values) + 1)])

    return rows


def workbook_records(workbook_path: Path) -> list[dict[str, str]]:
    with zipfile.ZipFile(workbook_path) as archive:
        rows = read_sheet_rows(archive, "xl/worksheets/sheet2.xml")

    if not rows:
        raise ValueError("Workbook Spells sheet is empty.")

    headers = rows[0]
    records: list[dict[str, str]] = []
    for row in rows[1:]:
        record = {
            headers[index]: row[index].strip() if index < len(row) else ""
            for index in range(len(headers))
        }
        if record.get("Name"):
            records.append(record)

    return records


def normalize_name(name: str) -> str:
    text = (
        name.replace("\u2019", "'")
        .replace("\u2018", "'")
        .replace("\u2013", "-")
        .replace("\u2014", "-")
        .strip()
    )
    text = re.sub(r"^[^A-Za-z0-9]+", "", text)
    text = re.sub(r"\bor\b", "of", text)
    text = re.sub(r"\boF\b|\bOF\b", "of", text)
    text = re.sub(r"\bofr\b|\borf\b", "of", text)
    text = re.sub(r"\bEnoure\b", "Endure", text)
    text = re.sub(r"\bLiretap\b", "Lifetap", text)
    text = re.sub(r"\bLirespike\b", "Lifespike", text)
    text = re.sub(r"\bLire\b", "Life", text)
    text = re.sub(r"([a-z])([A-Z])", r"\1 \2", text)
    return re.sub(r"\s+", " ", text).strip()


def lookup_key(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", normalize_name(name).lower()).strip()


def parse_int(value: str, default: int = 0) -> int:
    text = str(value or "").strip()
    match = re.search(r"\d+", text)
    if not match:
        return default
    return int(match.group(0))


def parse_recast_rounds(value: str) -> int:
    text = str(value or "").strip().lower().replace("|", "1")
    if not text or text.startswith("instant"):
        return 0
    match = re.search(r"\d+", text)
    if not match:
        return 0
    amount = int(match.group(0))
    if "minute" in text:
        return amount * 10
    return amount


def normalize_save(value: str) -> str:
    text = str(value or "").strip().lower()
    if not text:
        return ""
    if text.startswith("fort"):
        return "fortitude"
    if text.startswith("ref"):
        return "reflex"
    if text.startswith("will"):
        return "will"
    if text in {"none", "no", "none (harmless)"}:
        return "none"
    return ""


def infer_save_effect(value: str) -> str:
    text = str(value or "").strip().lower()
    if "half" in text:
        return "half"
    if "negate" in text:
        return "negates"
    if "partial" in text:
        return "partial"
    if normalize_save(text) in {"fortitude", "reflex", "will"}:
        return "varies"
    return ""


def html_description(record: dict[str, str]) -> str:
    parts: list[str] = []
    text = record.get("Spell Text", "").strip()
    material = record.get("Material Component", "").strip()
    target = record.get("Target/Effect", "").strip()
    spell_resistance = record.get("Spell Resistance", "").strip()

    if text:
        parts.append(f"<p>{html.escape(text)}</p>")
    if material:
        parts.append(f"<p><strong>Material Component:</strong> {html.escape(material)}</p>")
    if target:
        parts.append(f"<p><strong>Target/Effect:</strong> {html.escape(target)}</p>")
    if spell_resistance:
        parts.append(f"<p><strong>Spell Resistance:</strong> {html.escape(spell_resistance)}</p>")

    return "".join(parts)


def class_data(record: dict[str, str]) -> tuple[list[str], list[str], int]:
    classes: list[str] = []
    class_levels: list[str] = []
    levels: list[int] = []

    for column, class_key in CLASS_COLUMNS.items():
        level = parse_int(record.get(column, ""))
        if not level:
            continue
        classes.append(class_key)
        class_levels.append(f"{class_key}:{level}")
        levels.append(level)

    fallback_level = parse_int(record.get("Raw Level", ""), 1)
    spell_level = min(levels) if levels else fallback_level
    return classes, class_levels, max(1, min(15, spell_level))


def existing_spell_index() -> dict[str, dict]:
    if not SPELLS_PATH.exists():
        return {}
    existing = json.loads(SPELLS_PATH.read_text(encoding="utf-8"))
    return {lookup_key(spell.get("name", "")): spell for spell in existing}


def build_spell(record: dict[str, str], existing_by_name: dict[str, dict]) -> dict:
    name = normalize_name(record["Name"])
    existing = existing_by_name.get(lookup_key(name), {})
    existing_system = existing.get("system", {})
    classes, class_levels, spell_level = class_data(record)
    saving_throw = normalize_save(record.get("Saving Throw", ""))
    preserved_damage = existing_system.get("damageFormula", "")
    preserved_heal = existing_system.get("healFormula", "")
    preserved_delivery = existing_system.get("deliveryType", "")

    delivery_type = preserved_delivery or "utility"
    if preserved_damage and saving_throw not in {"", "none"}:
        delivery_type = "save"
    elif preserved_damage and delivery_type == "utility":
        delivery_type = "attack"

    system = {
        "spellLevel": spell_level,
        "manaCost": parse_int(record.get("Mana", ""), existing_system.get("manaCost", 0)),
        "school": record.get("Category", ""),
        "castingTime": record.get("Casting Time", ""),
        "range": record.get("Range", ""),
        "duration": record.get("Duration", ""),
        "damageFormula": preserved_damage,
        "healFormula": preserved_heal,
        "savingThrow": saving_throw,
        "effect": record.get("Spell Text", ""),
        "recastTime": parse_recast_rounds(record.get("Recast", "")),
        "classes": classes,
        "classLevels": class_levels,
        "spellLine": normalize_name(record.get("Spell Line", "")),
        "rawLevel": record.get("Raw Level", ""),
        "components": record.get("Components", ""),
        "targetEffect": record.get("Target/Effect", ""),
        "spellResistance": record.get("Spell Resistance", ""),
        "materialComponent": record.get("Material Component", ""),
        "sourcePage": record.get("Source Page", ""),
        "verified": record.get("Verified", ""),
        "notes": record.get("Notes", ""),
        "saveEffect": infer_save_effect(record.get("Saving Throw", "")),
        "saveDC": existing_system.get("saveDC", ""),
        "deliveryType": delivery_type,
        "attackMode": existing_system.get("attackMode", ""),
        "attackBonus": int(existing_system.get("attackBonus", 0) or 0),
        "description": html_description(record),
    }
    return {
        "name": name,
        "type": "spell",
        "img": existing.get("img", ""),
        "system": system,
    }


def main() -> int:
    workbook_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_WORKBOOK
    if not workbook_path.exists():
        print(f"Workbook not found: {workbook_path}", file=sys.stderr)
        return 1

    records = workbook_records(workbook_path)
    existing_by_name = existing_spell_index()
    spells = [build_spell(record, existing_by_name) for record in records]
    spells.sort(key=lambda spell: (spell["name"].lower(), spell["system"].get("sourcePage", "")))

    SPELLS_PATH.write_text(
        json.dumps(spells, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Imported {len(spells)} spells into {SPELLS_PATH.relative_to(ROOT_DIR)}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
