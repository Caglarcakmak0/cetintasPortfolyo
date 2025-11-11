/**
 * Map Component
 * Global presence map'ini yönetir
 */
class Map {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.isInitialized = false;
        this.map = null;
        this.markers = [];
        this.locations = [
            {
                id: 'turkey',
                name: 'Türkiye - İstanbul',
                company: 'Didoda Bilgi Teknolojileri A.Ş.',
                description: 'Türkiye\'deki ana operasyon merkezi olarak ERP, dijital dönüşüm ve kurumsal yazılım projelerini yönetiyoruz.',
                coords: [41.0082, 28.9784],
                flag: '🇹🇷'
            },
            {
                id: 'cyprus',
                name: 'KKTC - Lefkoşa',
                company: 'Didoda Bilgi Teknolojileri Ltd.',
                description: 'Kuzey Kıbrıs\'ta teknoloji danışmanlığı, yazılım geliştirme ve dijital veri köprüsü çözümleri.',
                coords: [35.1856, 33.3823],
                flag: '🇨🇾'
            },
            {
                id: 'uk',
                name: 'İngiltere - Londra',
                company: 'Çetintaş Consulting UK',
                description: 'Avrupa pazarında dijital dönüşüm danışmanlığı, stratejik iş geliştirme ve uluslararası ERP projeleri.',
                coords: [51.5074, -0.1278],
                flag: '🇬🇧'
            },
            {
                id: 'usa',
                name: 'ABD - San Francisco',
                company: 'Çetintaş Tech Solutions',
                description: 'Yapay zeka, IoT ve endüstriyel elektronik çözümlerinde Amerika pazarına özel teknoloji danışmanlığı.',
                coords: [37.7749, -122.4194],
                flag: '🇺🇸'
            }
        ];
    }

    async init() {
        if (!this.container) {
            console.error('Map container bulunamadı');
            return;
        }

        console.log('Map component initializing...');
        
        // Leaflet'ın yüklendiğini bekle
        await this.waitForLeaflet();
        
        this.setupLocationCards();
        this.initMap();
        this.setupAnimations();
        this.setupIntersectionObserver();
        this.isInitialized = true;
        console.log('✅ Map component initialized');
    }

    waitForLeaflet() {
        return new Promise((resolve) => {
            const checkLeaflet = () => {
                if (window.L) {
                    resolve();
                } else {
                    setTimeout(checkLeaflet, 100);
                }
            };
            checkLeaflet();
        });
    }

    setupLocationCards() {
        const locationCards = this.container.querySelectorAll('.location-compact');
        
        locationCards.forEach(card => {
            card.addEventListener('click', () => {
                const locationId = card.dataset.location;
                this.focusOnLocation(locationId);
            });

            // Hover efekti
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            });
        });
    }

    initMap() {
        const mapContainer = this.container.querySelector('#compactMap');
        if (!mapContainer) {
            console.error('Map container bulunamadı');
            return;
        }

        // Map'i oluştur
        this.map = L.map('compactMap', {
            center: [40.0, 20.0], // Ortalama koordinat
            zoom: 3,
            scrollWheelZoom: false,
            zoomControl: true
        });

        // Tile layer ekle
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(this.map);

        // Marker'ları ekle
        this.addMarkers();

        // Map'i marker'lara göre ayarla
        this.fitMapToMarkers();
    }

    addMarkers() {
        this.locations.forEach(location => {
            // Custom icon oluştur
            const customIcon = L.divIcon({
                html: `<div style="font-size: 24px;">${location.flag}</div>`,
                className: 'custom-marker',
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            // Marker ekle
            const marker = L.marker(location.coords, { icon: customIcon })
                .addTo(this.map)
                .bindPopup(`
                    <div class="map-popup">
                        <h4>${location.flag} ${location.name}</h4>
                        <p><strong>${location.company}</strong></p>
                        <p>${location.description}</p>
                    </div>
                `);

            this.markers.push({ marker, location });

            // Marker click event
            marker.on('click', () => {
                this.highlightLocationCard(location.id);
            });
        });
    }

    fitMapToMarkers() {
        if (this.markers.length === 0) return;

        const group = new L.featureGroup(this.markers.map(m => m.marker));
        this.map.fitBounds(group.getBounds().pad(0.1));
    }

    focusOnLocation(locationId) {
        const location = this.locations.find(loc => loc.id === locationId);
        if (!location) return;

        // Map'i bu lokasyona odakla
        this.map.setView(location.coords, 6, {
            animate: true,
            duration: 1
        });

        // Popup'ı aç
        const markerObj = this.markers.find(m => m.location.id === locationId);
        if (markerObj) {
            markerObj.marker.openPopup();
        }
    }

    highlightLocationCard(locationId) {
        // Tüm kartlardan highlight'ı kaldır
        const allCards = this.container.querySelectorAll('.location-compact');
        allCards.forEach(card => {
            card.classList.remove('highlighted');
        });

        // İlgili kartı highlight'la
        const targetCard = this.container.querySelector(`[data-location="${locationId}"]`);
        if (targetCard) {
            targetCard.classList.add('highlighted');
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    setupAnimations() {
        const locationCards = this.container.querySelectorAll('.location-compact');
        const mapContainer = this.container.querySelector('#compactMap');

        // Location cards animasyonu
        locationCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });

        // Map animasyonu
        if (mapContainer) {
            mapContainer.style.opacity = '0';
            mapContainer.style.transform = 'scale(0.95)';
        }
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSection();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(this.container);
    }

    animateSection() {
        const sectionHeader = this.container.querySelector('.section-header');
        const mapContainer = this.container.querySelector('#compactMap');

        // Section header animasyonu
        if (sectionHeader) {
            sectionHeader.style.opacity = '0';
            sectionHeader.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                sectionHeader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                sectionHeader.style.opacity = '1';
                sectionHeader.style.transform = 'translateY(0)';
            }, 100);
        }

        // Map animasyonu
        if (mapContainer) {
            setTimeout(() => {
                mapContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                mapContainer.style.opacity = '1';
                mapContainer.style.transform = 'scale(1)';
            }, 300);
        }
    }

    // Public metodlar
    refreshMap() {
        if (this.map) {
            this.map.invalidateSize();
            this.fitMapToMarkers();
        }
    }

    destroy() {
        if (this.map) {
            this.map.remove();
            this.map = null;
        }
        this.markers = [];
    }
}

// CSS stillerini ekle
const mapStyles = `
.custom-marker {
    background: transparent !important;
    border: none !important;
    border-radius: 50% !important;
}

.map-popup {
    font-family: 'Inter', sans-serif;
    max-width: 250px;
}

.map-popup h4 {
    margin: 0 0 8px 0;
    color: #1f2937;
    font-size: 14px;
    font-weight: 600;
}

.map-popup p {
    margin: 4px 0;
    color: #4b5563;
    font-size: 12px;
    line-height: 1.4;
}

.location-compact.highlighted {
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    border-color: #3b82f6;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
}

#compactMap {
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
    #compactMap {
        height: 300px;
    }
}
`;

if (!document.querySelector('#map-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'map-styles';
    styleSheet.textContent = mapStyles;
    document.head.appendChild(styleSheet);
}

window.Map = Map; 
