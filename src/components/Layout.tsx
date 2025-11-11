import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavItem, SocialLink, FooterLink } from '@/types';

interface LayoutProps {
  children: ReactNode;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  footerLinks: FooterLink[];
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  navItems, 
  socialLinks, 
  footerLinks 
}) => {
  return (
    <div className="app">
      <Navbar items={navItems} />
      <main className="main-content">
        {children}
      </main>
      <Footer socialLinks={socialLinks} footerLinks={footerLinks} />
    </div>
  );
};

export default Layout;