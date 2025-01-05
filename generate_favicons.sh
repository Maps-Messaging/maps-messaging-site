#!/bin/zsh

echo "Starting favicon generation..."

# Check if file exists
if [[ ! -f logo.png ]]; then
    echo "Error: logo.png not found in current directory"
    pwd
    ls -la
    exit 1
fi

# Create output directories
mkdir -p static/img/favicon
mkdir -p static/img/favicon/dark

# Check ImageMagick
if ! command -v magick > /dev/null; then
    echo "Error: ImageMagick not installed. Run: brew install imagemagick"
    exit 1
fi

echo "Generating favicons from logo.png..."

# Light versions (original colors)
echo "Generating 512x512 light"
magick logo.png -background none -density 300 -resize 512x512 "static/img/favicon/android-chrome-512x512.png"

echo "Generating 192x192 light"
magick logo.png -background none -density 300 -resize 192x192 "static/img/favicon/android-chrome-192x192.png"

echo "Generating 180x180 light"
magick logo.png -background none -density 300 -resize 180x180 "static/img/favicon/apple-touch-icon.png"

echo "Generating 150x150 light"
magick logo.png -background none -density 300 -resize 150x150 "static/img/favicon/mstile-150x150.png"

echo "Generating 96x96 light"
magick logo.png -background none -density 300 -resize 96x96 "static/img/favicon/favicon-96x96.png"

echo "Generating 32x32 light"
magick logo.png -background none -density 300 -resize 32x32 "static/img/favicon/favicon-32x32.png"

echo "Generating 16x16 light"
magick logo.png -background none -density 300 -resize 16x16 "static/img/favicon/favicon-16x16.png"

# Dark versions (white version)
echo "Generating 512x512 dark"
magick logo.png -background none -density 300 -resize 512x512 -alpha set -background white -alpha background "static/img/favicon/dark/android-chrome-512x512.png"

echo "Generating 192x192 dark"
magick logo.png -background none -density 300 -resize 192x192 -alpha set -background white -alpha background "static/img/favicon/dark/android-chrome-192x192.png"

echo "Generating 180x180 dark"
magick logo.png -background none -density 300 -resize 180x180 -alpha set -background white -alpha background "static/img/favicon/dark/apple-touch-icon.png"

echo "Generating 150x150 dark"
magick logo.png -background none -density 300 -resize 150x150 -alpha set -background white -alpha background "static/img/favicon/dark/mstile-150x150.png"

echo "Generating 96x96 dark"
magick logo.png -background none -density 300 -resize 96x96 -alpha set -background white -alpha background "static/img/favicon/dark/favicon-96x96.png"

echo "Generating 32x32 dark"
magick logo.png -background none -density 300 -resize 32x32 -alpha set -background white -alpha background "static/img/favicon/dark/favicon-32x32.png"

echo "Generating 16x16 dark"
magick logo.png -background none -density 300 -resize 16x16 -alpha set -background white -alpha background "static/img/favicon/dark/favicon-16x16.png"

# Generate favicon.ico for both themes
echo "Generating favicon.ico..."
magick "static/img/favicon/favicon-16x16.png" "static/img/favicon/favicon-32x32.png" "static/img/favicon/favicon-96x96.png" -colors 256 "static/img/favicon/favicon.ico"
magick "static/img/favicon/dark/favicon-16x16.png" "static/img/favicon/dark/favicon-32x32.png" "static/img/favicon/dark/favicon-96x96.png" -colors 256 "static/img/favicon/dark/favicon.ico"

echo "Done! Generated files in static/img/favicon/:"
ls -l static/img/favicon/
echo "Dark theme files in static/img/favicon/dark/:"
ls -l static/img/favicon/dark/

# Create/update site.webmanifest
cat > static/img/favicon/site.webmanifest << EOF
{
    "name": "MAPS Messaging",
    "short_name": "MAPS",
    "icons": [
        {
            "src": "/img/favicon/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/img/favicon/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#063472",
    "background_color": "transparent",
    "display": "standalone"
}
EOF

echo "site.webmanifest updated"
