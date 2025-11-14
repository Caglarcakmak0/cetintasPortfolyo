import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import { API_ENDPOINTS, getImageUrl } from '@/utils/api';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string | null;
  published_date: string;
}

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchBlog(parseInt(id));
    }
  }, [id]);

  const fetchBlog = async (blogId: number) => {
    try {
      setLoading(true);
      const response = await fetch(API_ENDPOINTS.blog(blogId));
      if (!response.ok) {
        if (response.status === 404) {
          setError('Blog bulunamadı');
        } else {
          throw new Error('Blog yüklenirken bir hata oluştu');
        }
        return;
      }
      const data = await response.json();
      setBlog(data);
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
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="page-title">Yükleniyor...</h1>
          </div>
        </div>
      </section>
    );
  }

  if (error || !blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Breadcrumb
        title={blog.title}
        breadcrumb={[
          { label: 'Ana Sayfa', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: blog.title }
        ]}
        image={blog.image ? getImageUrl(blog.image) : ''}
      />

      <section className="blog-detail-section" style={{ padding: '60px 0' }}>
        <div className="container">
          <article className="blog-detail-article">
            <div className="blog-detail-header">

              <h1 className="blog-detail-title">{blog.title}</h1>
            </div>

            <div
              className="blog-detail-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
              style={{
                lineHeight: '1.8',
                fontSize: '18px',
                color: '#333'
              }}
            />

            <div className="blog-detail-meta" style={{ marginTop: '40px' }}>
              <span className="blog-date">📅 {formatDate(blog.published_date)}</span>
              <span><b>Yazar: </b> Koray Çetintaş</span>
            </div>

            <div className="blog-detail-footer" style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #eee' }}>
              <Link to="/blog" className="btn btn-primary">
                ← Blog Listesine Dön
              </Link>
            </div>
          </article>
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
};

export default BlogDetailPage;

