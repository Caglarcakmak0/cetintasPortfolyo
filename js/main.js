/**
 * Main Application Entry Point
 * Tüm componentleri başlatır ve yönetir
 */

class App {
    constructor() {
        this.components = {};
        this.isInitialized = false;
    }

    async init() {
        try {
            console.log('🚀 Koray Çetintaş Portfolio Starting...');
            
            // Global componentleri başlat
            await this.initGlobalComponents();
            
            // Sayfa componentlerini başlat
            await this.initPageComponents();
            
            // Event listener'ları ayarla
            this.setupEventListeners();
            
            // Loading state'ini kaldır
            this.removeLoadingState();
            
            this.isInitialized = true;
            console.log('✅ Application initialized successfully!');
            
        } catch (error) {
            console.error('❌ Application initialization failed:', error);
        }
    }

    async initGlobalComponents() {
        console.log('🌍 Initializing global components...');
        
        // Navigation Component
        if (window.Navigation) {
            const navigation = new Navigation();
            navigation.init();
            this.components.navigation = navigation;
            console.log('✅ Navigation initialized');
        }

        // Footer Component
        if (window.Footer) {
            const footer = new Footer();
            footer.init();
            this.components.footer = footer;
            console.log('✅ Footer initialized');
        }
    }

    async initPageComponents() {
        console.log('📄 Initializing page components...');
        
        // Hero Component
        if (window.Hero) {
            const hero = new Hero('#home');
            await hero.init();
            this.components.hero = hero;
        }

        // About Component
        if (window.About) {
            const about = new About('#about');
            await about.init();
            this.components.about = about;
        }

        // Sectors Component
        if (window.Sectors) {
            const sectors = new Sectors('#sectors');
            await sectors.init();
            this.components.sectors = sectors;
        }

        // Blog Component
        if (window.Blog) {
            const blog = new Blog('#blog');
            await blog.init();
            this.components.blog = blog;
        }

        // Contact Component
        if (window.Contact) {
            const contact = new Contact('#contact');
            await contact.init();
            this.components.contact = contact;
        }

        // Map Component
        if (window.Map) {
            const map = new Map('.map-compact-section');
            await map.init();
            this.components.map = map;
        }

        // Clients Marquee Component
        if (window.ClientsMarquee) {
            const clientsData = {
                "row1": [
                    { "id": 1, "name": "Altair Defense", "logo": "assets/logos/altairdefense.jpg" },
                    { "id": 2, "name": "Sarsilmaz", "logo": "assets/logos/sarsılmaz.png" },
                    { "id": 3, "name": "Mertsav", "logo": "assets/logos/mertsav.png" },
                    { "id": 4, "name": "Dünyasan Savunma", "logo": "assets/logos/dünyasan-savunma.jpg" },
                    { "id": 5, "name": "Özer Elektronik", "logo": "assets/logos/özer-elektronik.png" },
                    { "id": 6, "name": "Meditac", "logo": "assets/logos/meditac.jpg" },
                    { "id": 7, "name": "Ağaoğlu", "logo": "assets/logos/Agaoglu_logo-png.png" },
                    { "id": 8, "name": "Karadeniz Holding", "logo": "assets/logos/karadeniz-holing.jpg" },
                    { "id": 9, "name": "Best Elektrik", "logo": "assets/logos/best_elektrik_logo.png" },
                    { "id": 10, "name": "YKK", "logo": "assets/logos/ykk.jpg" }
                ],
                "row2": [
                    { "id": 11, "name": "Yünsa", "logo": "assets/logos/yünsa.svg" },
                    { "id": 12, "name": "Knorr", "logo": "assets/logos/knorr.png" },
                    { "id": 13, "name": "Unilever", "logo": "assets/logos/unillever.png" },
                    { "id": 14, "name": "Novartis", "logo": "assets/logos/Novartis-Logo.svg.png" },
                    { "id": 15, "name": "Vitalab", "logo": "assets/logos/vitalab.jpg" },
                    { "id": 16, "name": "AXA Sigorta", "logo": "assets/logos/axa-sigorta.png" },
                    { "id": 17, "name": "Anadolu Sigorta", "logo": "assets/logos/Anadolu_Sigorta_logo.svg.png" },
                    { "id": 18, "name": "Innomind", "logo": "assets/logos/innomindLogo.png" },
                    { "id": 19, "name": "Corning Optik", "logo": "assets/logos/CORNİNG-OPTİK-İLETİŞİM-SAN.-LTD.-ŞTİ..jpg" },
                    { "id": 20, "name": "U4", "logo": "assets/logos/u4.png" }
                ]
            };
            
            const clientsMarquee = new ClientsMarquee('#clientsSection');
            clientsMarquee.initWithData(clientsData);
            this.components.clientsMarquee = clientsMarquee;
        }
    }

    setupEventListeners() {
        console.log('⚡ Setting up event listeners...');
        
        // Intersection Observer for animations
        this.setupAnimationObserver();
        
        // Image preloading
        this.preloadImages();
        
        // Prevent form resubmission
        this.preventFormResubmission();
    }

    setupAnimationObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.sector-card, .blog-card, .expertise-card, .roadmap-step');
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    preloadImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
            }
        });
    }

    preventFormResubmission() {
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
    }

    removeLoadingState() {
        document.body.classList.add('loaded');
    }

    getComponent(name) {
        return this.components[name];
    }

    logComponentStatus() {
        console.log('📊 Component Status:');
        Object.keys(this.components).forEach(key => {
            console.log(`  ✓ ${key}: Initialized`);
        });
    }
}

// Application initialization
document.addEventListener('DOMContentLoaded', async () => {
    const app = new App();
    await app.init();
    
    // Make app globally available for debugging
    window.App = app;
    
    // Console message
    console.log('%c👋 Merhaba!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
    console.log('%cKoray Çetintaş - Dijital Dönüşüm Mimarı & ERP Danışmanı', 'font-size: 14px; color: #475569;');
    console.log('%cİletişim: info@cetintas.com.tr', 'font-size: 12px; color: #64748b;');
});