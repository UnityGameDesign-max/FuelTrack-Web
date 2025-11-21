import Icon from '@/src/components/ui/AppIcon';
import AppImage from '@/src/components/ui/AppImage';

const LocalizationSection = () => {
  const localFeatures = [
  {
    icon: 'CurrencyDollarIcon',
    title: 'ZAR Currency',
    description: 'All tracking in South African Rand with proper formatting (R 1,234.56)'
  },
  {
    icon: 'BeakerIcon',
    title: 'Local Fuel Types',
    description: 'Support for 95/93 octane, diesel, and all SA fuel grades'
  },
  {
    icon: 'BuildingStorefrontIcon',
    title: 'Fuel Chain Integration',
    description: 'Partnerships with Shell, BP, Engen, and major SA fuel retailers'
  },
  {
    icon: 'MapIcon',
    title: 'SA Route Optimization',
    description: 'Optimized for Johannesburg, Cape Town, Durban, and all major cities'
  }];


  return (
    <section id="localization" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="GlobeAltIcon" size={20} className="text-secondary" />
            <span className="text-secondary font-medium">Built for South Africa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Designed for SA Drivers
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Every feature optimized for the South African ride-hailing market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {localFeatures.map((feature, index) =>
          <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature.icon as any} size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm">{feature.description}</p>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 border-2 border-secondary/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Trusted by Major Fuel Retailers
              </h3>
              <p className="text-text-secondary mb-6">
                FuelSense partners with South Africa's leading fuel companies to provide accurate pricing, loyalty program integration, and exclusive driver discounts.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <AppImage
                    src="https://images.unsplash.com/photo-1670552860241-d6d66fdb8352"
                    alt="Shell fuel station logo with red and yellow brand colors"
                    className="w-full h-16 object-contain mb-2" />

                  <p className="text-sm font-medium text-text-primary">Shell Partner</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_175da698e-1763716277196.png"
                    alt="BP fuel station logo with green and yellow brand identity"
                    className="w-full h-16 object-contain mb-2" />

                  <p className="text-sm font-medium text-text-primary">BP Partner</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-text-primary mb-4">Live Fuel Prices</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPinIcon" size={20} className="text-primary" />
                    <div>
                      <p className="font-medium text-text-primary">Johannesburg CBD</p>
                      <p className="text-xs text-text-secondary">95 Octane</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-text-primary">R 18.95/L</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPinIcon" size={20} className="text-primary" />
                    <div>
                      <p className="font-medium text-text-primary">Cape Town</p>
                      <p className="text-xs text-text-secondary">Diesel</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-text-primary">R 17.85/L</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPinIcon" size={20} className="text-primary" />
                    <div>
                      <p className="font-medium text-text-primary">Durban</p>
                      <p className="text-xs text-text-secondary">93 Octane</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-text-primary">R 18.45/L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default LocalizationSection;