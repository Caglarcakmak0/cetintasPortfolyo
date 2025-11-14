import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '@/types';
import AnimatedContent from '@/animations/AnimatedContent';
import SplitText from '@/animations/SplitText';

interface NavbarProps {
  items: NavItem[];
}

const Navbar = ({ items }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (

    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <Link to="/">
                <h1 className="logo-text">Koray Çetintaş</h1>
              </Link>
            </div>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
              {items.map((item) => {
                const isActive = location.pathname === item.href ||
                  (item.href.startsWith('/#') && location.pathname === '/' && location.hash === item.href.substring(1));
                return (
                  <li key={item.id}>
                    {item.href.startsWith('/#') ? (
                      <a
                        href={item.href}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
              
              {/* Video Section in Mobile Menu */}
              <li className="mobile-menu-video">
                <div className="mobile-video-wrapper">
                  <h4 className="mobile-video-title">Tanıtım Videosu</h4>
                  <div className="video-container">
                    <iframe 
                      src="https://www.youtube.com/embed/QZiVlOafGIQ?si=x0xcpYbIbgZxRK_D" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    />
                  </div>
                </div>
              </li>
            </ul>
            <button
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </AnimatedContent>
    </nav>
  );
}

export default Navbar;