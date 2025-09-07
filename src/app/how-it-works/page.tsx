import HowItWorksHero from '@/components/HowItWorksHero';
import HowItWorksSection from '@/components/HowItWorksSection';
import CertificateSection from '@/components/CertificateSection';
import Footer from '@/components/Footer';

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <HowItWorksHero />
      <HowItWorksSection />
      <CertificateSection />
      <Footer />
    </main>
  );
}
