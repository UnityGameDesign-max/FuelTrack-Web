"use client";

import { useState, useEffect } from "react";
import Icon from "@/src/components/ui/AppIcon";
import AppImage from "@/src/components/ui/AppImage";

const DownloadSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setIsSubmitted(true);
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "sms_link_request", {
          event_category: "conversion",
          event_label: "download_section",
          value: 1,
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
              Download Flowly Today
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Download Flowly Today
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Start tracking your fuel expenses and maximizing your earnings in
            minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get the App Now
              </h3>

              <div className="space-y-4 mb-8">
                <button className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-black/90 transition-conversion">
                  <div className="mr-3">
                    <svg viewBox="0 0 384 512" width="30">
                      <path
                        fill="currentColor"
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs opacity-80">Download on the</p>
                    <p className="text-lg font-semibold">App Store</p>
                  </div>
                </button>

                <button className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-black/90 transition-conversion">
                  <div className="mr-3">
                    <svg viewBox="30 336.7 120.9 129.2" width="30">
                      <path
                        fill="#FFD400"
                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                      />
                      <path
                        fill="#FF3333"
                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                      />
                      <path
                        fill="#48FF48"
                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                      />
                      <path
                        fill="#3BCCFF"
                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                      />
                    </svg>
                  </div>
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
                  <span className="px-4 bg-transparent text-white/80 text-sm">
                    Or get SMS link
                  </span>
                </div>
              </div>

              {!isSubmitted ? (
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
                        required
                      />

                      <button
                        type="submit"
                        className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-conversion"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs">
                    We'll send you a link to download the app. Standard SMS
                    rates may apply.
                  </p>
                </form>
              ) : (
                <div className="bg-success/20 border border-success/30 rounded-lg p-4 text-center">
                  <Icon
                    name="CheckCircleIcon"
                    size={32}
                    className="text-white mx-auto mb-2"
                    variant="solid"
                  />
                  <p className="text-white font-semibold mb-1">SMS Sent!</p>
                  <p className="text-white/80 text-sm">
                    Check your phone for the download link
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white mb-1">4.8</p>
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="StarIcon"
                      size={12}
                      variant="solid"
                      className="text-warning"
                    />
                  ))}
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
                alt="Modern smartphone displaying Flowly app dashboard with earnings analytics and fuel tracking interface"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-3xl blur-3xl" />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Icon
              name="ShieldCheckIcon"
              size={32}
              className="text-white mx-auto mb-3"
            />
            <h4 className="font-bold text-white mb-2">Secure & Private</h4>
            <p className="text-white/80 text-sm">
              Bank-level encryption protects your data
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Icon
              name="BoltIcon"
              size={32}
              className="text-white mx-auto mb-3"
            />
            <h4 className="font-bold text-white mb-2">Fast Setup</h4>
            <p className="text-white/80 text-sm">
              Start tracking in under 5 minutes
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Icon
              name="HeartIcon"
              size={32}
              className="text-white mx-auto mb-3"
            />
            <h4 className="font-bold text-white mb-2">Free Forever</h4>
            <p className="text-white/80 text-sm">
              No credit card required to start
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
