'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/src/components/ui/AppIcon';

interface ConversionCTAProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  showOnMobile?: boolean;
  trackingLabel?: string;
}

const ConversionCTA = ({ 
  variant = 'primary', 
  size = 'md',
  showOnMobile = true,
  trackingLabel = 'floating_cta'
}: ConversionCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      setScrollDepth(scrollPercent);
      
      if (scrollPercent > 20 && scrollPercent < 90) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'conversion',
        event_label: trackingLabel,
        scroll_depth: Math.round(scrollDepth),
        value: 1
      });
    }
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-accent text-accent-foreground hover:bg-accent/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
  };

  if (!showOnMobile) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-[150] md:hidden transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md border-t border-border shadow-lg p-4">
          <Link
            href="#download"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
              const element = document.querySelector('#download');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className={`w-full flex items-center justify-center space-x-2 rounded-lg font-semibold shadow-conversion transition-conversion ${sizeClasses[size]} ${variantClasses[variant]}`}
          >
            <Icon name="ArrowDownTrayIcon" size={20} />
            <span>Download Free App</span>
          </Link>
          <p className="text-xs text-text-secondary text-center mt-2">
            Join 15,000+ SA drivers increasing earnings
          </p>
        </div>
      </div>

      <div
        className={`hidden md:block fixed bottom-8 right-8 z-[150] transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <Link
          href="#download"
          onClick={(e) => {
            e.preventDefault();
            handleClick();
            const element = document.querySelector('#download');
            if (element) {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }}
          className={`flex items-center space-x-2 rounded-full font-semibold shadow-conversion transition-conversion ${sizeClasses[size]} ${variantClasses[variant]}`}
        >
          <Icon name="ArrowDownTrayIcon" size={20} />
          <span>Download Now</span>
        </Link>
      </div>
    </>
  );
};

export default ConversionCTA;