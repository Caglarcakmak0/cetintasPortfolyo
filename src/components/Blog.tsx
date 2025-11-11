import AnimatedContent from '@/animations/AnimatedContent';
import FadeContent from '@/animations/FadeContent';
import SplitText from '@/animations/SplitText';
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
        <div className="blog-section-header">
          <div className="section-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', gap: '1rem' }}>
            <SplitText
              text="Son Güncellemeler"
              className="sectors-label"
              delay={200}
              duration={1.5}
              ease="back.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
            <SplitText
              text="İçgörüler"
              className="sectors-main-title"
              delay={200}
              duration={1.5}
              ease="back.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
            <FadeContent blur={true} duration={1000} easing="ease-out" delay={0} threshold={0.1} initialOpacity={0}>
              <p className="section-description">
                Dijital dönüşüm, ERP ve teknoloji trendleri hakkındaki güncel yazılarım
              </p>
            </FadeContent>
          </div>
          <FadeContent blur={true} duration={1000} easing="ease-out" delay={0} threshold={0.1} initialOpacity={0}>
            <a href="/blog" className="btn btn-primary">Tümünü Gör</a>
          </FadeContent>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <AnimatedContent distance={150} direction="horizontal" reverse={false} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1.1} threshold={0.2} delay={window.innerWidth > 768 ? index * 0.3 : 0}>

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
            </AnimatedContent>
          ))}
        </div>
        <div style={{ height: '50px' }}></div>

      </div>
    </section>
  );
};

export default Blog;