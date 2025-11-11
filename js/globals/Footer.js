/**
 * Footer Component - Global Component
 */
class Footer {
    constructor() {
        this.footer = null;
        this.isInitialized = false;
    }

    init() {
        this.footer = document.querySelector('.footer');
        if (!this.footer) {
            console.error('Footer element bulunamadı');
            return;
        }

        console.log('Footer component initializing...');
        this.updateCopyrightYear();
        this.setupSmoothScroll();
        this.setupSocialLinks();
        this.setupBackToTop();
        this.isInitialized = true;
        console.log('✅ Footer component initialized');
    }

    updateCopyrightYear() {
        const yearElements = document.querySelectorAll('.current-year');
        const currentYear = new Date().getFullYear();
        yearElements.forEach(element => {
            element.textContent = currentYear;
        });
    }

    setupSmoothScroll() {
        // Footer linkleri için smooth scroll
        const footerLinks = this.footer.querySelectorAll('a[href^="#"]');
        
        footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupSocialLinks() {
        const socialLinks = this.footer.querySelectorAll('.social-link');
        
        socialLinks.forEach(link => {
            // External link kontrolü
            if (link.hostname !== window.location.hostname) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }

            // Hover efekti
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-3px)';
                link.style.color = '#3b82f6';
            });

            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
                link.style.color = '';
            });
        });

        // Email link için özel handling
        const emailLink = this.footer.querySelector('a[href^="mailto:"]');
        if (emailLink) {
            emailLink.addEventListener('click', (e) => {
                // Email client açıldığında tracking için (isteğe bağlı)
                console.log('Email link clicked:', emailLink.href);
            });
        }
    }

    setupBackToTop() {
        // Back to top butonu ekle (yoksa)
        if (!document.querySelector('.back-to-top')) {
            const backToTopBtn = document.createElement('button');
            backToTopBtn.className = 'back-to-top';
            backToTopBtn.innerHTML = '↑';
            backToTopBtn.setAttribute('aria-label', 'Başa dön');
            document.body.appendChild(backToTopBtn);

            // Scroll event listener
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('show');
                } else {
                    backToTopBtn.classList.remove('show');
                }
            });

            // Click event
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Footer linklerini güncelleme
    updateLinks(links) {
        const footerLinksContainer = this.footer.querySelector('.footer-links');
        if (footerLinksContainer && links) {
            footerLinksContainer.innerHTML = links.map(link => 
                `<li><a href="${link.url}">${link.text}</a></li>`
            ).join('');
            this.setupSmoothScroll();
        }
    }

    // Sosyal medya linklerini güncelleme
    updateSocialLinks(socialLinks) {
        const socialContainer = this.footer.querySelector('.social-links');
        if (socialContainer && socialLinks) {
            socialContainer.innerHTML = socialLinks.map(link => 
                `<a href="${link.url}" class="social-link" target="_blank" aria-label="${link.label}">${link.icon}</a>`
            ).join('');
            this.setupSocialLinks();
        }
    }

    // Footer'ı göster/gizle
    show() {
        if (this.footer) {
            this.footer.style.display = 'block';
            setTimeout(() => {
                this.footer.style.opacity = '1';
                this.footer.style.transform = 'translateY(0)';
            }, 100);
        }
    }

    hide() {
        if (this.footer) {
            this.footer.style.opacity = '0';
            this.footer.style.transform = 'translateY(100%)';
            setTimeout(() => {
                this.footer.style.display = 'none';
            }, 300);
        }
    }

    // Footer bilgisini log'la
    logInfo() {
        console.log('Footer Component Info:', {
            initialized: this.isInitialized,
            hasFooter: !!this.footer,
            currentYear: new Date().getFullYear(),
            socialLinks: this.footer?.querySelectorAll('.social-link').length || 0,
            footerLinks: this.footer?.querySelectorAll('.footer-links a').length || 0
        });
    }
}

// CSS stillerini ekle
const footerStyles = `
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #3b82f6;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: #2563eb;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.social-link {
    transition: all 0.3s ease;
}

.footer-links a {
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #3b82f6;
}

.footer {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

@media (max-width: 768px) {
    .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
        font-size: 18px;
    }
}
`;

if (!document.querySelector('#footer-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'footer-styles';
    styleSheet.textContent = footerStyles;
    document.head.appendChild(styleSheet);
}

window.Footer = Footer;