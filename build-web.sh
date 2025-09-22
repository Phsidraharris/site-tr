#!/bin/bash
set -e

echo "Current directory: $(pwd)"
echo "Listing contents:"
ls -la

echo "Installing dependencies..."
yarn install

echo "Navigating to web package..."
if [ -d "packages/web" ]; then
    cd packages/web
    echo "Successfully changed to web directory: $(pwd)"
else
    echo "Error: packages/web directory not found"
    echo "Available directories:"
    find . -type d -name "web" -o -name "*web*" | head -10
    exit 1
fi

echo "Building web package..."
NODE_OPTIONS=--openssl-legacy-provider npm run build

echo "Build completed successfully"
echo "Build output location: $(pwd)/build"
ls -la build/ | head -10