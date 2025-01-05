#!/bin/zsh

echo "Testing file access..."
echo "Argument received: \${1:q}"
echo "Current directory: \$(pwd)"

FILE="\${1:q}"

if [[ -f \$FILE ]]; then
    echo "File exists!"
    ls -l "\$FILE"
else
    echo "File does not exist: \$FILE"
fi

