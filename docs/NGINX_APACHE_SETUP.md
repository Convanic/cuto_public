# Nginx + Apache Parallel Setup

Diese Anleitung zeigt, wie Nginx für cuto.ai parallel zu Apache für andere Domains eingerichtet wird.

## 📋 Deine Anforderungen

- **www.cuto.ai** → cuto_public app (Production) - Nginx
- **app.cuto.ai** → cuto app aus cuto_dev (später) - Nginx
- **202.61.239.35:3002** → DEV Seite der cuto_public - Direkt
- **Andere Domains** → Bestehende Apache-Installation - unverändert

## 🔍 Wichtige Informationen die ich brauche

Bitte gib mir folgende Informationen:

1. **Welche Domains laufen aktuell auf Apache?**
   - z.B. `example.com`, `other-domain.com`

2. **Auf welchen Ports läuft Apache?**
   ```bash
   # Auf dem Server ausführen:
   sudo netstat -tlnp | grep apache
   # oder
   sudo ss -tlnp | grep apache
   ```

3. **Welche IP-Adressen hat der Server?**
   ```bash
   ip addr show
   # oder
   hostname -I
   ```

4. **Läuft Apache auf Port 80/443?**
   ```bash
   sudo systemctl status apache2
   # oder
   sudo systemctl status httpd
   ```

5. **Sind die anderen Domains bereits auf cuto.ai Subdomains?**
   - Oder komplett andere Domains?

## 🎯 Mögliche Lösungen

### Option 1: Nginx und Apache parallel (Empfohlen)

**Wenn Apache auf Port 80/443 läuft:**
- Nginx kann auf anderen Ports laufen (z.B. 8080, 8443)
- Oder: Nginx als Reverse Proxy für cuto.ai, Apache für andere Domains
- Beide können auf 80/443 laufen, wenn sie unterschiedliche `server_name` verwenden

### Option 2: Nginx als Haupt-Proxy

**Wenn wir Nginx als Haupt-Proxy nutzen:**
- Nginx auf Port 80/443
- Nginx leitet cuto.ai weiter
- Nginx leitet andere Domains an Apache weiter (auf Port 8080)

### Option 3: Port-basiert

**Wenn Port-Sharing nicht möglich:**
- Apache bleibt auf 80/443 für bestehende Domains
- Nginx auf 8080/8443 für cuto.ai
- DNS zeigt cuto.ai auf Port 8080 (nicht ideal)

## 📝 Nächste Schritte

Sobald ich die Informationen habe, erstelle ich:
1. Nginx-Konfiguration für www.cuto.ai
2. Nginx-Konfiguration für app.cuto.ai (vorbereitet)
3. Anleitung für Apache-Kompatibilität
4. Firewall-Regeln

**Bitte führe diese Befehle auf dem Server aus und teile die Ausgabe:**

```bash
# 1. Apache Status
sudo systemctl status apache2

# 2. Apache Ports
sudo netstat -tlnp | grep -E 'apache|httpd'

# 3. Server IPs
ip addr show | grep inet

# 4. Bestehende Apache Virtual Hosts
ls -la /etc/apache2/sites-enabled/
# oder
ls -la /etc/httpd/conf.d/
```

