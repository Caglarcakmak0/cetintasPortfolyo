@echo off
echo ========================================
echo   Local Web Server Baslatiyor...
echo ========================================
echo.
echo Tarayicinizda su adresi ac:
echo   http://localhos  t:8000
echo.
echo Kapatmak icin bu pencerede Ctrl+C bas
echo ========================================
echo.

cd /d "%~dp0"
python -m http.server 8000

pause
