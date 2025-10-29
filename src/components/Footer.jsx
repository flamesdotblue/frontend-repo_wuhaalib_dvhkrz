export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0e27] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_#00d4ff66]"></div>
              <span className="text-white font-semibold tracking-wide">ZODIC</span>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-sm">
              AI-driven trading platform designed to help you trade smarter with automation, risk control, and performance analytics.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Disclaimer</a></li>
              <li><a href="#" className="hover:text-white">Risk Disclosure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Newsletter</h4>
            <p className="mt-4 text-sm text-gray-400">Get product updates and market insights.</p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="you@example.com"
                className="flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
              <button className="rounded-md bg-cyan-500/90 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-400 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 text-xs text-gray-400">
          <p>
            Trading involves risk. Past performance doesn't guarantee future results. SEBI registration disclaimer. Terms and conditions apply.
          </p>
          <p className="mt-2">© 2025 ZODIC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
