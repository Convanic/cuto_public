# Nginx Setup für cuto.ai - Finale Anleitung

## 📋 Aktuelle Situation

- ✅ Apache läuft auf Port 80/443
- ✅ Apache verwaltet: gobio.app, singlepair.fun, swing22.com, loccle.app, etc.
- ✅ Apache nutzt Let's Encrypt SSL
- 🎯 Ziel: Nginx für cuto.ai parallel zu Apache

## 🎯 Lösung: Nginx als Haupt-Proxy

**Strategie:**
1. Apache auf Port 8080/8443 umstellen
2. Nginx auf Port 80/443 als Haupt-Proxy
3. Nginx leitet cuto.ai direkt weiter
4. Nginx leitet alle anderen Domains an Apache weiter

**Vorteile:**
- ✅ cuto.ai auf Standard-Ports (80/443)
- ✅ Bestehende Domains funktionieren weiter
- ✅ SSL einfach mit Let's Encrypt
- ✅ Zentrales Management

## 🔧 Schritt-für-Schritt Setup

### Schritt 1: Apache auf Port 8080/8443 umstellen

```bash
# 1. Apache Ports-Konfiguration anpassen
sudo nano /etc/apache2/ports.conf
```

**Ändere:**
```apache
# Von:
Listen 80
Listen 443

# Zu:
Listen 8080
Listen 8443
```

**Oder falls in Virtual Hosts definiert:**
```bash
# Prüfe alle Virtual Hosts
grep -r "Listen\|<VirtualHost" /etc/apache2/sites-enabled/

# Ändere alle VirtualHost Einträge von:
<VirtualHost *:80>
<VirtualHost *:443>

# Zu:
<VirtualHost *:8080>
<VirtualHost *:8443>
```

### Schritt 2: Apache neu starten

```bash
# Konfiguration testen
sudo apache2ctl configtest

# Apache neu starten
sudo systemctl restart apache2

# Prüfen ob Apache auf neuen Ports läuft
sudo netstat -tlnp | grep apache
# Sollte zeigen: 8080 und 8443
```

### Schritt 3: Nginx installieren

```bash
# Nginx installieren
sudo apt update
sudo apt install nginx -y

# Nginx starten
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Schritt 4: Nginx-Konfiguration für cuto.ai

```bash
cd /var/www/cuto

# Konfiguration kopieren
sudo cp nginx-cuto-www.conf /etc/nginx/sites-available/cuto-www

# Aktivieren
sudo ln -s /etc/nginx/sites-available/cuto-www /etc/nginx/sites-enabled/
```

### Schritt 5: Nginx als Proxy für Apache-Domains

Erstelle `/etc/nginx/sites-available/apache-proxy`:

```bash
sudo nano /etc/nginx/sites-available/apache-proxy
```

**Inhalt:**
```nginx
# Proxy für alle Apache-Domains
# Diese Domains werden an Apache auf Port 8080/8443 weitergeleitet

# HTTP (Port 80)
server {
    listen 80;
    listen [::]:80;
    
    # Alle Apache-Domains hier auflisten
    server_name 
        gobio.app www.gobio.app
        adm.gobio.app
        apidev.gobio.app
        api.gobio.app
        dev.gobio.app
        loccle.app www.loccle.app
        singlepair.fun www.singlepair.fun
        phpmyadmin.singlepair.fun
        swing22.com www.swing22.com;
    
    location / {
        proxy_pass http://localhost:8080;
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

# HTTPS (Port 443)
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    
    # Alle Apache-Domains hier auflisten
    server_name 
        gobio.app www.gobio.app
        adm.gobio.app
        apidev.gobio.app
        api.gobio.app
        dev.gobio.app
        loccle.app www.loccle.app
        singlepair.fun www.singlepair.fun
        phpmyadmin.singlepair.fun
        swing22.com www.swing22.com;
    
    # SSL Zertifikate (von Let's Encrypt, bereits vorhanden)
    # Nginx muss auf die gleichen Zertifikate zugreifen
    # Diese werden von Certbot für Apache erstellt
    
    location / {
        proxy_pass https://localhost:8443;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_ssl_verify off;  # Wichtig: SSL-Verifizierung deaktivieren
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Aktivieren:**
```bash
sudo ln -s /etc/nginx/sites-available/apache-proxy /etc/nginx/sites-enabled/
```

### Schritt 6: SSL-Zertifikate für Apache-Domains

**Problem:** Apache nutzt Let's Encrypt, aber Nginx braucht Zugriff auf die Zertifikate.

**Lösung:** Nginx kann die gleichen Zertifikate nutzen:

```bash
# Prüfe wo die Zertifikate liegen
ls -la /etc/letsencrypt/live/

# Für jede Domain in apache-proxy müssen wir SSL konfigurieren
# Beispiel für gobio.app:
```

**Besser:** Nutze Certbot für Nginx, es erkennt die bestehenden Zertifikate:

```bash
# Certbot für Nginx installieren
sudo apt install certbot python3-certbot-nginx -y

# Certbot wird die bestehenden Zertifikate nutzen
```

### Schritt 7: Nginx konfigurieren und testen

```bash
# Konfiguration testen
sudo nginx -t

# Falls Fehler: Logs prüfen
sudo tail -f /var/log/nginx/error.log

# Nginx neu laden
sudo systemctl reload nginx
```

### Schritt 8: Firewall anpassen

```bash
# Port 80/443 für Nginx (bereits offen durch Apache)
# Port 8080/8443 für Apache (neu öffnen, falls Firewall aktiv)
sudo ufw allow 8080/tcp
sudo ufw allow 8443/tcp
```

## 🧪 Testing

### Test 1: Apache-Domains (sollten weiter funktionieren)

```bash
# HTTP
curl -I http://gobio.app

# HTTPS
curl -I https://gobio.app
```

### Test 2: cuto.ai (sollte funktionieren)

```bash
# HTTP
curl -I http://cuto.ai

# Direkt auf Port 3000
curl -I http://localhost:3000
```

### Test 3: Ports prüfen

```bash
# Nginx sollte auf 80/443 laufen
sudo netstat -tlnp | grep nginx

# Apache sollte auf 8080/8443 laufen
sudo netstat -tlnp | grep apache
```

## ⚠️ Wichtig: SSL-Zertifikate

**Für Apache-Domains:**
- Die bestehenden Let's Encrypt Zertifikate funktionieren weiter
- Nginx leitet HTTPS-Anfragen an Apache weiter
- Oder: Nginx nutzt die gleichen Zertifikate direkt

**Für cuto.ai:**
- Neues SSL-Zertifikat mit Certbot holen:
```bash
sudo certbot --nginx -d cuto.ai -d www.cuto.ai
```

## 🔄 Rollback (falls Probleme)

Falls etwas nicht funktioniert:

```bash
# 1. Nginx stoppen
sudo systemctl stop nginx

# 2. Apache zurück auf Port 80/443
sudo nano /etc/apache2/ports.conf
# Ändere zurück zu: Listen 80 und Listen 443

# 3. Apache neu starten
sudo systemctl restart apache2
```

## 📝 Zusammenfassung

Nach dem Setup:
- ✅ **cuto.ai** → Nginx → Port 3000 (cuto_public)
- ✅ **app.cuto.ai** → Nginx → später cuto_dev
- ✅ **Alle anderen Domains** → Nginx → Apache Port 8080/8443
- ✅ **202.61.239.35:3002** → Direkt (DEV)

**Alle bestehenden Domains funktionieren weiter!**

