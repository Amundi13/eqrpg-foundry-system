param(
  [string]$Version = "",
  [string]$OutputDir = "dist",
  [string]$Repository = "Amundi13/eqrpg-foundry-system",
  [string]$PackDirectory = ""
)
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.IO.Compression
function Get-PortableRelativePath([string]$BasePath, [string]$TargetPath) {
  $method = [IO.Path].GetMethod('GetRelativePath', [type[]]@([string], [string]))
  if ($null -ne $method) { return [IO.Path]::GetRelativePath($BasePath, $TargetPath) }
  $baseFull = [IO.Path]::GetFullPath($BasePath)
  if (!$baseFull.EndsWith('\')) { $baseFull += '\' }
  $baseUri = [Uri]$baseFull
  $targetUri = [Uri][IO.Path]::GetFullPath($TargetPath)
  return [Uri]::UnescapeDataString($baseUri.MakeRelativeUri($targetUri).ToString()).Replace('/', '\')
}
$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$manifest = Get-Content -LiteralPath (Join-Path $root "system.json") -Raw | ConvertFrom-Json
if ([string]::IsNullOrWhiteSpace($Version)) { $Version = [string]$manifest.version }
$plainVersion = $Version.TrimStart("v")
if ($plainVersion -notmatch '^\d+\.\d+\.\d+(?:[-+][A-Za-z0-9.-]+)?$') { throw "Invalid release version." }
if ($Repository -notmatch '^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$') { throw "Invalid repository name." }
$outputRoot = [IO.Path]::GetFullPath($(if ([IO.Path]::IsPathRooted($OutputDir)) { $OutputDir } else { Join-Path $root $OutputDir }))
New-Item -ItemType Directory -Path $outputRoot -Force | Out-Null
if ([string]::IsNullOrWhiteSpace($PackDirectory)) {
  $packBuild = Join-Path $root ("dist/pack-build-" + [guid]::NewGuid().ToString('N'))
  $packOutput = & node (Join-Path $PSScriptRoot 'build-packs.mjs') --output $packBuild
  if ($LASTEXITCODE -ne 0) { throw 'Isolated compendium build failed.' }
  $PackDirectory = Join-Path $packBuild 'packs'
}
$PackDirectory = [IO.Path]::GetFullPath($PackDirectory)
$allowedPacks = [IO.Path]::GetFullPath((Join-Path $root 'dist')) + [IO.Path]::DirectorySeparatorChar
if (!$PackDirectory.StartsWith($allowedPacks,[StringComparison]::OrdinalIgnoreCase)) { throw 'Release packs must come from an isolated build under dist.' }
if (!(Test-Path -LiteralPath (Join-Path (Split-Path $PackDirectory -Parent) 'build-report.json'))) { throw 'Missing verified compendium build report.' }
$verification = & node (Join-Path $PSScriptRoot 'verify-pack-build.mjs') $PackDirectory
if ($LASTEXITCODE -ne 0) { throw 'Compendium build verification failed.' }
$zipName = "eqrpg-foundry-system-v$plainVersion.zip"
$manifest.version = $plainVersion
$manifest.manifest = "https://github.com/$Repository/releases/latest/download/system.json"
$manifest.download = "https://github.com/$Repository/releases/download/v$plainVersion/$zipName"
$utf8 = [Text.UTF8Encoding]::new($false)
$manifestBytes = $utf8.GetBytes((($manifest | ConvertTo-Json -Depth 20) -replace "`r`n", "`n"))
$entries = [Collections.Generic.SortedDictionary[string,string]]::new([StringComparer]::Ordinal)
foreach ($name in @('README.md','GAME-NIGHT.md','IMPLEMENTATION-STATUS.md','DEVELOPMENT.md','PACK-UPGRADES.md','STORE-RECOVERY.md','TRAINING-RECORDS.md','MIGRATIONS.md','EFFECT-EXPIRATION.md','MAGIC-RECOVERY.md')) {
  $path = Join-Path $root $name
  if (Test-Path -LiteralPath $path) { $entries.Add($name,$path) }
}
foreach ($directory in @('icons','lang','module','packs','styles','templates')) {
  $path = if ($directory -eq 'packs') { $PackDirectory } else { Join-Path $root $directory }
  if (!(Test-Path -LiteralPath $path)) { continue }
  foreach ($file in Get-ChildItem -LiteralPath $path -Recurse -File) {
    if ($file.Name -in @('LOCK','LOG','LOG.old','.gitkeep')) { continue }
    if ($file.Attributes -band [IO.FileAttributes]::ReparsePoint) { throw "Refusing linked runtime file: $($file.FullName)" }
    $relative = if ($directory -eq 'packs') { 'packs/' + (Get-PortableRelativePath $PackDirectory $file.FullName).Replace('\','/') } else { (Get-PortableRelativePath $root $file.FullName).Replace('\','/') }
    $entries.Add($relative,$file.FullName)
  }
}
# Numeric LevelDB *.log files are write-ahead data and must be preserved.
# Compare every input after writing so a changing runtime cannot produce a silent mixed snapshot.
$hashes = @{}
$zipPath = Join-Path $outputRoot $zipName
$temporary = Join-Path $outputRoot (".release-" + [guid]::NewGuid().ToString('N') + '.tmp')
$stream = [IO.File]::Open($temporary,[IO.FileMode]::CreateNew)
$zip = [IO.Compression.ZipArchive]::new($stream,[IO.Compression.ZipArchiveMode]::Create)
try {
  $allNames = @($entries.Keys) + 'system.json'
  [Array]::Sort($allNames,[StringComparer]::Ordinal)
  foreach ($name in $allNames) {
    if ($name -eq 'system.json') { [byte[]]$bytes = $manifestBytes } else { [byte[]]$bytes = [IO.File]::ReadAllBytes($entries[$name]) }
    if ($name -ne 'system.json') {
      $digest = [Security.Cryptography.SHA256]::Create().ComputeHash($bytes)
      $hashes[$name] = -join ($digest | ForEach-Object { $_.ToString('X2') })
    }
    $entry = $zip.CreateEntry($name,[IO.Compression.CompressionLevel]::NoCompression)
    $entry.LastWriteTime = [DateTimeOffset]::new(2000,1,1,0,0,0,[TimeSpan]::Zero)
    $entry.ExternalAttributes = 0
    $entryStream = $entry.Open()
    try { $entryStream.Write($bytes,0,$bytes.Length) } finally { $entryStream.Dispose() }
  }
} finally { $zip.Dispose(); $stream.Dispose() }
foreach ($name in $entries.Keys) {
  if ((Get-FileHash -LiteralPath $entries[$name] -Algorithm SHA256).Hash -ne $hashes[$name]) { throw "Runtime changed during packaging: $name. Incomplete archive retained at $temporary" }
}
Move-Item -LiteralPath $temporary -Destination $zipPath -Force
$manifestPath = Join-Path $outputRoot 'system.json'
[IO.File]::WriteAllBytes($manifestPath,$manifestBytes)
[PSCustomObject]@{Version=$plainVersion;Manifest=$manifestPath;Zip=$zipPath;SHA256=(Get-FileHash -LiteralPath $zipPath).Hash;SizeMB=[Math]::Round((Get-Item -LiteralPath $zipPath).Length/1MB,2)}
