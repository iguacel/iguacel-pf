#!/bin/bash

# Set the base directory relative to the script location
BASE_DIR="$(cd "$(dirname "$0")/../static/projects" && pwd)"

# Check if the base directory exists
if [ ! -d "$BASE_DIR" ]; then
    echo "Directory $BASE_DIR does not exist."
    exit 1
fi

# Find all subdirectories in the base directory
find "$BASE_DIR" -type d | while read -r dir; do
    # Check if there are any png files in the directory
    if compgen -G "$dir/*.png" > /dev/null; then
        echo "Converting images in directory: $dir"
        mogrify -format webp "$dir"/*.png
    else
        echo "No png images found in directory: $dir"
    fi
done

echo "Conversion to WebP completed."
