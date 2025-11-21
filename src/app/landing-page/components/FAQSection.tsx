'use client';

import { useState, useEffect } from 'react';
import Icon from '@/src/components/ui/AppIcon';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQ[] = [
    {
      question: 'Is my financial data secure with FuelSense?',
      answer: 'Yes, absolutely. We use bank-level 256-bit encryption for all data transmission and storage. Your information is never shared with third parties, and we comply with South African POPIA regulations. All payment processing is handled through secure, PCI-compliant payment gateways.'
    },
    {
      question: 'How does FuelSense track my trips automatically?',
      answer: 'FuelSense uses GPS technology to detect when you start and end trips. The app runs efficiently in the background and only activates during driving. You can also manually log trips if you prefer. All trip data is correlated with your fuel purchases to calculate accurate cost-per-kilometer.'
    },
    {
      question: 'Will FuelSense drain my phone battery?',
      answer: 'No. FuelSense is optimized for minimal battery usage, consuming less than 2% of battery per day on average. We use efficient GPS tracking that only activates during trips, and the app intelligently manages background processes to preserve battery life.'
    },
    {
      question: 'Can I use FuelSense for tax deductions?',
      answer: 'Yes! FuelSense generates SARS-compliant expense reports that you can use for tax purposes. The app tracks all fuel purchases, mileage, and business-related expenses with proper documentation. You can export detailed reports in PDF or Excel format for your accountant.'
    },
    {
      question: 'Does FuelSense work with both Uber and Bolt?',
      answer: 'Yes, FuelSense integrates with both Uber and Bolt driver accounts. You can connect multiple platforms and the app will automatically import trip data, making it easy to track expenses across all your ride-hailing activities.'
    },
    {
      question: 'What if I drive multiple vehicles?',
      answer: 'Premium and Enterprise plans support unlimited vehicles. You can track fuel efficiency, expenses, and trips separately for each vehicle. This is perfect for drivers who own multiple cars or manage a small fleet.'
    },
    {
      question: 'How accurate is the fuel cost tracking?',
      answer: 'FuelSense is accurate to within 1% of actual costs. We use photo receipt scanning with OCR technology to extract exact fuel prices, liters purchased, and fuel types. Combined with GPS trip data, we calculate precise cost-per-kilometer for every journey.'
    },
    {
      question: 'Can I try Premium features before paying?',
      answer: 'Yes! We offer a 14-day free trial of Premium features with no credit card required. You can explore all advanced features including automatic tracking, analytics, and tax reports before deciding to upgrade.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data remains accessible for 90 days after cancellation. You can export all your records during this period. After 90 days, data is permanently deleted from our servers. You can reactivate your account anytime within the 90-day window.'
    },
    {
      question: 'Does FuelSense work offline?',
      answer: 'Yes, partially. You can log fuel purchases and trips offline, and the data will sync automatically when you reconnect to the internet. However, features like live fuel prices and route optimization require an internet connection.'
    }
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const filteredFAQs = isHydrated
    ? faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  if (!isHydrated) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="QuestionMarkCircleIcon" size={20} className="text-primary" />
            <span className="text-primary font-medium">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to know about FuelSense
          </p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors"
              >
                <span className="font-semibold text-text-primary pr-4">{faq.question}</span>
                <Icon
                  name="ChevronDownIcon"
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <Icon name="MagnifyingGlassIcon" size={48} className="text-text-secondary mx-auto mb-4" />
            <p className="text-text-secondary">No questions found matching your search.</p>
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-2">Still have questions?</h3>
          <p className="text-text-secondary mb-6">
            Our support team is here to help you get started
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-conversion inline-flex items-center justify-center space-x-2">
              <Icon name="ChatBubbleLeftRightIcon" size={20} />
              <span>Live Chat Support</span>
            </button>
            <button className="px-6 py-3 bg-white text-text-primary rounded-lg font-semibold border-2 border-border hover:bg-surface transition-conversion inline-flex items-center justify-center space-x-2">
              <Icon name="EnvelopeIcon" size={20} />
              <span>Email Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;