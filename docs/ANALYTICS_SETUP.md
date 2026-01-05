# Google Analytics & Heatmap Setup

Diese Dokumentation erklärt, wie die Google Analytics und Heatmap-Integration in CUTO eingerichtet wird.

## 📊 Übersicht

Die App unterstützt:
- **Google Analytics 4 (GA4)** - für Tracking und Analytics
- **Microsoft Clarity** (optional) - für Heatmaps und Session Recordings (kostenlos!)

## 🔧 Einrichtung

### 1. Google Analytics 4 einrichten

1. Gehe zu [Google Analytics](https://analytics.google.com/)
2. Erstelle zwei separate GA4 Properties:
   - **Development Property** (für Port 3002 / Dev-Server)
   - **Production Property** (für cuto.ai)

3. Kopiere die **Measurement IDs** (Format: `G-XXXXXXXXXX`)

4. Erstelle eine `.env.local` Datei im Root-Verzeichnis:

```bash
# Development/Staging (Port 3002)
NEXT_PUBLIC_GA_MEASUREMENT_ID_DEV=G-XXXXXXXXXX

# Production (cuto.ai)
NEXT_PUBLIC_GA_MEASUREMENT_ID_PROD=G-YYYYYYYYYY
```

5. Auf dem Server: Erstelle `.env.production` mit den Production-Werten

### 2. Microsoft Clarity einrichten (optional, für Heatmaps)

1. Gehe zu [Microsoft Clarity](https://clarity.microsoft.com/)
2. Erstelle ein kostenloses Konto
3. Erstelle zwei Projekte:
   - **Development Project** (für Port 3002)
   - **Production Project** (für cuto.ai)

4. Kopiere die **Project IDs**

5. Füge sie zur `.env.local` hinzu:

```bash
# Microsoft Clarity (optional)
NEXT_PUBLIC_CLARITY_PROJECT_ID_DEV=your-dev-project-id
NEXT_PUBLIC_CLARITY_PROJECT_ID_PROD=your-prod-project-id
```

## 🎯 Wie funktioniert die Unterscheidung?

Die App erkennt automatisch die Umgebung:

- **Development**: 
  - Port 3002
  - localhost
  - 127.0.0.1
  - Verwendet `NEXT_PUBLIC_GA_MEASUREMENT_ID_DEV`

- **Production**:
  - cuto.ai
  - www.cuto.ai
  - Verwendet `NEXT_PUBLIC_GA_MEASUREMENT_ID_PROD`

## 🍪 Cookie-Consent Integration

Die Analytics-Tools werden **nur geladen**, wenn der Benutzer Analytics-Cookies akzeptiert hat.

- Wenn der Benutzer Analytics-Cookies ablehnt → Kein Tracking
- Wenn der Benutzer Analytics-Cookies akzeptiert → Tracking wird aktiviert
- Die Einstellung wird im `localStorage` gespeichert

## 📈 Google Analytics Features

### Automatisches Tracking

- **Page Views**: Automatisch bei jedem Seitenwechsel
- **Environment Tag**: Jeder Event wird mit `environment: 'dev'` oder `'production'` getaggt

### Custom Events tracken

Du kannst Custom Events in deinen Komponenten tracken:

```typescript
import { trackEvent } from '@/lib/analytics/google-analytics';

// Beispiel: Button Click
trackEvent('button_click', 'engagement', 'cta_banner', 1);

// Beispiel: Form Submission
trackEvent('form_submit', 'conversion', 'contact_form', 1);

// Beispiel: Video Play
trackEvent('video_play', 'media', 'product_demo', 120);
```

### Page Views manuell tracken

```typescript
import { trackPageView } from '@/lib/analytics/google-analytics';

trackPageView('/custom-page');
```

## 🔥 Microsoft Clarity Features

Microsoft Clarity bietet **kostenlos**:

- ✅ **Click Heatmaps**: Wo klicken Benutzer?
- ✅ **Scroll Heatmaps**: Wie weit scrollen Benutzer?
- ✅ **Move Heatmaps**: Wo bewegen Benutzer die Maus?
- ✅ **Session Recordings**: Vollständige Aufzeichnungen von Benutzersessions
- ✅ **Insights Dashboard**: Automatische Erkenntnisse über Benutzerverhalten
- ✅ **Rage Clicks**: Erkennt frustrierte Klicks
- ✅ **Dead Clicks**: Erkennt Klicks, die nichts bewirken

**Keine zusätzliche Implementierung nötig!** Clarity erfasst automatisch alle Interaktionen.

## 🚀 Deployment

### Lokale Entwicklung

1. Erstelle `.env.local` mit Dev-IDs
2. Starte die App: `npm run dev`
3. Analytics läuft auf Port 3000 (localhost)

### Externer Dev-Server (Port 3002)

1. Erstelle `.env.production` auf dem Server mit Dev-IDs
2. Oder setze Umgebungsvariablen direkt:
   ```bash
   export NEXT_PUBLIC_GA_MEASUREMENT_ID_DEV=G-XXXXXXXXXX
   export NEXT_PUBLIC_CLARITY_PROJECT_ID_DEV=your-dev-id
   ```
3. Build und Start: `npm run build && npm start`

### Production (cuto.ai)

1. Setze Production-IDs in `.env.production` auf dem Server
2. Oder als Umgebungsvariablen:
   ```bash
   export NEXT_PUBLIC_GA_MEASUREMENT_ID_PROD=G-YYYYYYYYYY
   export NEXT_PUBLIC_CLARITY_PROJECT_ID_PROD=your-prod-id
   ```
3. Build und Start: `npm run build && npm start`

## 🔍 Testing

### Google Analytics testen

1. Öffne die Browser-Console
2. Prüfe ob `window.dataLayer` existiert
3. Prüfe ob Events gesendet werden
4. In GA4: Realtime-Bericht prüfen

### Microsoft Clarity testen

1. Besuche die Seite
2. Interagiere mit der Seite (klicken, scrollen)
3. Warte 5-10 Minuten
4. Prüfe in Clarity Dashboard: [clarity.microsoft.com](https://clarity.microsoft.com/)

## 📝 Wichtige Hinweise

### Datenschutz

- ✅ Analytics wird nur geladen, wenn der Benutzer zustimmt
- ✅ Cookie-Consent Banner ist bereits integriert
- ✅ DSGVO-konform (keine Cookies ohne Zustimmung)

### Performance

- ✅ Scripts werden mit `strategy="afterInteractive"` geladen (nicht blockierend)
- ✅ Analytics lädt erst nach Cookie-Consent
- ✅ Keine Performance-Einbußen für Benutzer ohne Consent

### Best Practices

1. **Separate Properties**: Verwende immer separate GA4 Properties für Dev und Prod
2. **Testen**: Teste immer zuerst auf Dev-Server
3. **Monitoring**: Prüfe regelmäßig die Analytics-Dashboards
4. **Privacy**: Respektiere die Cookie-Präferenzen der Benutzer

## 🆘 Troubleshooting

### Analytics lädt nicht

1. Prüfe ob `.env` Datei existiert und korrekt ist
2. Prüfe ob Measurement ID korrekt ist (Format: `G-XXXXXXXXXX`)
3. Prüfe Browser-Console auf Fehler
4. Prüfe ob Cookie-Consent gegeben wurde

### Events werden nicht getrackt

1. Prüfe ob `hasAnalyticsConsent()` true zurückgibt
2. Prüfe Browser-Console: `window.dataLayer`
3. Prüfe GA4 Realtime-Bericht
4. Warte 24-48 Stunden für vollständige Daten

### Clarity zeigt keine Daten

1. Prüfe ob Project ID korrekt ist
2. Warte 5-10 Minuten nach ersten Interaktionen
3. Prüfe Clarity Dashboard
4. Prüfe ob Analytics-Cookies akzeptiert wurden

## 📚 Weitere Ressourcen

- [Google Analytics 4 Dokumentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Microsoft Clarity Dokumentation](https://docs.microsoft.com/en-us/clarity/)
- [Next.js Script Component](https://nextjs.org/docs/api-reference/next/script)

