import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Placeholder sections for anchors */}
        <section id="technology" className="bg-[#0a0e27] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold">Powered by Advanced AI</h2>
            <p className="mt-3 text-gray-400 max-w-2xl">Smart models, technical indicators, and a scoring system designed to capture high-probability moves.</p>
          </div>
        </section>
        <section id="pricing" className="bg-[#0a0e27] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold">Pricing</h2>
            <p className="mt-3 text-gray-400">Starter (Free), Professional (₹999/mo), Premium (₹2,499/mo). Choose what suits you—upgrade anytime.</p>
          </div>
        </section>
        <section id="about" className="bg-[#0a0e27] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold">About ZODIC</h2>
            <p className="mt-3 text-gray-400 max-w-3xl">ZODIC is an AI-powered trading platform focused on automation, risk management, and performance analytics to help you trade confidently.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
