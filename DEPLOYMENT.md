# Deployment-Anleitung für CUTO Public

Diese Anleitung beschreibt, wie Sie die CUTO Landing Page auf einem Server deployen, auf dem bereits mehrere Apps laufen.

## Option 1: Nginx Reverse Proxy mit Subdomain (Empfohlen)

### Voraussetzungen
- Nginx installiert
- Node.js und npm auf dem Server
- Domain/Subdomain konfiguriert (z.B. `cuto.example.com`)

### Schritte

#### 1. Projekt auf Server kopieren
```bash
# Auf Ihrem lokalen Rechner
npm run build
# Projekt-Dateien auf Server kopieren (z.B. via rsync, scp, git)
```

#### 2. Auf dem Server: Dependencies installieren
```bash
cd /path/to/cuto_public
npm install --production
npm run build
```

#### 3. PM2 für Prozess-Management (optional, aber empfohlen)
```bash
# PM2 global installieren
npm install -g pm2

# App mit PM2 starten
pm2 start npm --name "cuto-public" -- start
pm2 save
pm2 startup  # Für Auto-Start nach Reboot
```

#### 4. Nginx Konfiguration
Kopieren Sie die vorkonfigurierte Datei für cuto.ai:

```bash
sudo cp nginx-cuto.ai.conf /etc/nginx/sites-available/cuto
```

Oder erstellen Sie manuell `/etc/nginx/sites-available/cuto` mit folgendem Inhalt:

```nginx
# HTTP Server (Port 80) - leitet zu HTTPS weiter
server {
    listen 80;
    server_name cuto.ai www.cuto.ai;
    return 301 https://$server_name$request_uri;
}

# HTTPS Server (Port 443)
server {
    listen 443 ssl http2;
    server_name cuto.ai www.cuto.ai;

    ssl_certificate /etc/letsencrypt/live/cuto.ai/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/cuto.ai/privkey.pem;

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
    }
}
```

#### 5. Nginx aktivieren
```bash
sudo ln -s /etc/nginx/sites-available/cuto /etc/nginx/sites-enabled/
sudo nginx -t  # Konfiguration testen
sudo systemctl reload nginx
```

#### 6. SSL/HTTPS mit Let's Encrypt (empfohlen)
```bash
# Zuerst temporäre HTTP-Konfiguration ohne Redirect
# Dann SSL Zertifikat holen
sudo certbot --nginx -d cuto.ai -d www.cuto.ai

# Certbot konfiguriert automatisch die Weiterleitung zu HTTPS
```

---

## Option 2: Nginx Reverse Proxy mit Pfad

Wenn Sie keine Subdomain verwenden möchten, können Sie die App unter einem Pfad hosten (z.B. `example.com/cuto`).

### Nginx Konfiguration
```nginx
server {
    listen 80;
    server_name example.com;

    location /cuto {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Wichtig: Rewrite für Next.js
        rewrite ^/cuto/?(.*)$ /$1 break;
    }
}
```

**Wichtig:** Für Pfad-basiertes Routing müssen Sie `next.config.ts` anpassen (siehe unten).

---

## Option 3: Docker (für isolierte Deployment)

### Dockerfile erstellen
Siehe `Dockerfile` in diesem Projekt.

### Docker Compose
```yaml
version: '3.8'
services:
  cuto-public:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
```

---

## Next.js Konfiguration für Pfad-basiertes Routing

Wenn Sie Option 2 (Pfad-basiert) verwenden, fügen Sie in `next.config.ts` hinzu:

```typescript
const nextConfig = {
  basePath: '/cuto',
  assetPrefix: '/cuto',
}
```

---

## PM2 Ecosystem File (für mehrere Apps)

Erstellen Sie `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [
    {
      name: 'cuto-public',
      script: 'npm',
      args: 'start',
      cwd: '/path/to/cuto_public',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    // Weitere Apps hier...
  ]
};
```

Dann starten Sie alle Apps mit:
```bash
pm2 start ecosystem.config.js
pm2 save
```

---

## Port-Management

Wenn mehrere Next.js Apps laufen, verwenden Sie verschiedene Ports:

- CUTO Public: Port 3000
- Andere App 1: Port 3001
- Andere App 2: Port 3002

In der Nginx-Konfiguration entsprechend anpassen:
```nginx
proxy_pass http://localhost:3000;  # Für CUTO
proxy_pass http://localhost:3001;   # Für andere App
```

---

## Environment Variables

Für Production-Variablen erstellen Sie `.env.production`:
```bash
NODE_ENV=production
PORT=3000
```

---

## Build und Start Scripts

Für einfaches Deployment können Sie ein Deploy-Script erstellen:

```bash
#!/bin/bash
# deploy.sh

echo "Building CUTO Public..."
npm run build

echo "Restarting PM2..."
pm2 restart cuto-public

echo "Deployment complete!"
```

---

## Troubleshooting

### Port bereits belegt
```bash
# Port prüfen
sudo lsof -i :3000
# Prozess beenden oder anderen Port verwenden
```

### Nginx Fehler
```bash
# Logs prüfen
sudo tail -f /var/log/nginx/error.log
# Konfiguration testen
sudo nginx -t
```

### Next.js startet nicht
```bash
# Logs prüfen
pm2 logs cuto-public
# Oder direkt starten zum Debuggen
npm start
```

