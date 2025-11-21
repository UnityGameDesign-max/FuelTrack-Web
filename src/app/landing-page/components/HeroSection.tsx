'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/src/components/ui/AppImage';
import Icon from '@/src/components/ui/AppIcon';

interface HeroSectionProps {
  onDownloadClick: () => void;
  onDemoClick: () => void;
}

const HeroSection = ({ onDownloadClick, onDemoClick }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [driverCount, setDriverCount] = useState(15000);

  useEffect(() => {
    setIsHydrated(true);
    const interval = setInterval(() => {
      setDriverCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isHydrated) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">Trusted by 15,000+ SA drivers</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Track Your Fuel.<br />Maximize Your Earnings
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                The only app built for SA Uber & Bolt drivers to increase profits through smart fuel tracking.
              </p>
            </div>
          </div>
        </div>
      </section>);

  }

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">
                Trusted by {driverCount.toLocaleString()}+ SA drivers
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Track Your Fuel.<br />Maximize Your Earnings
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              The only app built for SA Uber & Bolt drivers to increase profits through smart fuel tracking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={onDownloadClick}
                className="group px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-lg shadow-conversion hover:bg-accent/90 transition-conversion flex items-center justify-center space-x-2">

                <Icon name="ArrowDownTrayIcon" size={24} />
                <span>Download Free App</span>
              </button>

              <button
                onClick={onDemoClick}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border-2 border-white/20 hover:bg-white/20 transition-conversion flex items-center justify-center space-x-2">

                <Icon name="PlayIcon" size={24} variant="solid" />
                <span>Watch 2-Min Demo</span>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex -space-x-2">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_12ab9ea78-1763296173898.png"
                  alt="Smiling African man with short hair wearing blue shirt"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" />

                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1afc73db3-1763293906263.png"
                  alt="Professional African woman with braided hair in white blouse"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" />

                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_14a3645c0-1763296944878.png"
                  alt="Young African man with glasses wearing casual grey shirt"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" />

              </div>
              <div className="text-white">
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) =>
                  <Icon key={i} name="StarIcon" size={16} variant="solid" className="text-warning" />
                  )}
                </div>
                <p className="text-sm text-white/80">4.8/5 from 2,847 reviews</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">R2,847</p>
                <p className="text-sm text-white/80">Avg. monthly savings</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">23%</p>
                <p className="text-sm text-white/80">Profit increase</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1111ca495-1763716278757.png"
                alt="Modern smartphone displaying fuel tracking app interface with ZAR currency and trip analytics dashboard"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl" />

              <div className="absolute -top-6 -right-6 bg-success text-success-foreground rounded-2xl p-4 shadow-lg">
                <Icon name="CheckCircleIcon" size={32} variant="solid" />
                <p className="text-sm font-semibold mt-2">Trip Logged</p>
                <p className="text-xs opacity-80">R 247.50 earned</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                <p className="text-sm text-text-secondary">Fuel Cost</p>
                <p className="text-2xl font-bold text-text-primary">R 18.95/L</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-3xl blur-3xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default HeroSection;