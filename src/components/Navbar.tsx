import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '@/types';
import AnimatedContent from '@/animations/AnimatedContent';

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
              <Link to="/" className="logo-text">Koray Çetintaş</Link>
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