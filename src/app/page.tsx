import HeroSection from '@/components/HeroSection';
import TrustabilitySection from '@/components/TrustabilitySection';
import WhatWeAuthenticateSection from '@/components/WhatWeAuthenticateSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustabilitySection />
      <WhatWeAuthenticateSection />
      <AboutSection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
