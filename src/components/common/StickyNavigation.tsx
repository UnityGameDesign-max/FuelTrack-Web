'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/src/components/ui/AppIcon';


interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

interface StickyNavigationProps {
  isCollapsed?: boolean;
}

const StickyNavigation = ({ isCollapsed = false }: StickyNavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigationItems: NavigationItem[] = [
    { label: 'Features', href: '#features', icon: 'SparklesIcon' },
    { label: 'How It Works', href: '#how-it-works', icon: 'CogIcon' },
    { label: 'Pricing', href: '#pricing', icon: 'CurrencyDollarIcon' },
    { label: 'FAQ', href: '#faq', icon: 'QuestionMarkCircleIcon' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      const sections = navigationItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'conversion',
        event_label: 'navigation_download',
        value: 1
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" className="text-primary-foreground"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-text-primary">Flowly</span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-conversion hover:bg-muted ${
                    activeSection === item.href
                      ? 'text-primary bg-muted' :'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  handleDownloadClick();
                  handleNavClick('#download');
                }}
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold shadow-conversion hover:bg-accent/90 transition-conversion"
              >
                Download App
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-conversion"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} 
                size={24} 
                className="text-text-primary"
              />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-conversion ${
                    activeSection === item.href
                      ? 'bg-muted text-primary' :'text-text-secondary hover:bg-muted hover:text-text-primary'
                  }`}
                >
                  {item.icon && (
                    <Icon name={item.icon as any} size={20} />
                  )}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <Link
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  handleDownloadClick();
                  handleNavClick('#download');
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-accent text-accent-foreground rounded-lg font-semibold shadow-conversion hover:bg-accent/90 transition-conversion mt-4"
              >
                <Icon name="ArrowDownTrayIcon" size={20} />
                <span>Download App</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="h-20" />
    </>
  );
};

export default StickyNavigation;