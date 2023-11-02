#!/bin/bash

# Get the directory where the script is being run
CURRENT_DIR=$(pwd)

# Define the full paths for the directories
FASTAPI_DIR="${CURRENT_DIR}/FastAPI/app"
BEERLENS_DIR="${CURRENT_DIR}/beerlens"

# Define the first set of commands with the full path
FIRST_COMMANDS="cd ${FASTAPI_DIR} && pip install -r requirements.txt && uvicorn main:app"

# Define the second set of commands with the full path
SECOND_COMMANDS="cd ${BEERLENS_DIR} && npm install && npm start"

# Open a new terminal window and execute the first set of commands
gnome-terminal -- /bin/bash -c "$FIRST_COMMANDS"

# Sleep for a bit to allow the first window to initialize before opening the second one
sleep 1

# Open a new terminal window and execute the second set of commands
gnome-terminal -- /bin/bash -c "$SECOND_COMMANDS"
