@echo off
echo ==============================================
echo Installation des dependances (React, Tailwind, Framer Motion...)
echo ==============================================
call npm install
echo.
echo ==============================================
echo Demarrage du serveur de developpement !
echo ==============================================
call npm run dev
pause
