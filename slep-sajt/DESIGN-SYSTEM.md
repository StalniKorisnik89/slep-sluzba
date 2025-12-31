# Design System - Šlep Služba

## Paleta Boja

### Osnovne boje
```css
/* Antracit - Glavna pozadina */
--bg-primary: #111827;

/* Tamno siva - Sekundarna pozadina */
--bg-secondary: #1F2937;

/* Srednje siva - Kartice */
--bg-card: #374151;

/* Bela - Glavni tekst */
--text-primary: #FFFFFF;

/* Svetlo siva - Sekundarni tekst */
--text-secondary: #E5E7EB;

/* Žuta - Akcentna boja */
--accent: #F59E0B;

/* Tamnija žuta - Hover stanje */
--accent-hover: #D97706;

/* Svetlija žuta - Svetliji akcenti */
--accent-light: #FBBF24;
```

### Utility klase za boje

#### Pozadine
```css
.bg-primary { background-color: #111827; }
.bg-secondary { background-color: #1F2937; }
.bg-card { background-color: #374151; }
.bg-accent { background-color: #F59E0B; }
```

#### Tekst
```css
.text-primary { color: #FFFFFF; }
.text-secondary { color: #E5E7EB; }
.text-accent { color: #F59E0B; }
```

#### Border
```css
.border-accent { border-color: #F59E0B; }
.border-light { border-color: rgba(245, 158, 11, 0.2); }
```

## Tipografija

### Font
- **Porodica:** 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Stil:** Modern, čitljiv sans-serif

### Veličine
```css
/* Hero naslov */
.hero-title {
    font-size: clamp(2.5rem, 7vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
}

/* Hero podnaslov */
.hero-subtitle {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 600;
}

/* Sekcija naslov */
.section-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
}

/* Body tekst */
body {
    font-size: 1rem;
    line-height: 1.6;
}
```

## Dugmad (Buttons)

### Primarno dugme
```css
.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: #F59E0B;
    color: #FFFFFF;
    padding: 18px 40px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);
    border: 2px solid transparent;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button:hover {
    background: #D97706;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 30px rgba(245, 158, 11, 0.3);
    border-color: #FBBF24;
}
```

### Sekundarno dugme
```css
.cta-button-secondary {
    background: transparent;
    border: 2px solid #FFFFFF;
    color: #FFFFFF;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.cta-button-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #F59E0B;
    color: #F59E0B;
    box-shadow: 0 8px 30px rgba(245, 158, 11, 0.3);
}
```

### Tailwind Utility Ekvivalenti

Ako koristite Tailwind CSS, evo ekvivalentnih utility klasa:

```html
<!-- Primarno dugme -->
<button class="inline-flex items-center gap-3 bg-[#F59E0B] text-white px-10 py-4.5 rounded-2xl font-bold text-lg uppercase tracking-wide shadow-lg shadow-[#F59E0B]/30 border-2 border-transparent transition-all duration-300 hover:bg-[#D97706] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#F59E0B]/30 hover:border-[#FBBF24]">
    Pozovi Odmah
</button>

<!-- Sekundarno dugme -->
<button class="inline-flex items-center gap-3 bg-transparent text-white px-10 py-4.5 rounded-2xl font-bold text-lg uppercase tracking-wide shadow-lg border-2 border-white transition-all duration-300 hover:bg-white/10 hover:border-[#F59E0B] hover:text-[#F59E0B] hover:shadow-xl hover:shadow-[#F59E0B]/30">
    Pošalji Poruku
</button>
```

## Kartice (Cards)

### Osnovna kartica
```css
.card {
    background: #374151;
    padding: 40px 30px;
    border-radius: 16px;
    border: 1px solid rgba(245, 158, 11, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 40px rgba(245, 158, 11, 0.3);
    border-color: #F59E0B;
    background: #1F2937;
}
```

## Border Radius

```css
--border-radius: 12px;      /* Standardni zaobljeni uglovi */
--border-radius-lg: 16px;    /* Veći zaobljeni uglovi za dugmad */
```

## Senke (Shadows)

```css
--shadow: rgba(0, 0, 0, 0.3);
--shadow-hover: rgba(245, 158, 11, 0.3);
--shadow-card: rgba(0, 0, 0, 0.2);
```

### Primeri senki
```css
.shadow-sm { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); }
.shadow-md { box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3); }
.shadow-lg { box-shadow: 0 12px 40px rgba(245, 158, 11, 0.3); }
```

## Hover Efekti

### Standardni hover
```css
.hover-lift:hover {
    transform: translateY(-4px);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-scale:hover {
    transform: scale(1.05);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-glow:hover {
    box-shadow: 0 8px 30px rgba(245, 158, 11, 0.3);
    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Overlay za Hero Sekciju

```css
.hero-overlay {
    background: rgba(17, 24, 39, 0.75);
    /* Ili za svetli režim */
    background: rgba(17, 24, 39, 0.6);
}
```

## Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }
```

## Animacije

### Fade In Up
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Pulse (za sticky call button)
```css
@keyframes pulse {
    0%, 100% {
        box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3), 0 0 0 0 rgba(245, 158, 11, 0.7);
    }
    50% {
        box-shadow: 0 4px 30px rgba(245, 158, 11, 0.3), 0 0 0 10px rgba(245, 158, 11, 0.1);
    }
}
```

## Primeri Korišćenja

### Hero sekcija sa dugmadima
```html
<div class="hero-content">
    <h1 class="hero-title">Brza i Pouzdana <span class="highlight">Šlep Služba 24/7</span></h1>
    <p class="hero-subtitle">Dolazak na lice mesta u najkraćem roku</p>
    <div class="cta-buttons">
        <a href="tel:+38162388140" class="cta-button">Pozovi Odmah</a>
        <a href="#contact" class="cta-button cta-button-secondary">Pošalji Poruku</a>
    </div>
</div>
```

### Service kartica
```html
<div class="service-card">
    <div class="service-icon">
        <!-- SVG ikonica -->
    </div>
    <h3>Naslov usluge</h3>
    <p>Opis usluge</p>
</div>
```

## Kontrast i Pristupačnost

### WCAG AA Compliance
- **Tekst na pozadini:** Minimum 4.5:1 kontrast
- **Veliki tekst:** Minimum 3:1 kontrast
- **Akcentna boja (#F59E0B) na beloj:** 2.8:1 (koristiti sa dodatnim kontrastom)
- **Akcentna boja na tamnoj pozadini:** Odličan kontrast

### Preporuke
- Uvek koristiti `text-shadow` na hero tekstu za bolju čitljivost
- Overlay na hero slici osigurava dobar kontrast
- Akcentna boja se koristi selektivno za CTA elemente

