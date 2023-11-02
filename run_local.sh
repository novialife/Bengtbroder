#!/bin/bash

# Ensure tmux is installed
if ! command -v tmux &> /dev/null; then
    echo "tmux could not be found. Please install tmux and run this script again."
    exit 1
fi

# Start a new tmux session detached
SESSION_NAME="website_dev"
tmux new-session -d -s "$SESSION_NAME"

# Navigate to the beerlens directory and install npm packages
tmux send-keys -t "$SESSION_NAME" 'cd ./beerlens' C-m
tmux send-keys -t "$SESSION_NAME" 'npm install' C-m

# Split the window horizontally and navigate to the FastAPI app directory
tmux split-window -h -t "$SESSION_NAME"
tmux send-keys -t "${SESSION_NAME}:0.1" 'cd ./FastAPI/app' C-m
tmux send-keys -t "${SESSION_NAME}:0.1" 'pip install -r requirements.txt' C-m

# Start the npm development server in the first pane
tmux send-keys -t "${SESSION_NAME}:0.0" 'npm start' C-m

# Start the uvicorn server in the second pane
tmux send-keys -t "${SESSION_NAME}:0.1" 'uvicorn main:app --reload' C-m

# Attach to the tmux session
tmux attach -t "$SESSION_NAME"
