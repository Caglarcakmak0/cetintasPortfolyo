import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SocialLink, FooterLink } from '@/types';

interface FooterProps {
  socialLinks: SocialLink[];
  footerLinks: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks, footerLinks }) => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith('/#')) {
      e.preventDefault();
      // Navigate to home page first, then scroll to section
      window.location.href = url;
    } else if (url.startsWith('#')) {
      handleSmoothScroll(e, url);
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h3>Koray Çetintaş</h3>
              <p>Dijital Dönüşüm Mimarı & ERP Danışmanı</p>
              <p className="footer-subtitle">
                Stratejiyi, insanı ve teknolojiyi aynı çatı altında buluşturarak işletmeler için kalıcı rekabet avantajı sağlayan dijital mimariler tasarlıyorum.
              </p>
            </div>
            <div className="footer-col">
              <h4>Şirketler</h4>
              <ul className="footer-links">
                <li>Çetintaş Yazılım Danışmanlık</li>
                <li>Didoda Bilgi Teknolojileri A.Ş. (Türkiye)</li>
                <li>Didoda Bilgi Teknolojileri Ltd. (KKTC)</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Hizmet Alanları</h4>
              <ul className="footer-links">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    {link.url ? (
                      link.url.startsWith('/#') ? (
                        <Link to={link.url} onClick={(e) => handleFooterLinkClick(e, link.url)}>
                          {link.text}
                        </Link>
                      ) : (
                        <a href={link.url} onClick={(e) => handleSmoothScroll(e, link.url!)}>
                          {link.text}
                        </a>
                      )
                    ) : (
                      link.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Sosyal Medya</h4>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a 
                    key={social.id}
                    href={social.url} 
                    className="social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <span dangerouslySetInnerHTML={{ __html: social.icon }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {currentYear} Koray Çetintaş. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
      
      {/* Back to top button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Başa dön"
      >
        ↑
      </button>
    </>
  );
};

export default Footer;