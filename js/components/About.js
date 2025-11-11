/**
 * About Component
 * Hakkımda section'ını yönetir
 */
class About {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.isInitialized = false;
    }

    async init() {
        if (!this.container) {
            console.error('About container bulunamadı');
            return;
        }

        console.log('About component initializing...');
        this.setupAnimations();
        this.setupIntersectionObserver();
        this.isInitialized = true;
        console.log('✅ About component initialized');
    }

    setupAnimations() {
        const aboutCard = this.container.querySelector('.about-card');
        const aboutImage = this.container.querySelector('.about-image');
        const aboutContent = this.container.querySelector('.about-content');

        if (aboutCard) {
            aboutCard.style.opacity = '0';
            aboutCard.style.transform = 'translateY(50px)';
        }

        if (aboutImage) {
            aboutImage.style.opacity = '0';
            aboutImage.style.transform = 'translateX(-30px)';
        }

        if (aboutContent) {
            aboutContent.style.opacity = '0';
            aboutContent.style.transform = 'translateX(30px)';
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
                    this.animateElements();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const aboutCard = this.container.querySelector('.about-card');
        if (aboutCard) {
            observer.observe(aboutCard);
        }
    }

    animateElements() {
        const aboutCard = this.container.querySelector('.about-card');
        const aboutImage = this.container.querySelector('.about-image');
        const aboutContent = this.container.querySelector('.about-content');
        const roleBadges = this.container.querySelectorAll('.role-badge');

        if (aboutCard) {
            aboutCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            aboutCard.style.opacity = '1';
            aboutCard.style.transform = 'translateY(0)';
        }

        if (aboutImage) {
            setTimeout(() => {
                aboutImage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                aboutImage.style.opacity = '1';
                aboutImage.style.transform = 'translateX(0)';
            }, 200);
        }

        if (aboutContent) {
            setTimeout(() => {
                aboutContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                aboutContent.style.opacity = '1';
                aboutContent.style.transform = 'translateX(0)';
            }, 400);
        }

        // Role badges animasyonu
        roleBadges.forEach((badge, index) => {
            badge.style.opacity = '0';
            badge.style.transform = 'scale(0.8)';
            setTimeout(() => {
                badge.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                badge.style.opacity = '1';
                badge.style.transform = 'scale(1)';
            }, 600 + (index * 100));
        });
    }

    // About card hover efektleri
    setupHoverEffects() {
        const aboutCard = this.container.querySelector('.about-card');
        if (aboutCard) {
            aboutCard.addEventListener('mouseenter', () => {
                aboutCard.style.transform = 'translateY(-5px)';
                aboutCard.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            });

            aboutCard.addEventListener('mouseleave', () => {
                aboutCard.style.transform = 'translateY(0)';
                aboutCard.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            });
        }
    }
}

window.About = About;  
