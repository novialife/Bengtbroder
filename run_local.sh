#!/bin/bash

# Define the first set of commands as a single string
FIRST_COMMANDS="cd ./FastAPI/app; pip install -r requirements.txt; uvicorn main:app;"

# Define the second set of commands as a single string
SECOND_COMMANDS="cd ./beerlens; npm install; npm start;"

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
