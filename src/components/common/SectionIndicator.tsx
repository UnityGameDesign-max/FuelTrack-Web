'use client';

import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
}

interface SectionIndicatorProps {
  sections?: Section[];
  showLabels?: boolean;
}

const SectionIndicator = ({ 
  sections = [
    { id: 'hero', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'download', label: 'Download' }
  ],
  showLabels = false 
}: SectionIndicatorProps) => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);

      const sectionIds = sections.map(s => s.id);
      const current = sectionIds.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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

  const progressPercentage = sections.findIndex(s => s.id === activeSection) / (sections.length - 1) * 100;

  return (
    <div
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-[90] transition-all duration-300 hidden lg:block ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
    >
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
        
        <div 
          className="absolute left-1/2 top-0 w-0.5 bg-primary -translate-x-1/2 transition-all duration-300"
          style={{ height: `${progressPercentage}%` }}
        />

        <div className="relative space-y-6">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            const isPassed = sections.findIndex(s => s.id === activeSection) > index;
            
            return (
              <div key={section.id} className="flex items-center justify-end group">
                {showLabels && (
                  <span
                    className={`mr-4 text-xs font-medium transition-all duration-200 ${
                      isActive 
                        ? 'opacity-100 text-primary translate-x-0' :'opacity-0 group-hover:opacity-100 text-text-secondary translate-x-2 group-hover:translate-x-0'
                    }`}
                  >
                    {section.label}
                  </span>
                )}
                
                <button
                  onClick={() => handleSectionClick(section.id)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-primary scale-125 ring-4 ring-primary/20'
                      : isPassed
                      ? 'bg-primary/60 hover:bg-primary hover:scale-110' :'bg-border hover:bg-muted-foreground hover:scale-110'
                  }`}
                  aria-label={`Go to ${section.label}`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionIndicator;