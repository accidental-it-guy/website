#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting development server and Git push script...${NC}"

# Function to push changes to GitHub
push_changes() {
    echo -e "\n${YELLOW}Pushing changes to GitHub...${NC}"

    # Check git status
    if git diff-index --quiet HEAD --; then
        echo -e "${YELLOW}No changes to commit${NC}"
    else
        # Show current changes
        echo -e "${GREEN}Current changes:${NC}"
        git status --short

        # Add all changes
        git add -A

        # Commit with timestamp
        TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
        git commit -m "Auto-commit: $TIMESTAMP"

        echo -e "${GREEN}Changes committed${NC}"
    fi

    # Push to origin
    echo -e "${YELLOW}Pushing to remote...${NC}"
    git push origin main

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}Successfully pushed to GitHub!${NC}"
    else
        echo -e "${RED}Failed to push. Please check your Git configuration.${NC}"
        exit 1
    fi
}

# Function to start dev server
start_dev_server() {
    echo -e "\n${YELLOW}Installing dependencies...${NC}"
    npm i
    echo -e "\n${GREEN}Starting development server...${NC}"
    echo -e "${YELLOW}Server will run at http://localhost:4321${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}\n"
    npm run dev
}

# Main execution
echo -e "${YELLOW}Choose an option:${NC}"
echo "1) Push changes then start dev server"
echo "2) Start dev server then push changes (after you stop the server)"
echo "3) Just push changes"
echo "4) Just start dev server"
read -p "Enter choice [1-4]: " choice

case $choice in
    1)
        push_changes
        start_dev_server
        ;;
    2)
        start_dev_server
        push_changes
        ;;
    3)
        push_changes
        ;;
    4)
        start_dev_server
        ;;
    *)
        echo -e "${RED}Invalid choice${NC}"
        exit 1
        ;;
esac