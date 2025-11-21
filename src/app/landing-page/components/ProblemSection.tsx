'use client';

import { useState, useEffect } from 'react';
import Icon from '@/src/components/ui/AppIcon';

const ProblemSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [weeklyKm, setWeeklyKm] = useState(500);
  const [fuelPrice, setFuelPrice] = useState(18.95);
  const [monthlyExpense, setMonthlyExpense] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      const avgConsumption = 8;
      const monthly = (weeklyKm * 4 * avgConsumption * fuelPrice) / 100;
      setMonthlyExpense(monthly);
    }
  }, [weeklyKm, fuelPrice, isHydrated]);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Fuel Costs Are Eating Your Profits
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Without accurate tracking, you're losing money on every trip
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="problem" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-destructive/10 rounded-full px-4 py-2 mb-4">
            <Icon name="ExclamationTriangleIcon" size={20} className="text-destructive" />
            <span className="text-destructive font-medium">The Hidden Cost Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Fuel Costs Are Eating Your Profits
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Without accurate tracking, you're losing money on every trip
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Calculate Your Monthly Fuel Expense
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Weekly Kilometers: {weeklyKm} km
              </label>
              <input
                type="range"
                min="200"
                max="1000"
                step="50"
                value={weeklyKm}
                onChange={(e) => setWeeklyKm(Number(e?.target?.value))}
                className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Current Fuel Price: R {fuelPrice?.toFixed(2)}/L
              </label>
              <input
                type="range"
                min="15"
                max="25"
                step="0.05"
                value={fuelPrice}
                onChange={(e) => setFuelPrice(Number(e?.target?.value))}
                className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="bg-destructive/10 rounded-xl p-6 text-center">
              <p className="text-sm text-text-secondary mb-2">Your Estimated Monthly Fuel Cost</p>
              <p className="text-5xl font-bold text-destructive mb-2">
                R {monthlyExpense?.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-text-secondary">
                That's {((monthlyExpense / 4) / 7)?.toFixed(0)} trips just to cover fuel!
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="CalculatorIcon" size={24} className="text-destructive" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">Guessing Expenses</h3>
            <p className="text-text-secondary">
              Without tracking, you're estimating costs and missing deductions worth thousands
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="ChartBarIcon" size={24} className="text-destructive" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">No Trip Insights</h3>
            <p className="text-text-secondary">
              Can't identify which routes or times are actually profitable for your driving
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="DocumentTextIcon" size={24} className="text-destructive" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">Tax Headaches</h3>
            <p className="text-secondary">
              Missing receipts and poor records mean paying more tax than necessary
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;