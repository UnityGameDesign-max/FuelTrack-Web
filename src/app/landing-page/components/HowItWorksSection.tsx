import Icon from '@/src/components/ui/AppIcon';
import AppImage from '@/src/components/ui/AppImage';

const HowItWorksSection = () => {
  const steps = [
  {
    number: '01',
    icon: 'ArrowDownTrayIcon',
    title: 'Download FuelSense',
    description: 'Get the app free from Google Play or App Store. Setup takes less than 2 minutes.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7ab7afe-1763716278200.png",
    alt: 'Smartphone screen showing FuelSense app download page with install button'
  },
  {
    number: '02',
    icon: 'LinkIcon',
    title: 'Connect Your Accounts',
    description: 'Securely link your Uber and Bolt driver accounts for automatic trip import.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ddd04572-1763716277604.png",
    alt: 'Mobile app interface showing secure account connection screen with Uber and Bolt logos'
  },
  {
    number: '03',
    icon: 'CameraIcon',
    title: 'Track Automatically',
    description: 'Snap fuel receipts and let GPS track your trips. Everything syncs in real-time.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9d611ca-1763716277521.png",
    alt: 'Driver hand holding smartphone taking photo of fuel receipt at petrol station'
  },
  {
    number: '04',
    icon: 'ChartBarIcon',
    title: 'Get Weekly Reports',
    description: 'Receive detailed profit analysis every Monday with actionable optimization tips.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15e9c826f-1763716276788.png",
    alt: 'Mobile notification showing weekly earnings report with profit graphs and statistics'
  }];


  return (
    <section id="how-it-works" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="CogIcon" size={20} className="text-primary" />
            <span className="text-primary font-medium">Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Start Tracking in 4 Easy Steps
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From download to insights in under 5 minutes
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) =>
          <div
            key={step.number}
            className={`grid lg:grid-cols-2 gap-8 items-center ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
            }>

              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={step.icon as any} size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-lg text-text-secondary mb-6">{step.description}</p>
                
                {index === 0 &&
              <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-conversion">
                      <Icon name="DevicePhoneMobileIcon" size={20} />
                      <span className="font-medium">Download on App Store</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-conversion">
                      <Icon name="DevicePhoneMobileIcon" size={20} />
                      <span className="font-medium">Get it on Google Play</span>
                    </button>
                  </div>
              }
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <AppImage
                    src={step.image}
                    alt={step.alt}
                    className="w-full h-[400px] object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center">
          <Icon name="ClockIcon" size={48} className="text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Ready in Under 5 Minutes</h3>
          <p className="text-white/90 text-lg">
            Most drivers complete setup during their first fuel stop
          </p>
        </div>
      </div>
    </section>);

};

export default HowItWorksSection;