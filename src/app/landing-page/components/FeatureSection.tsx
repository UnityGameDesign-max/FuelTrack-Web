'use client';

import { useState, useEffect } from 'react';
import Icon from '@/src/components/ui/AppIcon';
import AppImage from '@/src/components/ui/AppImage';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefit: string;
  image: string;
  alt: string;
}

const FeaturesSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features: Feature[] = [
  {
    id: 'fuel-logging',
    icon: 'CameraIcon',
    title: 'Smart Fuel Logging',
    description: 'Snap a photo of your receipt and we extract all data automatically - fuel type, liters, price in ZAR, and location.',
    benefit: 'Save 15 min per fill-up',
    image: "https://images.unsplash.com/photo-1682309614449-3d8ed7d350c3",
    alt: 'Close-up of smartphone camera capturing fuel receipt at petrol station with price display'
  },
  {
    id: 'trip-tracking',
    icon: 'MapPinIcon',
    title: 'Automatic Trip Tracking',
    description: 'GPS-based tracking correlates every trip with fuel consumption, showing exact cost-per-kilometer for each ride.',
    benefit: 'Know your real profit',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4390abd-1763716276227.png",
    alt: 'Digital map interface showing route tracking with multiple waypoints and distance markers'
  },
  {
    id: 'analytics',
    icon: 'ChartBarIcon',
    title: 'Earnings Analytics',
    description: 'Visual dashboards show weekly trends, best routes, peak hours, and optimization opportunities to maximize profits.',
    benefit: 'Increase earnings 23%',
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    alt: 'Analytics dashboard displaying colorful bar charts and line graphs with earnings data'
  },
  {
    id: 'vehicle-management',
    icon: 'TruckIcon',
    title: 'Multi-Vehicle Management',
    description: 'Track multiple vehicles separately with individual fuel efficiency metrics and maintenance schedules.',
    benefit: 'Manage your fleet',
    image: "https://images.unsplash.com/photo-1630165356648-3c5f3e0b1202",
    alt: 'Row of modern cars parked in organized fleet parking lot with clear vehicle identification'
  }];


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHydrated, features.length]);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Everything You Need to Maximize Profits
            </h2>
          </div>
        </div>
      </section>);

  }

  return (
    <section id="features" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="SparklesIcon" size={20} className="text-primary" />
            <span className="text-primary font-medium">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Everything You Need to Maximize Profits
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Built specifically for South African ride-hailing drivers
          </p>
        </div>

        <div className="lg:hidden space-y-6">
          {features.map((feature, index) =>
          <div
            key={feature.id}
            className="bg-white rounded-xl shadow-md overflow-hidden">

              <div className="relative h-48">
                <AppImage
                src={feature.image}
                alt={feature.alt}
                className="w-full h-full object-cover" />

                <div className="absolute top-4 right-4 bg-success text-success-foreground rounded-full px-3 py-1 text-sm font-semibold">
                  {feature.benefit}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{feature.title}</h3>
                </div>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {features.map((feature, index) =>
            <button
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`w-full text-left p-6 rounded-xl transition-all ${
              activeFeature === index ?
              'bg-white shadow-lg scale-105' :
              'bg-white/50 hover:bg-white/80'}`
              }>

                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                activeFeature === index ? 'bg-primary' : 'bg-primary/10'}`
                }>
                    <Icon
                    name={feature.icon as any}
                    size={24}
                    className={activeFeature === index ? 'text-white' : 'text-primary'} />

                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-text-primary">{feature.title}</h3>
                      <span className="text-sm font-semibold text-success">{feature.benefit}</span>
                    </div>
                    <p className="text-text-secondary">{feature.description}</p>
                  </div>
                </div>
              </button>
            )}
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src={features[activeFeature].image}
                alt={features[activeFeature].alt}
                className="w-full h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm text-text-secondary mb-1">Active Feature</p>
                  <p className="text-xl font-bold text-text-primary">{features[activeFeature].title}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturesSection;