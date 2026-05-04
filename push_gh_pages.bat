@echo off
echo === Force Push a gh-pages ===
cd C:\gh_deploy_temp
git push --force https://github.com/amalarajst-cell/formacion-vial-extreme.git HEAD:gh-pages
echo Exit code: %ERRORLEVEL%
echo === Listo ===
