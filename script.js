// ==========================================
// LEGACY SCRIPT - REFACTORED FOR COMPONENT ARCHITECTURE
// ==========================================
// This file contains legacy functionality that will be gradually migrated
// Most functionality has been moved to individual components

// ==========================================
// FALLBACK FUNCTIONALITY
// ==========================================
// These functions provide fallback support if components fail to load

// Fallback mobile menu toggle (if Navigation component fails)
function initFallbackMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu && !window.App?.components?.navigation) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// Fallback navbar scroll effect (if Navigation component fails)
function initFallbackNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    if (navbar && !window.App?.components?.navigation) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
}

// Fallback smooth scroll (if Navigation component fails)
function initFallbackSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Fallback contact form handling (if Contact component fails)
function initFallbackContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm && !window.App?.components?.contact) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to your backend
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// ==========================================
// ENHANCED FUNCTIONALITY
// ==========================================
// Additional functionality that complements the components

// Performance monitoring
function initPerformanceMonitoring() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            console.log(`Page load time: ${loadTime}ms`);
        });
    }
}

// Error tracking
function initErrorTracking() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', {
            message: e.message,
            filename: e.filename,
            lineno: e.lineno,
            colno: e.colno,
            error: e.error
        });
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled Promise Rejection:', e.reason);
    });
}

// Service Worker registration (for future PWA functionality)
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        // Future: Register service worker for offline functionality
        console.log('Service Worker support detected');
    }
}

// Accessibility enhancements
function initAccessibilityEnhancements() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        border-radius: 4px;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ==========================================
// INITIALIZATION
// ==========================================

// Initialize fallback functionality
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for components to load
    setTimeout(() => {
        initFallbackMobileMenu();
        initFallbackNavbarScroll();
        initFallbackSmoothScroll();
        initFallbackContactForm();
    }, 1000);
});

// Initialize enhanced functionality
document.addEventListener('DOMContentLoaded', () => {
    initPerformanceMonitoring();
    initErrorTracking();
    initServiceWorker();
    initAccessibilityEnhancements();
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c👋 Merhaba!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cKoray Çetintaş - Dijital Dönüşüm Mimarı & ERP Danışmanı', 'font-size: 14px; color: #475569;');
console.log('%cİletişim: info@cetintas.com.tr', 'font-size: 12px; color: #64748b;');
console.log('%c🔧 Legacy script loaded - Component architecture active', 'font-size: 10px; color: #f59e0b;');