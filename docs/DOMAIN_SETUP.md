# Domain Setup: cuto.ai einrichten

Diese Anleitung zeigt, wie du cuto.ai auf Port 80/443 (Production) einrichtest, während der Testserver weiterhin auf Port 3002 läuft.

## 📋 Übersicht

- **Production (cuto.ai)**: Port 80/443 → Nginx → Next.js auf Port 3000
- **Testserver**: Port 3002 → Direkt erreichbar (wie bisher)

## 🔧 Schritt-für-Schritt Anleitung

### 1. PM2 Konfiguration aktualisieren

Die `ecosystem.config.js` wurde bereits angepasst und enthält jetzt zwei Instanzen:

- `cuto-public-prod` → Port 3000 (für cuto.ai)
- `cuto-public-dev` → Port 3002 (für Testserver)

**Auf dem Server:**

```bash
cd /var/www/cuto

# Alte Instanz stoppen
pm2 stop cuto-public
pm2 delete cuto-public

# Neue Konfiguration starten (beide Instanzen)
pm2 start ecosystem.config.js

# Status prüfen
pm2 status

# Speichern für Auto-Start
pm2 save
```

**Erwartete Ausgabe:**
```
┌────┬──────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name                │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼──────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ cuto-public-prod    │ fork     │ 0    │ online    │ 0%       │ 50MB     │
│ 1  │ cuto-public-dev     │ fork     │ 0    │ online    │ 0%       │ 50MB     │
└────┴──────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

### 2. Nginx installieren (falls nicht vorhanden)

```bash
# Prüfen ob Nginx installiert ist
nginx -v

# Falls nicht installiert:
sudo apt update
sudo apt install nginx -y

# Nginx starten
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 3. Nginx Konfiguration einrichten

**Option A: Konfiguration aus dem Projekt kopieren**

```bash
cd /var/www/cuto

# Nginx Konfiguration kopieren
sudo cp nginx-cuto.ai.conf /etc/nginx/sites-available/cuto

# Symlink erstellen (aktivieren)
sudo ln -s /etc/nginx/sites-available/cuto /etc/nginx/sites-enabled/

# Standard-Konfiguration deaktivieren (falls vorhanden)
sudo rm /etc/nginx/sites-enabled/default
```

**Option B: Manuell erstellen**

```bash
sudo nano /etc/nginx/sites-available/cuto
```

Füge diesen Inhalt ein:

```nginx
# HTTP Server (Port 80) - leitet zu HTTPS weiter
server {
    listen 80;
    listen [::]:80;
    server_name cuto.ai www.cuto.ai;

    # Weiterleitung zu HTTPS (nach SSL Setup)
    # Vor SSL: Kommentar entfernen und auf Port 3000 weiterleiten
    # return 301 https://$server_name$request_uri;
    
    # Vor SSL Setup: Direkt auf Port 3000 weiterleiten
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}

# HTTPS Server (Port 443) - nach SSL Setup aktivieren
# server {
#     listen 443 ssl http2;
#     listen [::]:443 ssl http2;
#     server_name cuto.ai www.cuto.ai;
#
#     ssl_certificate /etc/letsencrypt/live/cuto.ai/fullchain.pem;
#     ssl_certificate_key /etc/letsencrypt/live/cuto.ai/privkey.pem;
#     
#     ssl_protocols TLSv1.2 TLSv1.3;
#     ssl_ciphers HIGH:!aNULL:!MD5;
#     ssl_prefer_server_ciphers on;
#
#     location / {
#         proxy_pass http://localhost:3000;
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade $http_upgrade;
#         proxy_set_header Connection 'upgrade';
#         proxy_set_header Host $host;
#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto $scheme;
#         proxy_cache_bypass $http_upgrade;
#     }
# }
```

### 4. Nginx Konfiguration testen und aktivieren

```bash
# Konfiguration testen
sudo nginx -t

# Falls erfolgreich: Nginx neu laden
sudo systemctl reload nginx

# Status prüfen
sudo systemctl status nginx
```

### 5. Firewall konfigurieren (falls aktiv)

```bash
# Prüfen ob Firewall aktiv ist
sudo ufw status

# Falls aktiv: Port 80 und 443 öffnen
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Port 3002 für Testserver offen lassen (falls von außen erreichbar)
sudo ufw allow 3002/tcp
```

### 6. DNS konfigurieren

Stelle sicher, dass die DNS-Einträge für `cuto.ai` auf deine Server-IP zeigen:

**A-Record:**
```
cuto.ai        → 202.61.239.35
www.cuto.ai   → 202.61.239.35
```

**Prüfen:**
```bash
# DNS prüfen
dig cuto.ai
nslookup cuto.ai
```

### 7. SSL/HTTPS einrichten (Let's Encrypt)

**Wichtig:** SSL kann nur eingerichtet werden, wenn:
- DNS korrekt konfiguriert ist
- Port 80 von außen erreichbar ist
- cuto.ai bereits auf Port 80 erreichbar ist

```bash
# Certbot installieren
sudo apt install certbot python3-certbot-nginx -y

# SSL Zertifikat holen (Certbot konfiguriert Nginx automatisch)
sudo certbot --nginx -d cuto.ai -d www.cuto.ai

# Automatische Erneuerung testen
sudo certbot renew --dry-run
```

Nach dem SSL-Setup wird Certbot die Nginx-Konfiguration automatisch anpassen und HTTPS aktivieren.

### 8. Testen

**Production (cuto.ai):**
```bash
# HTTP testen
curl -I http://cuto.ai

# HTTPS testen (nach SSL Setup)
curl -I https://cuto.ai
```

**Testserver (Port 3002):**
```bash
# Direkt testen
curl -I http://202.61.239.35:3002
```

**Im Browser:**
- Production: `http://cuto.ai` oder `https://cuto.ai` (nach SSL)
- Testserver: `http://202.61.239.35:3002`

## 🔍 Troubleshooting

### Nginx startet nicht

```bash
# Fehler prüfen
sudo nginx -t
sudo journalctl -u nginx -n 50

# Logs prüfen
sudo tail -f /var/log/nginx/error.log
```

### Port 3000 nicht erreichbar

```bash
# Prüfen ob Next.js auf Port 3000 läuft
curl http://localhost:3000

# PM2 Status prüfen
pm2 status
pm2 logs cuto-public-prod

# Port prüfen
sudo netstat -tlnp | grep 3000
```

### Domain zeigt nicht auf Server

```bash
# DNS prüfen
dig cuto.ai +short
nslookup cuto.ai

# Sollte deine Server-IP zurückgeben
```

### SSL Zertifikat kann nicht erstellt werden

- Prüfe ob DNS korrekt ist
- Prüfe ob Port 80 von außen erreichbar ist
- Prüfe ob cuto.ai bereits auf Port 80 erreichbar ist
- Warte 5-10 Minuten nach DNS-Änderungen

## 📝 Wichtige Befehle

### PM2 Management

```bash
# Beide Instanzen starten
pm2 start ecosystem.config.js

# Nur Production starten
pm2 start cuto-public-prod

# Nur Testserver starten
pm2 start cuto-public-dev

# Status prüfen
pm2 status

# Logs ansehen
pm2 logs cuto-public-prod
pm2 logs cuto-public-dev

# Neustarten
pm2 restart all
pm2 restart cuto-public-prod
pm2 restart cuto-public-dev
```

### Nginx Management

```bash
# Konfiguration testen
sudo nginx -t

# Neu laden (ohne Downtime)
sudo systemctl reload nginx

# Neustarten
sudo systemctl restart nginx

# Status prüfen
sudo systemctl status nginx

# Logs ansehen
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## 🎯 Zusammenfassung

Nach der Einrichtung hast du:

✅ **cuto.ai** → Port 80/443 → Nginx → Next.js Port 3000 (Production)  
✅ **202.61.239.35:3002** → Next.js Port 3002 (Testserver)  
✅ Beide Instanzen laufen parallel mit PM2  
✅ SSL/HTTPS kann später eingerichtet werden  

## 🔄 Updates deployen

Nach Code-Änderungen:

```bash
cd /var/www/cuto

# Code aktualisieren
git pull

# Dependencies installieren
npm install

# Build erstellen
npm run build

# PM2 neu starten (beide Instanzen)
pm2 restart all
```

**Hinweis:** Beide Instanzen teilen sich den gleichen Code und Build. Nur der Port unterscheidet sich.

