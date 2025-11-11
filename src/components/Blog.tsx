import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'ERP Sistemlerinde Yapay Zeka Entegrasyonu',
      excerpt: 'Modern ERP sistemlerine yapay zeka entegrasyonu ile verimliliği artırma ve öngörücü analiz yapma yöntemleri.',
      category: 'ERP',
      link: '#'
    },
    {
      id: '2', 
      title: 'Dijital Dönüşümde Değişim Yönetimi',
      excerpt: 'Şirketlerde dijital dönüşüm projelerinde başarılı değişim yönetimi stratejileri ve en iyi uygulamalar.',
      category: 'Dijital Dönüşüm',
      link: '#'
    },
    {
      id: '3',
      title: 'Savunma Sanayii için Özel ERP Çözümleri',
      excerpt: 'Savunma sanayinin özel ihtiyaçlarına yönelik olarak geliştirilen ERP sistemlerinin avantajları.',
      category: 'Savunma',
      link: '#'
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">İçgörüler</h2>
          <p className="section-description">
            Dijital dönüşüm, ERP ve teknoloji trendleri hakkındaki güncel yazılarım
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.link} className="blog-link">
                  Devamını Oku →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;