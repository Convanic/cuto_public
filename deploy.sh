#!/bin/bash

# Deployment Script für CUTO Public
# Verwendung: ./deploy.sh

set -e  # Exit on error

echo "🚀 Starting CUTO Public deployment..."

# Prüfen ob wir im richtigen Verzeichnis sind
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project directory?"
    exit 1
fi

# Dependencies installieren
echo "📦 Installing dependencies..."
npm install

# Build erstellen
echo "🔨 Building application..."
npm run build

# PM2 verwenden falls installiert
if command -v pm2 &> /dev/null; then
    echo "🔄 Restarting with PM2..."
    if pm2 list | grep -q "cuto-public"; then
        pm2 restart cuto-public
    else
        pm2 start ecosystem.config.js
    fi
    pm2 save
    echo "✅ Application restarted with PM2"
else
    echo "⚠️  PM2 not found. Please install PM2 or start manually with 'npm start'"
    echo "   Install PM2: npm install -g pm2"
fi

echo "✨ Deployment complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Check if the app is running: pm2 status"
echo "   2. View logs: pm2 logs cuto-public"
echo "   3. Make sure Nginx is configured correctly"
echo "   4. Test your domain/subdomain"

