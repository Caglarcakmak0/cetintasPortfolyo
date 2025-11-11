# Koray Çetintaş - Portfolio Website

Profesyonel portfolio sitesi - Dijital Dönüşüm Mimarı & ERP Danışmanı

## 📸 Fotoğraf Yükleme

Şu anda fotoğraflar için placeholder kullanılıyor. Gerçek fotoğrafınızı eklemek için:

1. `koraygemini.jpg` dosyanızı `assets/` klasörüne kopyalayın
2. Ardından aşağıdaki dosyalardaki placeholder URL'lerini değiştirin:

## 🏢 Logo Yükleme

Marquee slider için logolar `assets/logos/` klasörüne aşağıdaki isimlerle yüklenmelidir:

```
assets/logos/
├── savunma-sanayi.png      # Savunma Sanayi logosu
├── uretim-endustri.png     # Üretim & Endüstri 4.0 logosu
├── workcube.png            # Workcube ERP logosu
├── odoo.png                # Odoo ERP logosu
├── enerji.png              # Enerji sektörü logosu
├── eticaret.png            # E-ticaret logosu
├── iot.png                 # IoT & Otomasyon logosu
└── yapay-zeka.png          # Yapay Zeka logosu
```

**Logo Özellikleri:**
- Format: PNG (transparan arkaplan önerilir)
- Boyut: Max 200x80px (otomatik ölçeklendirilir)
- Renk: Logolar başlangıçta gri tonunda (grayscale), hover'da renkli olur

**Önemli:** Logolar yüklenmediyse otomatik olarak metin versiyonu gösterilir. Site çalışır durumda kalır.


### index.html - Hero Section
```html
<!-- Şu anki: -->
<img src="https://ui-avatars.com/api/?name=Koray+Cetintas&size=500..." alt="Koray Çetintaş" class="profile-image">

<!-- Değiştirin: -->
<img src="assets/koraygemini.jpg" alt="Koray Çetintaş" class="profile-image">
```

### index.html - Hakkımda Card
```html
<!-- Şu anki: -->
<img src="https://ui-avatars.com/api/?name=Koray+Cetintas&size=400..." alt="Koray Çetintaş">

<!-- Değiştirin: -->
<img src="assets/koraygemini.jpg" alt="Koray Çetintaş">
```

### about.html
```html
<!-- Şu anki: -->
<img src="https://ui-avatars.com/api/?name=Koray+Cetintas&size=400..." alt="Koray Çetintaş">

<!-- Değiştirin: -->
<img src="assets/koraygemini.jpg" alt="Koray Çetintaş">
```

## 🚀 Dosya Yapısı

```
KorayÇetintas/
├── index.html          # Ana sayfa
├── about.html          # Hakkımda sayfası
├── blog.html           # Blog listesi
├── styles.css          # Ana stil dosyası
├── script.js           # Ana JavaScript
├── blog-filter.js      # Blog filtreleme
├── assets/
│   ├── koraygemini.jpg # Fotoğrafınız (yüklenecek)
│   └── logos/          # Logo klasörü
│       ├── savunma-sanayi.png
│       ├── uretim-endustri.png
│       ├── workcube.png
│       ├── odoo.png
│       ├── enerji.png
│       ├── eticaret.png
│       ├── iot.png
│       └── yapay-zeka.png
├── koray.md            # İçerik kaynağı
└── README.md           # Bu dosya
```

## ✨ Özellikler

- ✅ Responsive tasarım (mobil, tablet, desktop)
- ✅ Modern, profesyonel business tasarım
- ✅ Smooth animasyonlar
- ✅ Blog filtreleme sistemi
- ✅ İletişim formu
- ✅ Newsletter abonelik
- ✅ SEO uyumlu

## 🎨 Placeholder Sistemi

Fotoğraf yüklenene kadar otomatik olarak "KC" harflerini içeren profesyonel bir placeholder gösterilmektedir. Bu sayede site hemen görsel olarak tamamlanmış görünüyor.

## 📝 Yapılacaklar

- [ ] `koraygemini.jpg` dosyasını `assets/` klasörüne kopyala
- [ ] Logo dosyalarını `assets/logos/` klasörüne yükle (8 adet PNG)
- [ ] LinkedIn profil linkini güncelle
- [ ] Blog yazılarını detaylandır
- [ ] Form backend entegrasyonu (opsiyonel)

## 🌐 Siteyi Açma

`index.html` dosyasını tarayıcınızda açın veya bir web sunucusunda yayınlayın.

---

© 2025 Koray Çetintaş - Tüm hakları saklıdır.
