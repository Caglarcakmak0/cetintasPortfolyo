/**
 * Navigation Component - Global Component
 */
class Navigation {
    init() {
        this.cacheElements();
        this.bindEvents();
        this.initScrollEffects();
    }

    cacheElements() {
        this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.navMenu = document.getElementById('navMenu');
        this.navbar = document.querySelector('.navbar');
    }

    bindEvents() {
        if (this.mobileMenuBtn && this.navMenu) {
            this.mobileMenuBtn.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
                this.mobileMenuBtn.classList.toggle('active');
            });
        }
    }

    initScrollEffects() {
        if (!this.navbar) return;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
    }
}
window.Navigation = Navigation;