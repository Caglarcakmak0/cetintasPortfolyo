/**
 * Contact Component
 * İletişim formunu ve bilgilerini yönetir
 */
class Contact {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.isInitialized = false;
        this.form = null;
    }

    async init() {
        if (!this.container) {
            console.error('Contact container bulunamadı');
            return;
        }

        console.log('Contact component initializing...');
        
        this.cacheElements();
        this.setupFormValidation();
        this.setupAnimations();
        this.setupIntersectionObserver();
        this.isInitialized = true;
        console.log('✅ Contact component initialized');
    }

    cacheElements() {
        this.form = this.container.querySelector('#contactForm');
        this.contactInfo = this.container.querySelector('.contact-info');
        this.contactItems = this.container.querySelectorAll('.contact-item');
    }

    setupFormValidation() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });

        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });

            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });
    }

    validateField(field) {
        const fieldName = field.name;
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Bu alan zorunludur';
        }

        // Email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Geçerli bir e-posta adresi giriniz';
            }
        }

        // Name validation
        if (fieldName === 'name' && value) {
            if (value.length < 3) {
                isValid = false;
                errorMessage = 'Adınız en az 3 karakter olmalıdır';
            }
        }

        this.showFieldError(field, isValid, errorMessage);
        return isValid;
    }

    showFieldError(field, isValid, errorMessage) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;

        let errorElement = formGroup.querySelector('.error-message');
        
        if (!isValid) {
            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                formGroup.appendChild(errorElement);
            }
            errorElement.textContent = errorMessage;
            field.classList.add('error');
        } else {
            if (errorElement) {
                errorElement.remove();
            }
            field.classList.remove('error');
        }
    }

    clearFieldError(field) {
        const formGroup = field.closest('.form-group');
        if (formGroup) {
            const errorElement = formGroup.querySelector('.error-message');
            if (errorElement) {
                errorElement.remove();
            }
            field.classList.remove('error');
        }
    }

    async handleFormSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        // Validate all fields
        const inputs = this.form.querySelectorAll('input, textarea');
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showNotification('Lütfen tüm zorunlu alanları doğru doldurunuz', 'error');
            return;
        }

        // Show loading state
        this.setFormLoading(true);

        try {
            // Simulate form submission (gerçek uygulamada API call yapılacak)
            await this.submitForm(data);
            this.showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.', 'success');
            this.form.reset();
        } catch (error) {
            console.error('Form submission error:', error);
            this.showNotification('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.', 'error');
        } finally {
            this.setFormLoading(false);
        }
    }

    async submitForm(data) {
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success
                resolve({ success: true });
                
                // Simulate error (test için)
                // reject(new Error('Network error'));
            }, 2000);
        });
    }

    setFormLoading(isLoading) {
        const submitButton = this.form.querySelector('button[type="submit"]');
        if (!submitButton) return;

        if (isLoading) {
            submitButton.disabled = true;
            submitButton.textContent = 'Gönderiliyor...';
            submitButton.classList.add('loading');
        } else {
            submitButton.disabled = false;
            submitButton.textContent = 'Mesajı Gönder';
            submitButton.classList.remove('loading');
        }
    }

    showNotification(message, type = 'info') {
        // Notification container'ı oluştur veya mevcut olanı al
        let notificationContainer = document.querySelector('.notification-container');
        
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.className = 'notification-container';
            document.body.appendChild(notificationContainer);
        }

        // Notification element'ini oluştur
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add to container
        notificationContainer.appendChild(notification);

        // Show animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    setupAnimations() {
        // Contact info animasyonu
        if (this.contactInfo) {
            this.contactInfo.style.opacity = '0';
            this.contactInfo.style.transform = 'translateX(-30px)';
        }

        // Contact form animasyonu
        if (this.form) {
            this.form.style.opacity = '0';
            this.form.style.transform = 'translateX(30px)';
        }

        // Contact items animasyonu
        this.contactItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
        });
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
        // Contact info animasyonu
        if (this.contactInfo) {
            setTimeout(() => {
                this.contactInfo.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                this.contactInfo.style.opacity = '1';
                this.contactInfo.style.transform = 'translateX(0)';
            }, 200);
        }

        // Contact form animasyonu
        if (this.form) {
            setTimeout(() => {
                this.form.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                this.form.style.opacity = '1';
                this.form.style.transform = 'translateX(0)';
            }, 400);
        }

        // Contact items animasyonu
        this.contactItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 600 + (index * 100));
        });
    }
}

// CSS stillerini ekle
const contactStyles = `
.error-message {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: block;
}

.form-group input.error,
.form-group textarea.error {
    border-color: #ef4444;
}

.notification-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
}

.notification {
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    margin-bottom: 1rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
}

.notification.show {
    transform: translateX(0);
}

.notification-success {
    border-left: 4px solid #10b981;
    color: #065f46;
}

.notification-error {
    border-left: 4px solid #ef4444;
    color: #991b1b;
}

.notification-info {
    border-left: 4px solid #3b82f6;
    color: #1e40af;
}

button.loading {
    opacity: 0.7;
    cursor: not-allowed;
}
`;

if (!document.querySelector('#contact-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'contact-styles';
    styleSheet.textContent = contactStyles;
    document.head.appendChild(styleSheet);
}

window.Contact = Contact;  
