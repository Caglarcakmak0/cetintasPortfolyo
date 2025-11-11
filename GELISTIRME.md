# Koray Çetintaş Web Sitesi - Lokal Geliştirme

## 🚀 Hızlı Başlangıç

### Seçenek 1: Python HTTP Sunucusu (Önerilen)

1. **START-SERVER.bat** dosyasına çift tıkla
2. Tarayıcında aç: `http://localhost:8000`

### Seçenek 2: VS Code Live Server

1. VS Code'da **Live Server** uzantısını yükle
2. `index.html` dosyasına sağ tıkla
3. "Open with Live Server" seç

### Seçenek 3: Node.js HTTP Server

```powershell
npx http-server -p 8000
```

## 📝 Yeni Firma Eklemek

`index.html` dosyasında `clientsData` objesini düzenle:

```javascript
const clientsData = {
    "row1": [
        { "id": 21, "name": "Yeni Firma", "logo": "assets/logos/yeni-firma.png" }
    ]
};
```

## 🔧 Yapı

```
📁 components/
  └── clients-marquee.js    # Dinamik logo component
📁 data/
  └── clients.json          # Firma verileri (HTTP sunucu ile)
📁 assets/
  └── logos/                # Firma logoları
```

## ⚠️ Önemli Not

CORS kısıtlamaları nedeniyle doğrudan `file://` protokolü ile çalışmaz.
Mutlaka bir HTTP sunucusu kullan!
