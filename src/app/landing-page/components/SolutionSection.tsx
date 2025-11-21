
import Icon from '@/src/components/ui/AppIcon';

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-4 py-2 mb-4">
            <Icon name="CheckCircleIcon" size={20} className="text-success" />
            <span className="text-success font-medium">The Complete Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Flowly: Your Profit Optimization Partner
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Automated expense tracking designed specifically for South African ride-hailing drivers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Traditional Expense Tracking
            </h3>
            <div className="bg-surface rounded-xl p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="XCircleIcon" size={24} className="text-destructive flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-text-primary">Manual receipt collection</p>
                  <p className="text-sm text-text-secondary">Lost receipts, missing data, hours of paperwork</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="XCircleIcon" size={24} className="text-destructive flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-text-primary">Spreadsheet chaos</p>
                  <p className="text-sm text-text-secondary">Complex formulas, data entry errors, no insights</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="XCircleIcon" size={24} className="text-destructive flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-text-primary">Guessing profitability</p>
                  <p className="text-sm text-text-secondary">No idea which trips actually make money</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="XCircleIcon" size={24} className="text-destructive flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-text-primary">Tax time stress</p>
                  <p className="text-sm text-text-secondary">Scrambling for records, missing deductions</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Flowly Automated Tracking
            </h3>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 space-y-4 border-2 border-primary/20">
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-1" variant="solid" />
                <div>
                  <p className="font-medium text-text-primary">Photo receipt capture</p>
                  <p className="text-sm text-text-secondary">Snap and forget - automatic data extraction in ZAR</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-1" variant="solid" />
                <div>
                  <p className="font-medium text-text-primary">GPS trip correlation</p>
                  <p className="text-sm text-text-secondary">Automatic matching of fuel stops to trips driven</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-1" variant="solid" />
                <div>
                  <p className="font-medium text-text-primary">Real-time cost analysis</p>
                  <p className="text-sm text-text-secondary">Know your cost-per-kilometer and profit per trip instantly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-1" variant="solid" />
                <div>
                  <p className="font-medium text-text-primary">Tax-ready reports</p>
                  <p className="text-sm text-text-secondary">One-click export for SARS compliance and deductions</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-success/10 rounded-xl p-4 flex items-center space-x-3">
              <Icon name="SparklesIcon" size={32} className="text-success" variant="solid" />
              <div>
                <p className="font-bold text-text-primary">Average Result</p>
                <p className="text-sm text-text-secondary">Drivers save R2,847/month and increase profits by 23%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;