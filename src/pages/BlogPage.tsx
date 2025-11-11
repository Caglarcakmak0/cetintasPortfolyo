import { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
  tags: string[];
  link: string;
}

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Savunma Sanayinde ERP Seçerken Dikkat Edilmesi Gerekenler',
      excerpt: 'Savunma sanayi, yüksek regülasyon, izlenebilirlik ve kalite süreçleri gerektiren bir sektördür. ERP seçiminde kritik başarı faktörleri nelerdir? Ürün ağaçları, dokümantasyon ve iç denetim entegrasyonunda nelere dikkat edilmelidir?',
      category: 'Dijital Dönüşüm',
      date: '15 Ekim 2025',
      readTime: '8 dk okuma',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tags: ['Savunma Sanayi', 'ERP', 'İzlenebilirlik'],
      link: 'blog-savunma-erp.html'
    },
    {
      id: 2,
      title: 'Türkiye & KKTC Arasında Dijital Veri Köprüsü Kurmak',
      excerpt: 'Didoda çatısı altında kurguladığım iki ülke arasında veri ve süreç bütünlüğü yaklaşımı. Sınır ötesi iş süreçlerinde ERP entegrasyonu, veri senkronizasyonu ve yasal uyum konularında deneyimlerimi paylaşıyorum.',
      category: 'ERP Uygulamaları',
      date: '8 Ekim 2025',
      readTime: '6 dk okuma',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
      tags: ['ERP Entegrasyon', 'Uluslararası', 'Veri Yönetimi'],
      link: 'blog-turkiye-kktc.html'
    },
    {
      id: 3,
      title: 'ERP Projelerinde Neden "Teknoloji" Tek Başına Yetmez?',
      excerpt: 'İnsan, süreç ve kültür boyutunu dahil etmeden ERP projeleri neden tıkanıyor? Başarılı dijital dönüşüm için teknolojinin ötesinde nelere odaklanmalıyız? Değişim yönetimi ve kurumsal adaptasyon stratejileri.',
      category: 'Teknoloji Trendleri',
      date: '1 Ekim 2025',
      readTime: '10 dk okuma',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tags: ['Değişim Yönetimi', 'ERP', 'İnsan Faktörü'],
      link: 'blog-teknoloji-yetmez.html'
    },
    {
      id: 4,
      title: 'Üretimde MRP ve Kapasite Planlama: Pratik Yaklaşımlar',
      excerpt: 'Malzeme ihtiyaç planlaması (MRP) ve kapasite planlaması süreçlerini ERP üzerinde nasıl optimize edebilirsiniz? Üretim çizelgeleme, darboğaz analizi ve OEE takibi için somut öneriler.',
      category: 'ERP Uygulamaları',
      date: '22 Eylül 2025',
      readTime: '7 dk okuma',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tags: ['MRP', 'Üretim', 'Planlama'],
      link: 'blog-mrp-planlama.html'
    },
    {
      id: 5,
      title: 'IoT ve ERP Entegrasyonu: Akıllı Fabrika Yolculuğu',
      excerpt: 'Endüstri 4.0 sürecinde IoT sensörlerinden gelen verileri ERP sisteminize nasıl entegre edebilirsiniz? Gerçek zamanlı üretim takibi, öngörücü bakım ve veri mimarisi tasarımı üzerine deneyimler.',
      category: 'Teknoloji Trendleri',
      date: '15 Eylül 2025',
      readTime: '9 dk okuma',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      tags: ['IoT', 'Endüstri 4.0', 'Entegrasyon'],
      link: 'blog-iot-erp.html'
    },
    {
      id: 6,
      title: 'Dijital Dönüşüm Yol Haritası: Nereden Başlamalı?',
      excerpt: 'Kurumsal dijital dönüşüm projeleri için adım adım rehber. Mevcut durum analizi, hedef mimari tasarımı, önceliklendirme ve hızlı kazanımlar (quick wins) stratejisi. Gerçek proje örnekleriyle.',
      category: 'Dijital Dönüşüm',
      date: '8 Eylül 2025',
      readTime: '11 dk okuma',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tags: ['Dijital Dönüşüm', 'Strateji', 'Yol Haritası'],
      link: 'blog-dijital-yol-haritasi.html'
    },
    {
      id: 7,
      title: 'Workcube vs Odoo: Hangi ERP Sizin İçin Daha Uygun?',
      excerpt: 'Türkiye pazarında öne çıkan iki ERP çözümünün kapsamlı karşılaştırması. Maliyet, esneklik, yerelleşme, modüler yapı ve uygulama kolaylığı açısından detaylı analiz.',
      category: 'ERP Uygulamaları',
      date: '1 Eylül 2025',
      readTime: '5 dk okuma',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      tags: ['Workcube', 'Odoo', 'ERP Seçimi'],
      link: 'blog-workcube-odoo.html'
    },
    {
      id: 8,
      title: 'Yapay Zeka ve ERP: Karar Destek Sistemlerinin Geleceği',
      excerpt: 'Yapay zeka destekli ERP sistemlerinde talep tahmini, stok optimizasyonu ve üretim planlaması nasıl yapılır? Machine learning modellerinin kurumsal sistemlere entegrasyonu üzerine pratik bilgiler.',
      category: 'Teknoloji Trendleri',
      date: '25 Ağustos 2025',
      readTime: '12 dk okuma',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      tags: ['Yapay Zeka', 'ML', 'Karar Destek'],
      link: 'blog-yapay-zeka-erp.html'
    },
    {
      id: 9,
      title: 'Savunma Sanayinde Ürün Ağacı Yönetimi ve İzlenebilirlik',
      excerpt: 'Karmaşık ürün ağaçları (BOM), seri numarası takibi ve komponent izlenebilirliği konularında pratik çözümler. AS9100 ve NATO AQAP standartlarına uyum sağlayan ERP yapılandırması.',
      category: 'Savunma Sanayi',
      date: '18 Ağustos 2025',
      readTime: '9 dk okuma',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      tags: ['BOM', 'İzlenebilirlik', 'Kalite'],
      link: 'blog-urun-agaci.html'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'dijital-donusum', label: 'Dijital Dönüşüm' },
    { id: 'erp', label: 'ERP Uygulamaları' },
    { id: 'teknoloji', label: 'Teknoloji Trendleri' },
    { id: 'savunma', label: 'Savunma Sanayi' }
  ];

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => {
        const categoryMap: { [key: string]: string } = {
          'dijital-donusum': 'Dijital Dönüşüm',
          'erp': 'ERP Uygulamaları',
          'teknoloji': 'Teknoloji Trendleri',
          'savunma': 'Savunma Sanayi'
        };
        return post.category === categoryMap[activeFilter];
      });

  return (
    <>
      {/* Blog Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="page-title">İçgörüler & Yazılar</h1>
            <p className="page-subtitle">
              ERP, dijital dönüşüm, savunma sanayi ve üretim odaklı seçimlerinizde yol göstermesi için hazırladığım içerikler
            </p>
          </div>
        </div>
      </section>

      {/* Blog Filter */}
      <section className="blog-filter-section">
        <div className="container">
          <div className="blog-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-page-section">
        <div className="container">
          <div className="blog-grid">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image" style={{ background: post.gradient }}>
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">📅 {post.date}</span>
                    <span className="blog-read-time">⏱️ {post.readTime}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a href={post.link} className="blog-link">Devamını oku →</a>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-section">
            <div className="newsletter-card">
              <h2>📬 Yeni İçeriklerden Haberdar Olun</h2>
              <p>ERP, dijital dönüşüm ve teknoloji trendleri hakkında düzenli içerikler için bültenime abone olun.</p>
              <form className="newsletter-form" id="newsletterForm">
                <input type="email" placeholder="E-posta adresiniz" required />
                <button type="submit" className="btn btn-primary">Abone Ol</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta-section">
        <div className="container">
          <div className="about-cta">
            <h2>ERP ve Dijital Dönüşüm Danışmanlığı</h2>
            <p>Projeniz için profesyonel danışmanlık ve uygulama desteği almak ister misiniz?</p>
            <Link to="/#contact" className="btn btn-primary">İletişime Geçin</Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default BlogPage;