import OurMissionSection from '@/components/OurMissionSection';
import AboutUsSection from '@/components/AboutUsSection';
import AboutOurFoundersSection from '@/components/AboutOurFoundersSection';
import Footer from '@/components/Footer';

export default function OurStoryPage() {
  return (
    <main className="min-h-screen our-story-page">
      <OurMissionSection />
      <AboutUsSection />
      <AboutOurFoundersSection />
      <Footer />
    </main>
  );
}
