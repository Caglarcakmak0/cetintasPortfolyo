/**
 * Sectors Component
 * Sektörler swiper'ını yönetir
 */
class Sectors {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.swiper = null;
        this.isInitialized = false;
    }

    async init() {
        if (!this.container) {
            console.error('Sectors container bulunamadı');
            return;
        }

        console.log('Sectors component initializing...');
        
        // Swiper'ın yüklendiğini bekle
        await this.waitForSwiper();
        
        this.initSwiper();
        this.setupAnimations();
        this.isInitialized = true;
        console.log('✅ Sectors component initialized');
    }

    waitForSwiper() {
        return new Promise((resolve) => {
            const checkSwiper = () => {
                if (window.Swiper) {
                    resolve();
                } else {
                    setTimeout(checkSwiper, 100);
                }
            };
            checkSwiper();
        });
    }

    initSwiper() {
        const swiperContainer = this.container.querySelector('.sectorsSwiper');
        if (!swiperContainer) {
            console.error('Swiper container bulunamadı');
            return;
        }

        // Mevcut swiper'ı temizle
        if (this.swiper) {
            this.swiper.destroy(true, true);
        }

        // Swiper'ı yeniden başlat
        setTimeout(() => {
            this.swiper = new Swiper(swiperContainer, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                },
                on: {
                    init: () => {
                        console.log('✅ Swiper initialized successfully');
                        console.log(`Total slides: ${this.swiper.slides.length}`);
                    },
                    slideChange: () => {
                        this.updateActiveSlide();
                    },
                },
            });
        }, 100);
    }

    setupAnimations() {
        const sectorCards = this.container.querySelectorAll('.sector-card');
        
        sectorCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });

        // Hover efektleri
        sectorCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const overlay = card.querySelector('.sector-overlay');
                if (overlay) {
                    overlay.style.transform = 'translateY(0)';
                }
            });

            card.addEventListener('mouseleave', () => {
                const overlay = card.querySelector('.sector-overlay');
                if (overlay) {
                    overlay.style.transform = 'translateY(100%)';
                }
            });
        });
    }

    updateActiveSlide() {
        if (!this.swiper) return;
        
        const activeIndex = this.swiper.activeIndex;
        const slides = this.swiper.slides;
        
        slides.forEach((slide, index) => {
            const card = slide.querySelector('.sector-card');
            if (card) {
                if (index === activeIndex || index === activeIndex + 1) {
                    card.classList.add('swiper-slide-active');
                } else {
                    card.classList.remove('swiper-slide-active');
                }
            }
        });
    }

    // Public metodlar
    pauseAutoplay() {
        if (this.swiper) {
            this.swiper.autoplay.stop();
        }
    }

    resumeAutoplay() {
        if (this.swiper) {
            this.swiper.autoplay.start();
        }
    }

    goToSlide(index) {
        if (this.swiper) {
            this.swiper.slideTo(index);
        }
    }

    destroy() {
        if (this.swiper) {
            this.swiper.destroy();
            this.swiper = null;
        }
    }
}

window.Sectors = Sectors;  
