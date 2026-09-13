$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$testRoot = Join-Path $root ('dist/reproducibility-' + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $testRoot | Out-Null
$archives = @()
foreach ($run in @('a','b')) {
  $build = Join-Path $testRoot $run
  & node (Join-Path $PSScriptRoot 'build-packs.mjs') --output $build
  if ($LASTEXITCODE -ne 0) { throw "Pack build $run failed." }
  $archives += & (Join-Path $PSScriptRoot 'build-release.ps1') -PackDirectory (Join-Path $build 'packs') -OutputDir (Join-Path $build 'release')
}
if ($archives.Count -ne 2 -or $archives[0].SHA256 -ne $archives[1].SHA256) { throw 'Independent release archives differ.' }
& node (Join-Path $PSScriptRoot 'test-pack-build-verification.mjs') (Join-Path $testRoot 'a/packs')
if ($LASTEXITCODE -ne 0) { throw 'Pack verification failure-path tests failed.' }
$report = [PSCustomObject]@{passed=$true;sha256=$archives[0].SHA256;archives=@($archives.Zip)}
$report | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $testRoot 'reproducibility.json') -Encoding utf8
$report
