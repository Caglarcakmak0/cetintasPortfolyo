/**
 * Clients Marquee Component
 * Dinamik olarak JSON verilerinden logo marquee'leri oluşturur
 */

class ClientsMarquee {
    constructor(containerSelector, dataUrl) {
        this.container = document.querySelector(containerSelector);
        this.dataUrl = dataUrl;
        this.data = null;
        
        if (!this.container) {
            console.error('Container bulunamadı:', containerSelector);
        }
    }

    async init() {
        if (!this.container) {
            console.error('Container mevcut değil, render edilemiyor');
            return;
        }
        
        try {
            await this.fetchData();
            this.render();
        } catch (error) {
            console.error('Clients data yüklenirken hata:', error);
            console.error('Hata detayı:', error.message);
        }
    }
    
    // Inline data ile başlatma (CORS sorununa çözüm)
    initWithData(data) {
        if (!this.container) {
            console.error('Container mevcut değil, render edilemiyor');
            return;
        }
        
        this.data = data;
        this.render();
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            console.log('Clients data başarıyla yüklendi:', this.data);
        } catch (error) {
            console.error('Fetch hatası:', error);
            throw error;
        }
    }

    createLogoItem(client) {
        return `
            <div class="marquee-item">
                <div class="logo-card">
                    <img src="${client.logo}" alt="${client.name}" class="client-logo">
                </div>
            </div>
        `;
    }

    createMarqueeRow(clients, reverse = false) {
        const reverseClass = reverse ? ' marquee-reverse' : '';
        const logosHTML = clients.map(client => this.createLogoItem(client)).join('');
        
        return `
            <div class="marquee${reverseClass}">
                <div class="marquee-content">
                    ${logosHTML}
                    ${logosHTML}
                </div>
            </div>
        `;
    }

    render() {
        if (!this.container) {
            console.error('Container bulunamadı, render edilemiyor');
            return;
        }
        
        if (!this.data) {
            console.error('Data yüklenmemiş, render edilemiyor');
            return;
        }
        
        if (!this.data.row1 || !this.data.row2) {
            console.error('Data formatı hatalı:', this.data);
            return;
        }

        console.log('Render başlıyor...');
        
        const html = `
            <div class="container">
                <h2 class="section-subtitle">Birlikte Çalıştığım Referans Firmalar</h2>
            </div>
            ${this.createMarqueeRow(this.data.row1, false)}
            ${this.createMarqueeRow(this.data.row2, true)}
        `;

        this.container.innerHTML = html;
        console.log('Render tamamlandı!');
    }
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClientsMarquee;
}
