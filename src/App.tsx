import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Layout from './components/Layout';
import { PageSEO } from './components/SEO/PageSEO';
import { NavItem, SocialLink, FooterLink } from './types';

// Lazy loading for pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const MapPage = lazy(() => import('./pages/MapPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const SectorPage = lazy(() => import('./pages/SectorPage'));
const SectorsListPage = lazy(() => import('./pages/SectorsListPage'));
const ReferencesPage = lazy(() => import('./pages/ReferencesPage'));




const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Navigation items
  const navItems: NavItem[] = [
    { id: '1', label: 'Ana Sayfa', href: '/', active: true },
    { id: '2', label: 'Hakkımda', href: '/about' },
    { id: '3', label: 'Sektörler', href: '/sectors' },
    // { id: '4', label: 'İçgörüler', href: '/blog' },
    { id: '5', label: 'İletişim', href: '/contact' },
  ];

  // Social links
  const socialLinks: SocialLink[] = [
    { id: '1', label: 'LinkedIn', url: 'https://linkedin.com/in/koraycetintas', icon: 'linkedin' },
    { id: '2', label: 'GitHub', url: 'https://github.com/koraycetintas', icon: 'github' },
  ];

  // Footer links
  const footerLinks: FooterLink[] = [
    { id: '1', text: 'ERP Danışmanlığı', url: '/contact' },
    { id: '2', text: 'Dijital Dönüşüm', url: '/#sectors' },
    { id: '3', text: 'Savunma Sanayii', url: '/#sectors' },
    { id: '4', text: 'İletişim', url: '/contact' },
  ];

  return (
    <Routes>
      {/* Admin sayfası Layout dışında */}
      <Route path="/admin" element={
        <Suspense fallback={
          <div className="page-loading">
            <div className="loading-spinner"></div>
            <p>Yükleniyor...</p>
          </div>
        }>
          <AdminPage />
        </Suspense>
      } />
      
      {/* Diğer sayfalar Layout içinde */}
      <Route path="/*" element={
        <Layout 
          navItems={navItems} 
          socialLinks={socialLinks} 
          footerLinks={footerLinks}
        >
          <PageSEO />
          <Suspense fallback={
            <div className="page-loading">
              <div className="loading-spinner"></div>
              <p>Yükleniyor...</p>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/sectors" element={<SectorsListPage />} />
              <Route path="/sector/:sectorId" element={<SectorPage />} />
              <Route path="/referanslar" element={<ReferencesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/case-study/:id" element={<CaseStudyPage />} />
            </Routes>
          </Suspense>
        </Layout>
      } />
    </Routes>
  );}


export default App;