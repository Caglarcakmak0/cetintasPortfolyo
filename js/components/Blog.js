/**
 * Blog Component
 * Blog/İçgörüler section'ını yönetir
 */
class Blog {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.isInitialized = false;
        this.blogData = null;
    }

    async init() {
        if (!this.container) {
            console.error('Blog container bulunamadı');
            return;
        }

        console.log('Blog component initializing...');
        
        // Blog verilerini yükle
        await this.loadBlogData();
        
        this.setupAnimations();
        this.setupIntersectionObserver();
        this.setupCardInteractions();
        this.isInitialized = true;
        console.log('✅ Blog component initialized');
    }

    async loadBlogData() {
        // Blog verileri - daha sonra JSON'dan çekilebilir
        this.blogData = [
            {
                id: 1,
                category: 'Dijital Dönüşüm',
                title: 'Savunma Sanayinde ERP Seçerken Dikkat Edilmesi Gerekenler',
                excerpt: 'Sert regülasyonlar, izlenebilirlik ve kalite süreçleri varken ERP nasıl konumlandırılmalı?',
                image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1200',
                link: 'blog.html'
            },
            {
                id: 2,
                category: 'ERP Uygulamaları',
                title: 'Türkiye & KKTC Arasında Dijital Veri Köprüsü Kurmak',
                excerpt: 'Didoda çatısı altında kurguladığım iki ülke arasında veri ve süreç bütünlüğü yaklaşımı.',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200',
                link: 'blog.html'
            },
            {
                id: 3,
                category: 'Teknoloji Trendleri',
                title: 'ERP Projelerinde Neden "Teknoloji" Tek Başına Yetmez?',
                excerpt: 'İnsan, süreç ve kültür boyutunu dahil etmeden ERP projeleri neden tıkanıyor?',
                image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1200',
                link: 'blog.html'
            }
        ];
    }

    setupAnimations() {
        const blogCards = this.container.querySelectorAll('.blog-card');
        
        blogCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
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

        const blogGrid = this.container.querySelector('.blog-grid');
        if (blogGrid) {
            observer.observe(blogGrid);
        }
    }

    animateSection() {
        const sectionHeader = this.container.querySelector('.section-header');
        if (sectionHeader) {
            sectionHeader.style.opacity = '0';
            sectionHeader.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                sectionHeader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                sectionHeader.style.opacity = '1';
                sectionHeader.style.transform = 'translateY(0)';
            }, 100);
        }
    }

    setupCardInteractions() {
        const blogCards = this.container.querySelectorAll('.blog-card');
        
        blogCards.forEach(card => {
            // Hover efekti
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                
                const blogImage = card.querySelector('.blog-image');
                if (blogImage) {
                    blogImage.style.transform = 'scale(1.05)';
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                
                const blogImage = card.querySelector('.blog-image');
                if (blogImage) {
                    blogImage.style.transform = 'scale(1)';
                }
            });

            // Link tıklama
            const blogLink = card.querySelector('.blog-link');
            if (blogLink) {
                blogLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const href = blogLink.getAttribute('href');
                    if (href) {
                        window.location.href = href;
                    }
                });
            }
        });
    }

    // Blog kartlarını dinamik olarak oluşturma
    createBlogCard(post) {
        return `
            <article class="blog-card" data-post-id="${post.id}">
                <div class="blog-image" style="background-image: url('${post.image}');">
                    <div class="blog-category">${post.category}</div>
                </div>
                <div class="blog-content">
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <a href="${post.link}" class="blog-link">Devamını oku →</a>
                </div>
            </article>
        `;
    }

    // Blog grid'ini yenileme
    refreshBlogGrid() {
        const blogGrid = this.container.querySelector('.blog-grid');
        if (blogGrid && this.blogData) {
            const html = this.blogData.map(post => this.createBlogCard(post)).join('');
            blogGrid.innerHTML = html;
            
            // Yeni kartlar için event listener'ları tekrar kur
            setTimeout(() => {
                this.setupAnimations();
                this.setupCardInteractions();
            }, 100);
        }
    }

    // Kategoriye göre filtreleme
    filterByCategory(category) {
        if (!this.blogData) return;
        
        const filteredPosts = category === 'all' 
            ? this.blogData 
            : this.blogData.filter(post => post.category === category);
            
        const blogGrid = this.container.querySelector('.blog-grid');
        if (blogGrid) {
            const html = filteredPosts.map(post => this.createBlogCard(post)).join('');
            blogGrid.innerHTML = html;
            
            setTimeout(() => {
                this.setupAnimations();
                this.setupCardInteractions();
            }, 100);
        }
    }
}

window.Blog = Blog;  
