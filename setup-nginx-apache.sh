#!/bin/bash

# Nginx + Apache Setup Script
# Dieses Script richtet Nginx für cuto.ai parallel zu Apache ein

set -e

echo "=========================================="
echo "Nginx + Apache Parallel Setup"
echo "=========================================="
echo ""

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Prüfe ob als root ausgeführt
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}Error: Bitte als root ausführen (sudo ./setup-nginx-apache.sh)${NC}"
    exit 1
fi

echo -e "${YELLOW}Schritt 1: Apache Virtual Hosts analysieren...${NC}"
APACHE_DOMAINS=$(grep -h "ServerName" /etc/apache2/sites-enabled/*.conf 2>/dev/null | sed 's/.*ServerName //' | sort -u | tr '\n' ' ')

if [ -z "$APACHE_DOMAINS" ]; then
    echo -e "${RED}Keine Apache-Domains gefunden. Bitte manuell prüfen.${NC}"
    exit 1
fi

echo "Gefundene Apache-Domains: $APACHE_DOMAINS"
echo ""

echo -e "${YELLOW}Schritt 2: Apache auf Port 8080/8443 umstellen...${NC}"
read -p "Apache Ports ändern? (j/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Jj]$ ]]; then
    # Backup erstellen
    cp /etc/apache2/ports.conf /etc/apache2/ports.conf.backup.$(date +%Y%m%d_%H%M%S)
    
    # Ports ändern
    sed -i 's/^Listen 80$/Listen 8080/' /etc/apache2/ports.conf
    sed -i 's/^Listen 443$/Listen 8443/' /etc/apache2/ports.conf
    
    # VirtualHost Ports ändern
    find /etc/apache2/sites-enabled/ -name "*.conf" -exec sed -i 's/<VirtualHost \*:80>/<VirtualHost *:8080>/g' {} \;
    find /etc/apache2/sites-enabled/ -name "*.conf" -exec sed -i 's/<VirtualHost \*:443>/<VirtualHost *:8443>/g' {} \;
    
    echo -e "${GREEN}Apache Ports geändert. Bitte manuell prüfen!${NC}"
    echo "Konfiguration testen: sudo apache2ctl configtest"
    echo "Apache neu starten: sudo systemctl restart apache2"
    echo ""
    read -p "Apache bereits neu gestartet? (j/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Jj]$ ]]; then
        echo -e "${YELLOW}Bitte Apache manuell neu starten und Script erneut ausführen.${NC}"
        exit 0
    fi
else
    echo -e "${YELLOW}Apache Ports nicht geändert. Bitte manuell anpassen.${NC}"
fi

echo -e "${YELLOW}Schritt 3: Nginx installieren...${NC}"
if ! command -v nginx &> /dev/null; then
    apt update
    apt install nginx -y
    echo -e "${GREEN}Nginx installiert.${NC}"
else
    echo -e "${GREEN}Nginx bereits installiert.${NC}"
fi

echo ""
echo -e "${YELLOW}Schritt 4: Nginx-Konfiguration für cuto.ai erstellen...${NC}"
cd /var/www/cuto
cp nginx-cuto-www.conf /etc/nginx/sites-available/cuto-www
ln -sf /etc/nginx/sites-available/cuto-www /etc/nginx/sites-enabled/
echo -e "${GREEN}www.cuto.ai Konfiguration erstellt.${NC}"

echo ""
echo -e "${YELLOW}Hinweis: app.cuto.ai wird automatisch in die Apache-Proxy-Liste aufgenommen${NC}"
echo -e "${YELLOW}(da es eine PHP/MySQL-Anwendung ist, die über Apache läuft).${NC}"

echo ""
echo -e "${YELLOW}Schritt 5: Apache-Proxy-Konfiguration erstellen...${NC}"

# Füge app.cuto.ai zu den Apache-Domains hinzu (PHP/MySQL-App läuft über Apache)
APACHE_DOMAINS_WITH_APP="$APACHE_DOMAINS app.cuto.ai www.app.cuto.ai"

# Erstelle Apache-Proxy Konfiguration
cat > /etc/nginx/sites-available/apache-proxy <<EOF
# Apache Proxy - Weiterleitung aller Apache-Domains an Apache auf Port 8080/8443
# Auto-generiert am $(date)
# Enthält: Alle bestehenden Apache-Domains + app.cuto.ai (PHP/MySQL)

# HTTP (Port 80)
server {
    listen 80;
    listen [::]:80;
    
    server_name $APACHE_DOMAINS_WITH_APP;
    
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}

# HTTPS (Port 443)
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    
    server_name $APACHE_DOMAINS_WITH_APP;
    
    # SSL wird später von Certbot konfiguriert
    # Für jetzt: Weiterleitung an Apache HTTPS
    
    location / {
        proxy_pass https://localhost:8443;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_ssl_verify off;
        proxy_cache_bypass \$http_upgrade;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
EOF

ln -sf /etc/nginx/sites-available/apache-proxy /etc/nginx/sites-enabled/
echo -e "${GREEN}Apache-Proxy Konfiguration erstellt.${NC}"

echo ""
echo -e "${YELLOW}Schritt 6: Nginx Konfiguration testen...${NC}"
if nginx -t; then
    echo -e "${GREEN}Nginx Konfiguration ist gültig.${NC}"
else
    echo -e "${RED}Nginx Konfiguration hat Fehler! Bitte prüfen.${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}Schritt 7: Nginx starten...${NC}"
systemctl reload nginx
systemctl enable nginx

echo ""
echo -e "${GREEN}=========================================="
echo "Setup abgeschlossen!"
echo "==========================================${NC}"
echo ""
echo "Nächste Schritte:"
echo "1. Prüfe ob Apache auf Port 8080/8443 läuft:"
echo "   sudo netstat -tlnp | grep apache"
echo ""
echo "2. Prüfe ob Nginx auf Port 80/443 läuft:"
echo "   sudo netstat -tlnp | grep nginx"
echo ""
echo "3. Teste cuto.ai:"
echo "   curl -I http://cuto.ai"
echo ""
echo "4. Teste Apache-Domains (z.B. gobio.app):"
echo "   curl -I http://gobio.app"
echo ""
echo "5. SSL für cuto.ai einrichten:"
echo "   sudo certbot --nginx -d cuto.ai -d www.cuto.ai"
echo ""

