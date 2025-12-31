# 🚀 Instrukcije za GitHub i Deploy

## 📦 Kreiranje GitHub Repozitorijuma

### Opcija 1: Preko GitHub CLI (ako je instaliran)

```bash
cd C:\Users\Quantox\Desktop\slep-sajt
gh repo create slep-sajt --public --source=. --remote=origin --push
```

### Opcija 2: Preko GitHub Web Interfejsa

1. **Idite na GitHub.com** i ulogujte se
2. **Kliknite na "+"** u gornjem desnom uglu → **"New repository"**
3. **Unesite detalje:**
   - Repository name: `slep-sajt` (ili neko drugo ime)
   - Description: "Modern tow service website"
   - Public ili Private (preporučeno: Public)
   - **NE kreirajte README, .gitignore ili licencu** (već postoje)
4. **Kliknite "Create repository"**
5. **Zatim u terminalu pokrenite:**

```bash
cd C:\Users\Quantox\Desktop\slep-sajt
git remote add origin https://github.com/VAS-GITHUB-USERNAME/slep-sajt.git
git branch -M main
git push -u origin main
```

*(Zamenite `VAS-GITHUB-USERNAME` sa vašim GitHub korisničkim imenom)*

## 🌐 Deploy na Netlify (Preporučeno)

### Automatski Deploy (preko GitHub)

1. **Idite na [netlify.com](https://netlify.com)** i ulogujte se
2. **Kliknite "Add new site"** → **"Import an existing project"**
3. **Povežite GitHub nalog** i odaberite `slep-sajt` repozitorijum
4. **Netlify će automatski detektovati:**
   - Build command: (nema, statički sajt)
   - Publish directory: `/` (root)
5. **Kliknite "Deploy site"**
6. **Sajt će biti dostupan na:** `https://random-name.netlify.app`
7. **Možete promeniti ime:** Site settings → Change site name

### Ručni Deploy (Drag & Drop)

1. **Idite na [netlify.com](https://netlify.com)**
2. **Drag & Drop** ceo `slep-sajt` folder
3. **Sajt će biti automatski deploy-ovan!**

## 🌐 Deploy na Vercel

1. **Idite na [vercel.com](https://vercel.com)** i ulogujte se
2. **Kliknite "Add New Project"**
3. **Importujte GitHub repozitorijum** `slep-sajt`
4. **Vercel će automatski detektovati** statički sajt
5. **Kliknite "Deploy"**
6. **Sajt će biti dostupan na:** `https://slep-sajt.vercel.app`

## 🌐 Deploy na GitHub Pages

1. **Idite na GitHub repozitorijum**
2. **Settings** → **Pages**
3. **Source:** `Deploy from a branch`
4. **Branch:** `main` / `master`
5. **Folder:** `/ (root)`
6. **Save**
7. **Sajt će biti dostupan na:** `https://VAS-GITHUB-USERNAME.github.io/slep-sajt`

## ✅ Provera nakon Deploy-a

- ✅ Sajt se učitava bez grešaka
- ✅ Slike se prikazuju (proverite putanje u `index.html`)
- ✅ Responsive design radi na mobilnim uređajima
- ✅ Kalkulator funkcioniše
- ✅ Navigacija radi

## 🔧 Troubleshooting

### Problem: Slike se ne prikazuju
**Rešenje:** Proverite da li su sve slike u `images/` folderu commit-ovane i push-ovane na GitHub.

### Problem: CSS/JS se ne učitava
**Rešenje:** Proverite da li su fajlovi `styles.css` i `script.js` u root folderu.

### Problem: 404 na slikama
**Rešenje:** Proverite putanje u `index.html` - trebaju biti relativne (`/images/...` ili `./images/...`)

## 📝 Napomene

- **Netlify** je najlakši za deploy i automatski deploy-uje svaki put kada push-ujete na GitHub
- **Vercel** takođe ima automatski deploy
- **GitHub Pages** je besplatan ali manje fleksibilan

---

**Srećno sa deploy-om! 🚀**


