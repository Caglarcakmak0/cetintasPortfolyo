import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { API_ENDPOINTS, getApiUrl, getImageUrl } from '@/utils/api';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string | null;
  published_date: string;
}

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // Login state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formImage, setFormImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
      loadBlogs();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    try {
      const response = await fetch(getApiUrl('login.php'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (data.success) {
        setAuthToken(data.token);
        localStorage.setItem('authToken', data.token);
        setIsAuthenticated(true);
        loadBlogs();
      } else {
        setLoginError(data.message || 'Giriş yapılırken bir hata oluştu');
      }
    } catch (error) {
      setLoginError('Giriş yapılırken bir hata oluştu');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
    setIsAuthenticated(false);
    setBlogs([]);
  };

  const loadBlogs = async () => {
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
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bu blogu silmek istediğinize emin misiniz?')) {
      return;
    }

    try {
      const response = await fetch(getApiUrl('blogs.php'), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({ id })
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Blog başarıyla silindi');
        loadBlogs();
        setTimeout(() => setSuccess(null), 5000);
      } else {
        setError(data.error || 'Blog silinirken bir hata oluştu');
        setTimeout(() => setError(null), 5000);
      }
    } catch (error) {
      setError('Blog silinirken bir hata oluştu');
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormTitle(blog.title);
    setFormContent(blog.content);
    setImagePreview(blog.image ? `/${blog.image}` : null);
    setFormImage(null);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditingBlog(null);
    setFormTitle('');
    setFormContent('');
    setImagePreview(null);
    setFormImage(null);
    setShowModal(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormImage(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append('title', formTitle);
    formData.append('content', formContent);

    if (editingBlog) {
      formData.append('id', editingBlog.id.toString());
      // Mevcut görseli koru (eğer yeni görsel seçilmediyse)
      if (!formImage && editingBlog.image) {
        formData.append('existing_image', editingBlog.image);
      }
    }

    if (formImage) {
      formData.append('image', formImage);
    }

    try {
      const response = await fetch(getApiUrl('blogs.php'), {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(editingBlog ? 'Blog başarıyla güncellendi' : 'Blog başarıyla eklendi');
        setShowModal(false);
        loadBlogs();
        setTimeout(() => setSuccess(null), 5000);
      } else {
        setError(data.error || 'Blog kaydedilirken bir hata oluştu');
        setTimeout(() => setError(null), 5000);
      }
    } catch (error) {
      setError('Blog kaydedilirken bir hata oluştu');
      setTimeout(() => setError(null), 5000);
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

  // Quill editor modülleri
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  if (!isAuthenticated) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{
          maxWidth: '400px',
          width: '100%',
          background: 'white',
          padding: '48px',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ 
            marginBottom: '32px', 
            color: '#2c3e50', 
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 600,
            letterSpacing: '-0.5px'
          }}>
            Blog Yönetim Paneli
          </h2>
          {loginError && (
            <div style={{
              background: '#fff5f5',
              color: '#c53030',
              padding: '12px 16px',
              borderRadius: '4px',
              marginBottom: '24px',
              border: '1px solid #fed7d7',
              fontSize: '14px'
            }}>
              {loginError}
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                color: '#374151', 
                fontWeight: 500,
                fontSize: '14px'
              }}>
                Kullanıcı Adı
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: '#111827',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2c3e50'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                color: '#374151', 
                fontWeight: 500,
                fontSize: '14px'
              }}>
                Şifre
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: '#111827',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2c3e50'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px 24px',
                background: '#2c3e50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#34495e'}
              onMouseOut={(e) => e.currentTarget.style.background = '#2c3e50'}
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      padding: '24px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        border: '1px solid #e0e0e0',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          background: '#2c3e50',
          color: 'white',
          padding: '24px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #34495e'
        }}>
          <h1 style={{ 
            fontSize: '20px', 
            margin: 0,
            fontWeight: 600,
            letterSpacing: '-0.3px'
          }}>
            Blog Yönetim Paneli
          </h1>
          <button
            onClick={handleLogout}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
            }}
          >
            Çıkış Yap
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '32px' }}>
          <div style={{ marginBottom: '24px' }}>
            <button
              onClick={handleAddNew}
              style={{
                background: '#2c3e50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#34495e'}
              onMouseOut={(e) => e.currentTarget.style.background = '#2c3e50'}
            >
              Yeni Blog Ekle
            </button>
          </div>

          {error && (
            <div style={{
              background: '#fff5f5',
              color: '#c53030',
              padding: '12px 16px',
              borderRadius: '4px',
              marginBottom: '20px',
              border: '1px solid #fed7d7',
              fontSize: '14px'
            }}>
              {error}
            </div>
          )}

          {success && (
            <div style={{
              background: '#f0fdf4',
              color: '#166534',
              padding: '12px 16px',
              borderRadius: '4px',
              marginBottom: '20px',
              border: '1px solid #bbf7d0',
              fontSize: '14px'
            }}>
              {success}
            </div>
          )}

          {loading ? (
            <p style={{ color: '#6b7280', fontSize: '14px' }}>Yükleniyor...</p>
          ) : blogs.length === 0 ? (
            <p style={{ color: '#6b7280', fontSize: '14px' }}>Henüz blog yazısı eklenmemiş.</p>
          ) : (
            <div style={{ display: 'grid', gap: '16px' }}>
              {blogs.map(blog => (
                <div
                  key={blog.id}
                  style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    padding: '20px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'start',
                    background: '#fafafa',
                    transition: 'box-shadow 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)'}
                  onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  {blog.image && (
                    <img
                      src={getImageUrl(blog.image)}
                      alt={blog.title}
                      style={{
                        width: '150px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        border: '1px solid #e0e0e0'
                      }}
                    />
                  )}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      marginBottom: '8px', 
                      color: '#2c3e50',
                      fontSize: '16px',
                      fontWeight: 600
                    }}>
                      {blog.title}
                    </h3>
                    <div style={{ 
                      fontSize: '12px', 
                      color: '#6b7280', 
                      marginBottom: '12px',
                      fontWeight: 400
                    }}>
                      Yayınlanma: {formatDate(blog.published_date)}
                    </div>
                    <p style={{ 
                      color: '#4b5563', 
                      fontSize: '14px', 
                      marginBottom: '16px',
                      lineHeight: '1.5'
                    }}>
                      {blog.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                    </p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => handleEdit(blog)}
                        style={{
                          background: '#2c3e50',
                          color: 'white',
                          padding: '8px 16px',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: 500,
                          transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = '#34495e'}
                        onMouseOut={(e) => e.currentTarget.style.background = '#2c3e50'}
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        style={{
                          background: '#dc2626',
                          color: 'white',
                          padding: '8px 16px',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: 500,
                          transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = '#b91c1c'}
                        onMouseOut={(e) => e.currentTarget.style.background = '#dc2626'}
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
            overflowY: 'auto'
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '4px',
              padding: '32px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              border: '1px solid #e0e0e0'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              paddingBottom: '16px',
              borderBottom: '1px solid #e0e0e0'
            }}>
              <h2 style={{ 
                color: '#2c3e50', 
                margin: 0,
                fontSize: '20px',
                fontWeight: 600
              }}>
                {editingBlog ? 'Blog Düzenle' : 'Yeni Blog Ekle'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#6b7280',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#f3f4f6'}
                onMouseOut={(e) => e.currentTarget.style.background = 'none'}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: '#374151', 
                  fontWeight: 500,
                  fontSize: '14px'
                }}>
                  Başlık
                </label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#111827',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2c3e50'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: '#374151', 
                  fontWeight: 500,
                  fontSize: '14px'
                }}>
                  İçerik
                </label>
                <ReactQuill
                  theme="snow"
                  value={formContent}
                  onChange={setFormContent}
                  modules={quillModules}
                  style={{ minHeight: '300px' }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: '#374151', 
                  fontWeight: 500,
                  fontSize: '14px'
                }}>
                  Görsel
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '14px',
                    background: 'white'
                  }}
                />
                {imagePreview && (
                  <img
                    src={getImageUrl(imagePreview)}
                    alt="Preview"
                    style={{
                      maxWidth: '200px',
                      maxHeight: '150px',
                      marginTop: '12px',
                      borderRadius: '4px',
                      border: '1px solid #e0e0e0'
                    }}
                  />
                )}
              </div>

              <div style={{ 
                display: 'flex', 
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid #e0e0e0'
              }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: '10px 20px',
                    background: '#2c3e50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#34495e'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#2c3e50'}
                >
                  Kaydet
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{
                    flex: 1,
                    padding: '10px 20px',
                    background: '#6b7280',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#4b5563'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#6b7280'}
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;

