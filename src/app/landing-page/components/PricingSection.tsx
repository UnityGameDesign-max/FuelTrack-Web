import Icon from '@/src/components/ui/AppIcon';

const PricingSection = () => {
  const freePlanFeatures = [
    'Basic fuel logging with photo receipts',
    'Manual trip tracking',
    'Weekly expense summaries',
    'ZAR currency support',
    'Up to 50 trips per month',
    'Basic analytics dashboard'
  ];

  const premiumFeatures = [
    'Everything in Free, plus:',
    'Automatic GPS trip tracking',
    'Unlimited trips and vehicles',
    'Advanced analytics & insights',
    'Route optimization suggestions',
    'Tax-ready SARS reports',
    'Fuel price alerts',
    'Priority customer support',
    'Export to Excel/PDF',
    'Multi-vehicle management'
  ];

  const enterpriseFeatures = [
    'Everything in Premium, plus:',
    'Fleet management dashboard',
    'Driver performance tracking',
    'Bulk vehicle onboarding',
    'Custom reporting',
    'API access',
    'Dedicated account manager',
    'White-label options',
    'Volume discounts'
  ];

  return (
    <section id="pricing" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="CurrencyDollarIcon" size={20} className="text-primary" />
            <span className="text-primary font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Start free, upgrade when you're ready to maximize earnings
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Free</h3>
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-5xl font-bold text-text-primary">R 0</span>
                <span className="text-text-secondary">/month</span>
              </div>
              <p className="text-text-secondary">Perfect for getting started with basic tracking</p>
            </div>

            <button className="w-full px-6 py-3 bg-surface text-text-primary rounded-lg font-semibold hover:bg-muted transition-conversion mb-6">
              Get Started Free
            </button>

            <div className="space-y-3">
              {freePlanFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="CheckIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 shadow-xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-5xl font-bold text-white">R 49</span>
                <span className="text-white/80">/month</span>
              </div>
              <p className="text-white/90">For serious drivers maximizing profits</p>
            </div>

            <button className="w-full px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-conversion mb-6 shadow-conversion">
              Start 14-Day Free Trial
            </button>

            <div className="space-y-3">
              {premiumFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="CheckIcon" size={20} className="text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/90 text-sm text-center">
                <Icon name="SparklesIcon" size={16} className="inline mr-1" />
                Pays for itself with first month's savings
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Enterprise</h3>
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-5xl font-bold text-text-primary">Custom</span>
              </div>
              <p className="text-text-secondary">For fleet managers and businesses</p>
            </div>

            <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-conversion mb-6">
              Contact Sales
            </button>

            <div className="space-y-3">
              {enterpriseFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="CheckIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Icon name="ShieldCheckIcon" size={32} className="text-success" />
              <div>
                <p className="font-bold text-text-primary">14-Day Money-Back Guarantee</p>
                <p className="text-sm text-text-secondary">Not satisfied? Get a full refund, no questions asked</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="CreditCardIcon" size={32} className="text-primary" />
              <div>
                <p className="font-bold text-text-primary">Secure Payment</p>
                <p className="text-sm text-text-secondary">Bank-level encryption for all transactions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-text-secondary">
            All plans include free updates and customer support.{' '}
            <button className="text-primary font-medium hover:underline">
              Compare plans in detail →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;