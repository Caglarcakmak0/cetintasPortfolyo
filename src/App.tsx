import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import MapPage from './pages/MapPage';
import { NavItem, SocialLink, FooterLink } from './types';
import { useEffect } from 'react';


const App = () => {
  // Navigation items
  const navItems: NavItem[] = [
    { id: '1', label: 'Ana Sayfa', href: '/', active: true },
    { id: '2', label: 'Hakkımda', href: '/about' },
    { id: '3', label: 'Sektörler', href: '/#sectors' },
    { id: '4', label: 'İçgörüler', href: '/blog' },
    { id: '5', label: 'İletişim', href: '/#contact' },
  ];

  // Social links
  const socialLinks: SocialLink[] = [
    { id: '1', label: 'LinkedIn', url: 'https://linkedin.com/in/koraycetintas', icon: 'linkedin' },
    { id: '2', label: 'GitHub', url: 'https://github.com/koraycetintas', icon: 'github' },
  ];

  // Footer links
  const footerLinks: FooterLink[] = [
    { id: '1', text: 'ERP Danışmanlığı', url: '/#contact' },
    { id: '2', text: 'Dijital Dönüşüm', url: '/#sectors' },
    { id: '3', text: 'Savunma Sanayii', url: '/#sectors' },
    { id: '4', text: 'İletişim', url: '/#contact' },
  ];

  return (
    <Router>
      <Layout 
        navItems={navItems} 
        socialLinks={socialLinks} 
        footerLinks={footerLinks}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Layout>
    </Router>
  );}


export default App;