@echo off

:: Get the current directory
set CURRENT_DIR=%cd%

:: Define the full paths for the directories
set FASTAPI_DIR=%CURRENT_DIR%\FastAPI\app
set BEERLENS_DIR=%CURRENT_DIR%\beerlens

:: Start the first set of commands in a new Command Prompt window
start "FastAPI" cmd.exe /k "cd /d "%FASTAPI_DIR%" && pip install -r requirements.txt && uvicorn main:app"

:: Start the second set of commands in a new Command Prompt window
start "BeerLens" cmd.exe /k "cd /d "%BEERLENS_DIR%" && npm install && npm start"

:: The batch script ends here, and the two Command Prompt windows will execute their respective commands.
