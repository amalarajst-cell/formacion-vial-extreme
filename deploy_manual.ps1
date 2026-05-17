
# Script de deploy manual para GitHub Pages
# Evita el error ENAMETOOLONG de gh-pages
Write-Host "=== Deploy Manual a GitHub Pages ===" -ForegroundColor Cyan

$REPO_URL = "https://github.com/amalarajst-cell/formacion-vial-extreme.git"
$DIST_DIR = "dist"
$TEMP_DIR = "C:\gh_deploy_temp"

# 1. Verificar que el build existe
if (-not (Test-Path $DIST_DIR)) {
    Write-Host "ERROR: No existe la carpeta dist/. Ejecuta npm run build primero." -ForegroundColor Red
    exit 1
}

# 2. Limpiar carpeta temporal si existe
if (Test-Path $TEMP_DIR) {
    Write-Host "Limpiando carpeta temporal anterior..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force $TEMP_DIR
}

# 3. Clonar solo la rama gh-pages
Write-Host "Clonando rama gh-pages..." -ForegroundColor Yellow
git clone --branch gh-pages --single-branch $REPO_URL $TEMP_DIR

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR al clonar. Revisa tu conexion a internet y credenciales." -ForegroundColor Red
    exit 1
}

# 4. Borrar TODO el contenido de gh-pages (menos .git)
Write-Host "Limpiando contenido anterior de gh-pages..." -ForegroundColor Yellow
Get-ChildItem -Path $TEMP_DIR -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force

# 5. Copiar el nuevo build
Write-Host "Copiando nuevo build..." -ForegroundColor Yellow
Copy-Item -Path "$DIST_DIR\*" -Destination $TEMP_DIR -Recurse -Force

# 6. Ir a la carpeta temporal y hacer commit + push
Write-Host "Haciendo commit y push a gh-pages..." -ForegroundColor Yellow
Set-Location $TEMP_DIR

git add --all
git commit -m "Deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push origin gh-pages --force

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR al hacer push. Revisa tus credenciales de GitHub." -ForegroundColor Red
    Set-Location $PSScriptRoot
    exit 1
}

# 7. Volver y limpiar
Set-Location $PSScriptRoot
Remove-Item -Recurse -Force $TEMP_DIR

Write-Host "" 
Write-Host "=== DEPLOY EXITOSO ===" -ForegroundColor Green
Write-Host "El sitio se actualizara en: https://amalarajst-cell.github.io/formacion-vial-extreme/" -ForegroundColor Green
Write-Host "(Puede tardar 1-3 minutos en verse el cambio)" -ForegroundColor Yellow
