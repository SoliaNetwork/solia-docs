export default function Escrow() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 space-y-16">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent mb-6">
          Escrow Concepts
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Core primitives powering trustless agreements.
        </p>
      </div>

      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">👥 Roles</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                Creator
              </h3>
              <p className="text-gray-300">Initiates escrow and defines settlement conditions.</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></span>
                Depositor
              </h3>
              <p className="text-gray-300">Funds the escrow (can be creator).</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
                Recipient
              </h3>
              <p className="text-gray-300">Receives funds upon confirmation.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-8">📋 Escrow Types</h2>
          <div className="space-y-4">
            <div className="flex items-start p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 border-2 border-purple-500/40 rounded-xl flex items-center justify-center shrink-0 mt-1 mr-4">
                <span className="text-purple-400 font-mono text-sm">P2P</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Private Escrow</h4>
                <p className="text-gray-400 text-sm">Payment links, direct deals</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 bg-green-500/20 border-2 border-green-500/40 rounded-xl flex items-center justify-center shrink-0 mt-1 mr-4">
                <span className="text-green-400 font-mono text-sm">MP</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Marketplace</h4>
                <p className="text-gray-400 text-sm">Platform-integrated trades</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 border-2 border-blue-500/40 rounded-xl flex items-center justify-center shrink-0 mt-1 mr-4">
                <span className="text-blue-400 font-mono text-sm">SVC</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Service</h4>
                <p className="text-gray-400 text-sm">Milestone payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-12">🔄 Lifecycle States</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-6 gap-4 bg-gray-900/50 border border-gray-700 rounded-3xl p-8">
            {['Pending', 'Funded', 'Active', 'Confirmed', 'Disputed', 'Settled'].map((state, i) => (
              <div key={state} className={`p-4 rounded-xl text-center transition-all ${
                i === 2 ? 'bg-emerald-500/20 border-emerald-500/40' : 
                i === 3 ? 'bg-blue-500/20 border-blue-500/40' :
                i === 5 ? 'bg-green-500/20 border-green-500/40' : 
                'bg-gray-800/50 border-gray-700'
              }`}>
                <div className="text-sm font-mono font-semibold text-white">{state}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900/50 to-black/30 border border-gray-700/50 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">💡 Pro Tips</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 bg-gray-800/30">
            <h4 className="font-semibold text-white mb-3">TTL Protection</h4>
            <p className="text-gray-400 text-sm">Set time-to-live to auto-cancel stale escrows.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-700 hover:border-emerald-500/50 bg-gray-800/30">
            <h4 className="font-semibold text-white mb-3">Batch Funding</h4>
            <p className="text-gray-400 text-sm">Multiple escrows from single vault balance.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 bg-gray-800/30">
            <h4 className="font-semibold text-white mb-3">Adapter Chaining</h4>
            <p className="text-gray-400 text-sm">Crypto → Stablecoin → Fiat flows.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
