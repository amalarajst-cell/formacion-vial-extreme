Add-Type -AssemblyName System.IO.Compression.FileSystem
$zipFile = "c:\Users\HP07\Desktop\Antigravity y Stich\formacion-vial-extreme\Examen - Categoría A.docx"
$tempDir = "c:\Users\HP07\Desktop\Antigravity y Stich\formacion-vial-extreme\scratch\docx_extracted"

if (Test-Path $tempDir) {
    Remove-Item -Recururse -Force $tempDir
}
New-Item -ItemType Directory -Force -Path $tempDir

Write-Output "Extracting $zipFile to $tempDir..."
[System.IO.Compression.ZipFile]::ExtractToDirectory($zipFile, $tempDir)
Write-Output "Extraction complete!"
