#!/bin/bash

# Get the directory where the script is being run
CURRENT_DIR="$(pwd)"

# Define the full paths for the directories
FASTAPI_DIR="${CURRENT_DIR}/FastAPI/app"
BEERLENS_DIR="${CURRENT_DIR}/beerlens"

# Define the first set of commands with the full path
FIRST_COMMANDS="cd \"${FASTAPI_DIR}\"; pip install -r requirements.txt; uvicorn main:app;"

# Define the second set of commands with the full path
SECOND_COMMANDS="cd \"${BEERLENS_DIR}\"; npm install; npm start;"

# Create an AppleScript string to open a new Terminal window and execute the first set of commands
osascript <<END
tell application "Terminal"
    do script "$FIRST_COMMANDS"
end tell
END

# Sleep for a bit to allow the first window to initialize before opening the second one
sleep 1

# Create an AppleScript string to open a second Terminal window and execute the second set of commands
osascript <<END
tell application "Terminal"
    do script "$SECOND_COMMANDS"
end tell
END

# This bash script will now execute and create two Terminal windows running the specified commands.
