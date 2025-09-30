import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PillarCards from '@/components/PillarCards';
import ValueProposition from '@/components/ValueProposition';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Proof from '@/components/Proof';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PillarCards />
      <ValueProposition />
      <HowItWorks />
      <Features />
      <Proof />
      <CTA />
      <Footer />
    </main>
  );
}