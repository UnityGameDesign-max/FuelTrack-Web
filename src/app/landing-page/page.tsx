import type { Metadata } from 'next';
import LandingPageInteractive from './components/LandingPageInteractive';

export const metadata: Metadata = {
  title: 'FuelSense - Track Your Fuel, Maximize Your Earnings | SA Ride-Hailing Drivers',
  description: 'The only fuel tracking app designed for South African Uber and Bolt drivers. Automatically track expenses, optimize routes, and increase profits by 23%. Join 15,000+ SA drivers saving R2,847 monthly.',
};

export default function LandingPage() {
  return <LandingPageInteractive />;
}