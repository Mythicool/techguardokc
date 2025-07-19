import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import GooeyNav from './GooeyNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-primary/90 to-primary/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">TechGuard OKC</span>
          </div>
          
          {/* Desktop Navigation with GooeyNav */}
          <div className="hidden md:block">
            <div style={{ height: '60px', position: 'relative' }}>
              <GooeyNav
                items={navItems}
                particleCount={12}
                particleDistances={[70, 8]}
                particleR={80}
                initialActiveIndex={0}
                animationTime={500}
                timeVariance={200}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-white/80 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-white/80 transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-white/80 transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-white/80 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;