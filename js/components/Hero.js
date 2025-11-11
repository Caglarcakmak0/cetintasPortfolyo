/**
 * Hero Component
 * Ana hero section'ını yönetir
 */
class Hero {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.isInitialized = false;
    }

    async init() {
        if (!this.container) {
            console.error('Hero container bulunamadı');
            return;
        }

        console.log('Hero component initializing...');
        this.setupAnimations();
        this.setupScrollEffects();
        this.isInitialized = true;
        console.log('✅ Hero component initialized');
    }

    setupAnimations() {
        // Hero text animasyonu
        const heroTitle = this.container.querySelector('.hero-title');
        const heroDescription = this.container.querySelector('.hero-description');
        const heroButtons = this.container.querySelector('.hero-buttons');
        const heroImage = this.container.querySelector('.hero-image');

        if (heroTitle) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }, 100);
        }

        if (heroDescription) {
            heroDescription.style.opacity = '0';
            heroDescription.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroDescription.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
                heroDescription.style.opacity = '1';
                heroDescription.style.transform = 'translateY(0)';
            }, 300);
        }

        if (heroButtons) {
            heroButtons.style.opacity = '0';
            heroButtons.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroButtons.style.transition = 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s';
                heroButtons.style.opacity = '1';
                heroButtons.style.transform = 'translateY(0)';
            }, 500);
        }

        if (heroImage) {
            heroImage.style.opacity = '0';
            heroImage.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroImage.style.transition = 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s';
                heroImage.style.opacity = '1';
                heroImage.style.transform = 'translateY(0)';
            }, 700);
        }
    }

    setupScrollEffects() {
        // Gradient orb animasyonu
        const orbs = this.container.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const speed = 0.5 + (index * 0.2);
            orb.style.animation = `float ${speed}s ease-in-out infinite alternate`;
        });
    }

    // Hero butonları için smooth scroll
    setupSmoothScroll() {
        const buttons = this.container.querySelectorAll('.hero-buttons a');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const href = button.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }
}

// CSS animasyonu ekle
const heroStyles = `
@keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    100% { transform: translateY(-20px) rotate(5deg); }
}
`;

// Stilleri head'e ekle
if (!document.querySelector('#hero-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'hero-styles';
    styleSheet.textContent = heroStyles;
    document.head.appendChild(styleSheet);
}

window.Hero = Hero;