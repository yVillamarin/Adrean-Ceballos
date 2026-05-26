
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import CorporateImagePackages from './components/CorporateImagePackages';
import PricingPlans from './components/PricingPlans';
import Methodology from './components/Methodology';
import PricingAndBonus from './components/PricingAndBonus';

export default function App() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <Services />
        <AboutMe />
        <CorporateImagePackages />
        <PricingPlans />
        <Methodology />
        <PricingAndBonus />
      </main>
    </div>
  );
}
