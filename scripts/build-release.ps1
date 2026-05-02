param(
  [string]$Version = "",
  [string]$OutputDir = "dist",
  [string]$Repository = "Amundi13/eqrpg-foundry-system"
)

$ErrorActionPreference = "Stop"

$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$manifestPath = Join-Path $root "system.json"
$manifest = Get-Content -Path $manifestPath -Raw | ConvertFrom-Json

if ([string]::IsNullOrWhiteSpace($Version)) {
  $Version = [string]$manifest.version
}

if ([string]::IsNullOrWhiteSpace($Version)) {
  throw "Unable to determine release version."
}

$tag = if ($Version.StartsWith("v")) { $Version } else { "v$Version" }
$plainVersion = $tag.TrimStart("v")
$zipName = "eqrpg-foundry-system-v$plainVersion.zip"
$downloadUrl = "https://github.com/$Repository/releases/download/$tag/$zipName"
$manifestUrl = "https://github.com/$Repository/releases/latest/download/system.json"

$outputRoot = if ([System.IO.Path]::IsPathRooted($OutputDir)) {
  $OutputDir
} else {
  Join-Path $root $OutputDir
}

New-Item -ItemType Directory -Path $outputRoot -Force | Out-Null

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$stageRoot = Join-Path $outputRoot "release-stage-$stamp"
$stage = Join-Path $stageRoot "eqrpg"
New-Item -ItemType Directory -Path $stage -Force | Out-Null

$rootFiles = @("system.json", "README.md")
foreach ($file in $rootFiles) {
  $src = Join-Path $root $file
  if (Test-Path $src) {
    Copy-Item -LiteralPath $src -Destination $stage -Force
  }
}

$runtimeDirs = @("icons", "lang", "module", "packs", "styles", "templates")
foreach ($dir in $runtimeDirs) {
  $src = Join-Path $root $dir
  if (Test-Path $src) {
    Copy-Item -LiteralPath $src -Destination $stage -Recurse -Force
  }
}

$releaseManifestPath = Join-Path $stage "system.json"
$releaseManifest = Get-Content -Path $releaseManifestPath -Raw | ConvertFrom-Json
$releaseManifest.version = $plainVersion
$releaseManifest.manifest = $manifestUrl
$releaseManifest.download = $downloadUrl
$releaseManifestJson = $releaseManifest | ConvertTo-Json -Depth 20
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($releaseManifestPath, $releaseManifestJson, $utf8NoBom)

$packRoot = Join-Path $stage "packs"
if (Test-Path $packRoot) {
  Get-ChildItem -Path $packRoot -Recurse -Force -Include "LOCK", "*.log", "LOG", "LOG.old" |
    Remove-Item -Force -ErrorAction SilentlyContinue
}

$zipPath = Join-Path $outputRoot $zipName
if (Test-Path $zipPath) {
  Remove-Item -LiteralPath $zipPath -Force
}
Compress-Archive -Path (Join-Path $stage "*") -DestinationPath $zipPath -Force

$releaseManifestAsset = Join-Path $outputRoot "system.json"
Copy-Item -LiteralPath $releaseManifestPath -Destination $releaseManifestAsset -Force

Remove-Item -LiteralPath $stageRoot -Recurse -Force

$zipInfo = Get-Item -LiteralPath $zipPath
[PSCustomObject]@{
  Version = $plainVersion
  Manifest = $releaseManifestAsset
  Zip = $zipInfo.FullName
  SizeMB = [math]::Round($zipInfo.Length / 1MB, 2)
}
