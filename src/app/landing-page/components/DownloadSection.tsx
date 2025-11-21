'use client';

import { useState, useEffect } from 'react';
import Icon from '@/src/components/ui/AppIcon';
import AppImage from '@/src/components/ui/AppImage';

const DownloadSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setIsSubmitted(true);
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'sms_link_request', {
          event_category: 'conversion',
          event_label: 'download_section',
          value: 1
        });
      }
    }
  };

  if (!isHydrated) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Download FuelSense Today
            </h2>
          </div>
        </div>
      </section>);

  }

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Download FuelSense Today
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Start tracking your fuel expenses and maximizing your earnings in minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get the App Now</h3>
              
              <div className="space-y-4 mb-8">
                <button className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-black/90 transition-conversion">
                  <Icon name="DevicePhoneMobileIcon" size={24} />
                  <div className="text-left">
                    <p className="text-xs opacity-80">Download on the</p>
                    <p className="text-lg font-semibold">App Store</p>
                  </div>
                </button>

                <button className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-black/90 transition-conversion">
                  <Icon name="DevicePhoneMobileIcon" size={24} />
                  <div className="text-left">
                    <p className="text-xs opacity-80">Get it on</p>
                    <p className="text-lg font-semibold">Google Play</p>
                  </div>
                </button>
              </div>

              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-transparent text-white/80 text-sm">Or get SMS link</span>
                </div>
              </div>

              {!isSubmitted ?
              <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Enter your phone number
                    </label>
                    <div className="flex space-x-2">
                      <input
                      type="tel"
                      placeholder="0XX XXX XXXX"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                      required />

                      <button
                      type="submit"
                      className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-conversion">

                        Send
                      </button>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs">
                    We'll send you a link to download the app. Standard SMS rates may apply.
                  </p>
                </form> :

              <div className="bg-success/20 border border-success/30 rounded-lg p-4 text-center">
                  <Icon name="CheckCircleIcon" size={32} className="text-white mx-auto mb-2" variant="solid" />
                  <p className="text-white font-semibold mb-1">SMS Sent!</p>
                  <p className="text-white/80 text-sm">Check your phone for the download link</p>
                </div>
              }
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white mb-1">4.8</p>
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) =>
                  <Icon key={i} name="StarIcon" size={12} variant="solid" className="text-warning" />
                  )}
                </div>
                <p className="text-xs text-white/70">App Store</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white mb-1">15K+</p>
                <p className="text-xs text-white/70 mt-2">Active Drivers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white mb-1">R2.8K</p>
                <p className="text-xs text-white/70 mt-2">Avg. Savings</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <AppImage
                src="https://images.unsplash.com/photo-1687168644714-3343aa9b5af8"
                alt="Modern smartphone displaying FuelSense app dashboard with earnings analytics and fuel tracking interface"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl" />

            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-3xl blur-3xl" />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Icon name="ShieldCheckIcon" size={32} className="text-white mx-auto mb-3" />
            <h4 className="font-bold text-white mb-2">Secure & Private</h4>
            <p className="text-white/80 text-sm">Bank-level encryption protects your data</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Icon name="BoltIcon" size={32} className="text-white mx-auto mb-3" />
            <h4 className="font-bold text-white mb-2">Fast Setup</h4>
            <p className="text-white/80 text-sm">Start tracking in under 5 minutes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Icon name="HeartIcon" size={32} className="text-white mx-auto mb-3" />
            <h4 className="font-bold text-white mb-2">Free Forever</h4>
            <p className="text-white/80 text-sm">No credit card required to start</p>
          </div>
        </div>
      </div>
    </section>);

};

export default DownloadSection;