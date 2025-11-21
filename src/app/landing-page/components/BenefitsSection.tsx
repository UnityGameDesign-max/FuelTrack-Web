import Icon from '@/src/components/ui/AppIcon';
import AppImage from '@/src/components/ui/AppImage';

const BenefitsSection = () => {
  const benefits = [
  {
    icon: 'BanknotesIcon',
    title: 'Save Money Every Month',
    description: 'Average driver saves R2,847 monthly through better fuel efficiency and route optimization',
    stat: 'R2,847',
    statLabel: 'Avg. monthly savings'
  },
  {
    icon: 'DocumentCheckIcon',
    title: 'Accurate Expense Tracking',
    description: 'Never miss a deduction with automatic receipt capture and SARS-compliant reporting',
    stat: '100%',
    statLabel: 'Tax compliant'
  },
  {
    icon: 'BoltIcon',
    title: 'Improved Efficiency',
    description: 'Identify your most profitable routes and times to maximize earnings per hour',
    stat: '23%',
    statLabel: 'Profit increase'
  },
  {
    icon: 'ChartBarIcon',
    title: 'Better Earnings Visibility',
    description: 'Real-time dashboards show exactly where your money goes and how to optimize',
    stat: '15K+',
    statLabel: 'Active drivers'
  }];


  const testimonials = [
  {
    name: 'Thabo M.',
    location: 'Johannesburg',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12ab9ea78-1763296173898.png",
    alt: 'Smiling African man with short hair wearing blue shirt in car',
    rating: 5,
    before: 'R 12,450',
    after: 'R 15,890',
    improvement: '+28%',
    quote: 'Flowly showed me I was losing R3,000 monthly on inefficient routes. Now I know exactly which trips are profitable.'
  },
  {
    name: 'Sarah K.',
    location: 'Cape Town',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ad91979a-1763295629510.png",
    alt: 'Professional African woman with braided hair in white blouse smiling',
    rating: 5,
    before: 'R 9,200',
    after: 'R 11,750',
    improvement: '+27%',
    quote: 'The automatic tracking saves me hours every week. Tax time is now stress-free with one-click reports.'
  },
  {
    name: 'David N.',
    location: 'Durban',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a3645c0-1763296944878.png",
    alt: 'Young African man with glasses wearing casual grey shirt in vehicle',
    rating: 5,
    before: 'R 10,800',
    after: 'R 13,200',
    improvement: '+22%',
    quote: 'I thought I knew my costs until Flowly showed me the real numbers. Game changer for my business.'
  }];


  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-4 py-2 mb-4">
            <Icon name="TrophyIcon" size={20} className="text-success" />
            <span className="text-success font-medium">Real Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Why Drivers Love Flowly
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join thousands of SA drivers increasing their monthly earnings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) =>
          <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={benefit.icon as any} size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{benefit.title}</h3>
              <p className="text-text-secondary text-sm mb-4">{benefit.description}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-3xl font-bold text-primary mb-1">{benefit.stat}</p>
                <p className="text-xs text-text-secondary">{benefit.statLabel}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Success Stories from Real Drivers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) =>
            <div key={index} className="bg-gradient-to-br from-white to-surface rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <AppImage
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-16 h-16 rounded-full object-cover" />

                  <div>
                    <p className="font-bold text-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">{testimonial.location}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) =>
                    <Icon key={i} name="StarIcon" size={14} variant="solid" className="text-warning" />
                    )}
                    </div>
                  </div>
                </div>

                <div className="bg-surface rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                      <p className="text-xs text-text-secondary mb-1">Before</p>
                      <p className="text-lg font-bold text-destructive">{testimonial.before}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary mb-1">After</p>
                      <p className="text-lg font-bold text-success">{testimonial.after}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 pt-2 border-t border-border">
                    <Icon name="ArrowTrendingUpIcon" size={16} className="text-success" />
                    <span className="text-xl font-bold text-success">{testimonial.improvement}</span>
                    <span className="text-sm text-text-secondary">improvement</span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm italic">"{testimonial.quote}"</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Increase Your Earnings?
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Join 15,000+ South African drivers already maximizing their profits
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg shadow-conversion hover:bg-white/90 transition-conversion inline-flex items-center space-x-2">
            <Icon name="ArrowDownTrayIcon" size={24} />
            <span>Download Free App Now</span>
          </button>
        </div>
      </div>
    </section>);

};

export default BenefitsSection;