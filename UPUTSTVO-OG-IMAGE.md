# Uputstvo za OG sliku

## Problem
Facebook Debugger ne prikazuje sliku jer ne izvršava JavaScript. Treba da postavite puni URL direktno u HTML-u.

## Rešenje

1. **Kreirajte og-image.jpg** (1200x630px) iz `og-image.html` fajla
2. **Postavite sliku** u root direktorijum sajta (gde je index.html)
3. **Ažurirajte index.html** - zamenite prazan `content=""` sa punim URL-om:

```html
<meta property="og:image" content="https://willowy-kangaroo-f144c3.netlify.app/og-image.jpg">
<meta property="og:image:secure_url" content="https://willowy-kangaroo-f144c3.netlify.app/og-image.jpg">
```

I na isti način za Twitter:
```html
<meta name="twitter:image" content="https://willowy-kangaroo-f144c3.netlify.app/og-image.jpg">
```

## Kako kreirati og-image.jpg

1. Otvorite `og-image.html` u Chrome/Firefox
2. Pritisnite F12 (Developer Tools)
3. Pritisnite Ctrl+Shift+P (Cmd+Shift+P na Mac)
4. Kucajte "screenshot" i izaberite "Capture full size screenshot"
5. Sačuvajte kao `og-image.jpg` u root direktorijumu

## Provera

Nakon što postavite sliku i ažurirate URL-ove:
1. Idite na https://developers.facebook.com/tools/debug/
2. Unesite URL vašeg sajta
3. Kliknite "Scrape Again" da osvežite cache
4. Trebalo bi da vidite sliku



