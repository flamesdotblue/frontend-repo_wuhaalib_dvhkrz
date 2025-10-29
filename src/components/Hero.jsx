import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Play } from 'lucide-react';

function useCounter(target, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

function GridOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(14,165,233,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px, 40px 40px',
        backgroundPosition: '0 0, 0 0',
      }}
    />
  );
}

export default function Hero() {
  const capital = useCounter(25000000, 2000); // ₹2.5 Cr shown as 25,000,000 paise-like units
  const trades = useCounter(15000, 2000);
  const win = useCounter(87, 2000);

  const formatINR = (n) => new Intl.NumberFormat('en-IN').format(n);

  return (
    <section id="home" className="relative min-h-[88vh] pt-16 overflow-hidden bg-[#0a0e27]">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <GridOverlay />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0e27]/10 via-[#0a0e27]/50 to-[#0a0e27]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-20">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              AI-Powered Trading, Simplified
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              Let ZODIC's advanced AI algorithms trade for you 24/7. Maximize returns with intelligent automation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center rounded-md bg-cyan-500/90 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_#00d4ff66] hover:bg-cyan-400 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Play size={16} /> Watch Demo
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                <div className="text-sm text-gray-400">Capital Managed</div>
                <div className="mt-1 text-2xl font-bold text-white">₹{formatINR(25000000)}</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                <div className="text-sm text-gray-400">Trades</div>
                <div className="mt-1 text-2xl font-bold text-white">{formatINR(trades)}+</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                <div className="text-sm text-gray-400">Win Rate</div>
                <div className="mt-1 text-2xl font-bold text-emerald-400">{win}%</div>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 max-w-md w-full shadow-[0_0_60px_#00d4ff22]">
              <div className="text-sm text-cyan-200 mb-2">Live Ticker</div>
              <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0d1117]">
                <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap text-sm text-gray-300 p-3">
                  <span className="mx-6">RELIANCE 0.9% ▲</span>
                  <span className="mx-6">TCS 1.2% ▲</span>
                  <span className="mx-6">INFY 0.4% ▼</span>
                  <span className="mx-6">HDFCBANK 0.7% ▲</span>
                  <span className="mx-6">ICICIBANK 0.3% ▲</span>
                  <span className="mx-6">SBIN 1.0% ▼</span>
                  <span className="mx-6">ADANIENT 1.5% ▲</span>
                </div>
              </div>
              <style>{`
                @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%);} }
              `}</style>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-gray-400">System Health</div>
                  <div className="mt-1 text-lg font-semibold text-emerald-400">98.7%</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-gray-400">Trades Today</div>
                  <div className="mt-1 text-lg font-semibold text-white">1,234</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-gray-400">Active Users</div>
                  <div className="mt-1 text-lg font-semibold text-white">847</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-gray-400">Avg Return</div>
                  <div className="mt-1 text-lg font-semibold text-emerald-400">+5.8%</div>
                </div>
              </div>
              <p className="mt-6 text-xs text-gray-400">
                Trading involves risk. Past performance doesn't guarantee future results. Terms apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
