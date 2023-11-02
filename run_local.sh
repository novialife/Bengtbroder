#!/bin/bash

# Navigate to the beerlens directory and install npm packages
cd ./beerlens || { echo "Failed to find the beerlens directory. Exiting..."; exit 1; }
npm install || { echo "npm install failed. Exiting..."; exit 1; }

# Navigate to the FastAPI app directory and install Python requirements
cd ../FastAPI/app || { echo "Failed to find the FastAPI/app directory. Exiting..."; exit 1; }
pip install -r requirements.txt || { echo "pip install failed. Exiting..."; exit 1; }

# Starting the development servers using subshells to handle multiple processes

# Start the npm development server
(
    cd ../../beerlens || exit
    npm start || exit
) &
NPM_PID=$!

# Start the uvicorn server
(
    cd ../FastAPI/app || exit
    uvicorn main:app --reload || exit
) &
UVICORN_PID=$!

# Wait for npm and uvicorn servers to exit
wait $NPM_PID
wait $UVICORN_PID
