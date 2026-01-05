# Nginx + Apache Parallel Setup - Schritt für Schritt

## 🎯 Ziel

- **www.cuto.ai** → cuto_public (Nginx → Port 3000)
- **app.cuto.ai** → cuto_dev (Nginx → später)
- **Andere Domains** → Apache (unverändert)
- **202.61.239.35:3002** → cuto_public DEV (direkt)

## 📋 Schritt 1: Server-Informationen sammeln

Führe diese Befehle auf dem Server aus:

```bash
# 1. Apache Status und Ports
echo "=== Apache Status ==="
sudo systemctl status apache2 2>/dev/null || sudo systemctl status httpd 2>/dev/null

echo -e "\n=== Apache Ports ==="
sudo netstat -tlnp | grep -E 'apache|httpd' || sudo ss -tlnp | grep -E 'apache|httpd'

echo -e "\n=== Apache Virtual Hosts ==="
ls -la /etc/apache2/sites-enabled/ 2>/dev/null || ls -la /etc/httpd/conf.d/ 2>/dev/null

echo -e "\n=== Server IPs ==="
ip addr show | grep "inet " | grep -v "127.0.0.1"

echo -e "\n=== Aktuell laufende Services auf Port 80/443 ==="
sudo netstat -tlnp | grep -E ':80 |:443 ' || sudo ss -tlnp | grep -E ':80 |:443 '
```

**Teile die Ausgabe mit mir, dann erstelle ich die passende Konfiguration.**

## 🔧 Schritt 2: Nginx installieren

```bash
# Nginx installieren
sudo apt update
sudo apt install nginx -y

# Nginx starten (aber noch nicht auf Port 80/443)
sudo systemctl start nginx
sudo systemctl enable nginx
```

## 🎯 Schritt 3: Lösung wählen

### Lösung A: Nginx als Haupt-Proxy (Empfohlen)

**Wenn Apache auf Port 80/443 läuft:**

1. Apache auf Port 8080/8443 umstellen
2. Nginx auf Port 80/443 für cuto.ai
3. Nginx leitet andere Domains an Apache weiter

**Vorteile:**
- ✅ cuto.ai auf Standard-Ports (80/443)
- ✅ SSL einfach mit Let's Encrypt
- ✅ Bestehende Apache-Domains funktionieren weiter

### Lösung B: Nginx und Apache parallel

**Wenn beide auf 80/443 laufen sollen:**

- Beide binden auf 80/443
- Unterschiedliche `server_name` trennen die Domains
- Funktioniert nur wenn beide auf derselben IP laufen

**Vorteile:**
- ✅ Keine Änderungen an Apache nötig
- ⚠️ Komplexer zu verwalten

### Lösung C: Port-basiert

**Wenn Port-Sharing nicht möglich:**

- Apache bleibt auf 80/443
- Nginx auf 8080/8443
- cuto.ai zeigt auf Port 8080 (nicht ideal für SSL)

## 📝 Schritt 4: Konfiguration anwenden

**Sobald ich die Server-Informationen habe, erstelle ich:**

1. Nginx-Konfiguration für www.cuto.ai
2. Nginx-Konfiguration für app.cuto.ai (vorbereitet)
3. Apache-Anpassungen (falls nötig)
4. Firewall-Regeln

## 🚀 Schnellstart (nach Informationen)

```bash
# 1. Nginx-Konfigurationen kopieren
cd /var/www/cuto
sudo cp nginx-cuto-www.conf /etc/nginx/sites-available/cuto-www
sudo cp nginx-cuto-app.conf /etc/nginx/sites-available/cuto-app

# 2. Aktivieren
sudo ln -s /etc/nginx/sites-available/cuto-www /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/cuto-app /etc/nginx/sites-enabled/

# 3. Testen
sudo nginx -t

# 4. Aktivieren
sudo systemctl reload nginx
```

## ⚠️ Wichtig

**Bevor wir starten, brauche ich:**
1. ✅ Ausgabe der Befehle aus Schritt 1
2. ✅ Welche Domains aktuell auf Apache laufen
3. ✅ Ob Apache auf Port 80/443 läuft

**Dann kann ich die perfekte Konfiguration erstellen!**

