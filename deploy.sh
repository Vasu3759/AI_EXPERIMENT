#!/bin/bash

# Exit on error
set -e

echo "Starting deployment process..."

# 1. Pull the latest code
echo "Pulling latest code from git..."
git pull origin main

# 2. Install dependencies
echo "Installing dependencies..."
npm install

# 3. Build the Next.js static export
echo "Building the static export..."
npm run build

echo "Deployment build complete! The static files are located in the 'out' directory."
echo ""
echo "Next steps if this is the first deployment:"
echo "1. Copy nginx-aipowered.conf to /etc/nginx/sites-available/aipowered.chalksnboard.com.conf"
echo "2. Create a symlink: sudo ln -s /etc/nginx/sites-available/aipowered.chalksnboard.com.conf /etc/nginx/sites-enabled/"
echo "3. Test nginx configuration: sudo nginx -t"
echo "4. Reload nginx: sudo systemctl reload nginx"
echo "5. Generate SSL certificate: sudo certbot --nginx -d aipowered.chalksnboard.com"
