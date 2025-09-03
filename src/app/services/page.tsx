import ServicesHero from '@/components/ServicesHero';
import WhatWeAuthenticateSection from '@/components/WhatWeAuthenticateSection';
import AdditionalServicesSection from '@/components/AdditionalServicesSection';
import EnterpriseAuthenticationSection from '@/components/EnterpriseAuthenticationSection';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <WhatWeAuthenticateSection />
      <AdditionalServicesSection />
      <EnterpriseAuthenticationSection />
      <Footer />
    </main>
  );
}
