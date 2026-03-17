export default function Intro() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-20">
      <section className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Welcome to Solia
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Non-custodial escrow infrastructure for the permissionless economy.
        </p>
      </section>

      <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-white mb-8">🎯 The Problem</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-2xl">
              <h3 className="text-xl font-bold text-red-300 mb-3">Centralized Risk</h3>
              <p className="text-gray-300">Traditional platforms custody your funds and can freeze accounts.</p>
            </div>
            <div className="p-6 bg-orange-500/10 border-2 border-orange-500/30 rounded-2xl">
              <h3 className="text-xl font-bold text-orange-300 mb-3">Slow Settlement</h3>
              <p className="text-gray-300">Multi-day fiat rails with intermediaries taking cuts.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-2xl">
              <h3 className="text-xl font-bold text-emerald-300 mb-3">Solia Solution</h3>
              <p className="text-gray-300">Smart contract enforced, instant crypto + real fiat rails.</p>
            </div>
            <div className="p-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl">
              <h3 className="text-xl font-bold text-blue-300 mb-3">Zero Custody</h3>
              <p className="text-gray-300">Funds locked on-chain until conditions are met.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-12">🌍 Why Solia?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-gray-900/50 border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-900/75 transition-all">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Fast</h3>
            <p className="text-gray-400 leading-relaxed">Solana speed + optimized settlement paths.</p>
          </div>
          
          <div className="group p-8 bg-gray-900/50 border border-gray-700 rounded-2xl hover:border-emerald-500/50 hover:bg-gray-900/75 transition-all">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🛡</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Secure</h3>
            <p className="text-gray-400 leading-relaxed">Audited contracts, non-custodial design.</p>
          </div>

          <div className="group p-8 bg-gray-900/50 border border-gray-700 rounded-2xl hover:border-purple-500/50 hover:bg-gray-900/75 transition-all">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔌</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Composable</h3>
            <p className="text-gray-400 leading-relaxed">API-first, integrates anywhere.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-2xl border-2 border-blue-500/50 backdrop-blur-sm hover:from-blue-600 hover:to-indigo-600 hover:border-blue-400 transition-all shadow-2xl">
          <Link href="/api" className="block">
            Start Building →
          </Link>
        </div>
      </section>
    </div>
  )
}
