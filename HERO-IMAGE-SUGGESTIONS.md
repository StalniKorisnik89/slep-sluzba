# Predlozi Hero Slika za Šlep Službu

## Opis
Hero sekcija zahteva profesionalnu, akcionu sliku šlep vozila koja podiže poverenje i naglašava hitnost usluge.

## Preporučene slike

### Opcija 1: Noćna scena sa šlep vozilom (PREPORUČENO)
**Opis:** Šlep vozilo u akciji tokom noći, sa upaljenim svetlima, na mokrom putu. Atmosfera hitnosti i profesionalizma.

**Karakteristike:**
- Noćna scena sa dobro vidljivim vozilom
- Upaljena svetla (žuta/narandžasta) koja se uklapaju u paletu boja
- Mokar put sa refleksijama svetla
- Dinamičan ugao snimanja
- Tamnija atmosfera sa kontrastnim svetlima

**Predlog izvora:**
- Unsplash: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80`
- Alternativa: Tražiti "tow truck night road" ili "recovery vehicle night"

**Optimizacija:**
- Format: WebP sa fallback na JPG
- Dimenzije: 2000x1200px (16:9.6 ratio)
- Kvalitet: 80-85% za balans između kvaliteta i veličine
- Lazy loading: Ne (hero slika se učitava odmah)

### Opcija 2: Kišna scena sa šlep vozilom
**Opis:** Šlep vozilo u akciji tokom kiše, sa upaljenim svetlima i refleksijama na mokrom putu.

**Karakteristike:**
- Kišna atmosfera
- Refleksije svetla na mokrom putu
- Upaljena svetla vozila
- Profesionalan izgled vozila

**Predlog izvora:**
- Unsplash: Tražiti "tow truck rain" ili "recovery vehicle wet road"
- Pexels: Tražiti "tow truck rainy night"

**Optimizacija:**
- Ista kao Opcija 1

### Opcija 3: Dnevna scena sa profesionalnim vozilom
**Opis:** Čist, profesionalan šlep vozilo na putu, sa jasno vidljivim logotipom i opremom.

**Karakteristike:**
- Dnevna scena sa dobrim osvetljenjem
- Profesionalno vozilo sa jasno vidljivim detaljima
- Čist, pouzdan izgled
- Može biti statična ili u pokretu

**Predlog izvora:**
- Unsplash: Tražiti "professional tow truck" ili "recovery vehicle"
- Pexels: Tražiti "tow truck service"

**Optimizacija:**
- Ista kao Opcija 1

## Tehnički zahtevi

### Format i dimenzije
- **Primarni format:** WebP (najbolji balans kvaliteta/veličina)
- **Fallback format:** JPG (za starije pretraživače)
- **Dimenzije:** Minimum 1920x1080px, preporučeno 2000x1200px
- **Aspect ratio:** 16:9 ili 5:3 (široko, za hero sekciju)

### Optimizacija
- **Kvalitet:** 80-85% (balans između kvaliteta i brzine učitavanja)
- **Kompresija:** Progresivna za JPG
- **Lazy loading:** Ne (hero slika se učitava odmah, nije potrebno)
- **Responsive:** CSS `background-size: cover` automatski prilagođava

### SEO i pristupačnost
- **Alt tekst:** "Šlep vozilo u akciji - Brza i pouzdana šlep služba 24/7"
- **File name:** `hero-tow-truck-night.webp` ili slično (deskriptivno ime)
- **Metadata:** Dodati relevantne ključne reči u EXIF podatke

## Implementacija

### Trenutna implementacija
Sajt koristi CSS `background-image` sa Unsplash URL-om. Za produkciju, preporučeno je:

1. **Preuzeti sliku** sa Unsplash ili drugog izvora
2. **Optimizovati** koristeći alat kao što je:
   - Squoosh.app (Google)
   - TinyPNG
   - ImageOptim
3. **Kreirati WebP verziju** sa fallback na JPG
4. **Postaviti** u `/images/hero/` folder
5. **Ažurirati CSS** sa lokalnom putanjom

### Primer implementacije sa fallback-om:

```css
.hero-background {
    background-image: url('/images/hero/hero-tow-truck-night.jpg');
    background-image: image-set(
        url('/images/hero/hero-tow-truck-night.webp') type('image/webp'),
        url('/images/hero/hero-tow-truck-night.jpg') type('image/jpeg')
    );
}
```

## Preporuke za izbor slike

1. **Hitnost:** Slika treba da prenese osećaj hitnosti i dostupnosti 24/7
2. **Profesionalizam:** Vozilo treba da izgleda čisto, održavano i pouzdano
3. **Kontrast:** Tamnija slika sa svetlim akcentima (svetla vozila) radi bolje čitljivosti teksta
4. **Emocija:** Slika treba da izazove osećaj sigurnosti i poverenja
5. **Lokacija:** Ako je moguće, slika sa lokalnim putem/okruženjem (Srbija/Balkan)

## Alternativni izvori slika

- **Unsplash:** Besplatne, visokokvalitetne slike
- **Pexels:** Besplatne stock fotografije
- **Pixabay:** Besplatne slike
- **Profesionalna fotografija:** Ako je moguće, snimiti sopstvenu sliku vozila

## Napomena

Trenutno sajt koristi placeholder sliku sa Unsplash-a. Za produkciju, preporučeno je koristiti optimizovanu lokalnu sliku za bolje performanse i kontrolu nad sadržajem.

