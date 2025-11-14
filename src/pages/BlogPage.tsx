import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS, getImageUrl } from '@/utils/api';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string | null;
  published_date: string;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_ENDPOINTS.blogs());
      if (!response.ok) {
        throw new Error('Bloglar yüklenirken bir hata oluştu');
      }
      const data = await response.json();
      setBlogs(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
      console.error('Blog yükleme hatası:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getExcerpt = (content: string, maxLength: number = 150) => {
    // HTML etiketlerini temizle
    const text = content.replace(/<[^>]*>/g, '');
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="page-title">İçgörüler & Yazılar</h1>
            <p className="page-subtitle">Yükleniyor...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="page-title">İçgörüler & Yazılar</h1>
            <p className="page-subtitle" style={{ color: '#e74c3c' }}>{error}</p>
          </div>
        </div>
      </section>
    );
  }

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

      {/* Blog Grid */}
      <section className="blog-page-section">
        <div className="container">
          {blogs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <p style={{ fontSize: '18px', color: '#666' }}>Henüz blog yazısı eklenmemiş.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {blogs.map(blog => (
                <article key={blog.id} className="blog-card">
                  {blog.image && (
                    <div className="blog-image">
                      <img 
                        src={getImageUrl(blog.image)} 
                        alt={blog.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  {!blog.image && (
                    <div className="blog-image" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                    </div>
                  )}
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-date">📅 {formatDate(blog.published_date)}</span>
                    </div>
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-excerpt">{getExcerpt(blog.content)}</p>
                    <Link to={`/blog/${blog.id}`} className="blog-link">
                      Devamını oku →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}


        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta-section">
        <div className="container">
          <div className="about-cta">
            <h2>ERP ve Dijital Dönüşüm Danışmanlığı</h2>
            <p>Projeniz için profesyonel danışmanlık ve uygulama desteği almak ister misiniz?</p>
            <Link to="/contact" className="btn btn-primary">İletişime Geçin</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
