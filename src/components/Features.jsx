import { Brain, Rocket, Shield, Eye, LineChart, Link } from 'lucide-react';

const items = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    desc: 'Advanced machine learning analyzes 50+ technical indicators in real-time.',
  },
  {
    icon: Rocket,
    title: 'Automated Execution',
    desc: 'Instant order placement with smart entry, exit, and stop-loss management.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    desc: 'Dynamic position sizing with 2-3% max risk per trade and GTT protection.',
  },
  {
    icon: Eye,
    title: '24/7 Monitoring',
    desc: 'Continuous market scanning during trading hours with instant alerts.',
  },
  {
    icon: LineChart,
    title: 'Portfolio Tracking',
    desc: 'Real-time P&L tracking with detailed performance analytics.',
  },
  {
    icon: Link,
    title: 'Multi-Broker Support',
    desc: 'Seamless integration with Zerodha, Upstox, and Angel Broking.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0a0e27] py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
        backgroundImage:
          'linear-gradient(rgba(14,165,233,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px, 40px 40px',
        backgroundPosition: '0 0, 0 0',
      }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Engineered for Performance</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">A carefully crafted toolkit to trade smarter, faster, and safer.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,212,255,0.25)]"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 to-blue-600/10 pointer-events-none" />
              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="relative mt-3 text-gray-300 text-sm leading-6">{desc}</p>
              <div className="relative mt-4 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              <div className="relative mt-4 text-xs text-cyan-300/80">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
