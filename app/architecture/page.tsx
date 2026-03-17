import CodeBlock from '../../components/CodeBlock'

export default function Architecture() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 space-y-16">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
          Architecture
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Solia separates on-chain escrow logic from off-chain settlement adapters, 
          enabling flexible integration with fiat providers.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-white mb-12">🏗️ System Architecture</h2>
        <div className="bg-gray-900/80 border border-gray-700 rounded-3xl p-8 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-200 whitespace-pre-wrap">
┌──────────────────────────┐
│      Client Layer        │ Flutter / Web / SDK
│                          │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│     Solia API Layer      │ api.solia.network
│                          │
│ • Escrow creation        │
│ • State sync             │
│ • Adapter routing        │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│   Solana Smart Contract  │ solia_escrow
│                          │
│ • Funds locking (vaults) │
│ • State transitions      │
│ • Dispute logic          │
│ • Event emission         │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│    Event Listener Layer  │
│                          │
│ • Reads program events   │
│ • Syncs backend state    │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│     Adapter Layer        │
│                          │
│ • Wise Adapter           │
│ • Bridge Adapter         │
│ • Future providers       │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│  External Payment Rails  │
│                          │
│ • Bank transfers (GBP)   │
│ • EUR payouts            │
│ • Crypto off-ramps       │
└──────────────────────────┘
          </pre>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">🧠 Smart Contract Layer</h3>
            <p className="text-gray-300 leading-relaxed">
              <code className="bg-gray-800 px-2 py-1 rounded font-mono text-sm">solia_escrow</code> program deployed on Solana mainnet.
            </p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• PDA-based vaults for fund isolation</li>
              <li>• Account-based state management</li>
              <li>• CPI integration with token program</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">🔌 Adapter Layer</h3>
            <p className="text-gray-300 leading-relaxed">
              Pluggable off-chain adapters for fiat settlement:
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <span className="font-mono text-sm text-blue-400 block mb-1">Wise</span>
                <span className="text-xs text-gray-500">Bank payouts</span>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <span className="font-mono text-sm text-green-400 block mb-1">Bridge</span>
                <span className="text-xs text-gray-500">Crypto→fiat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">⚙️ Core Instructions</h3>
            <CodeBlock language="rust">
create_private_escrow
fund_private_escrow  
confirm_private_escrow
cancel_private_escrow
dispute_private_escrow
resolve_private_escrow
            </CodeBlock>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">🌐 Network</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl">
                <div className="font-mono text-sm text-indigo-400 mb-1">Mainnet</div>
                <div className="text-xs text-gray-500">Production</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl">
                <div className="font-mono text-sm text-emerald-400 mb-1">Devnet</div>
                <div className="text-xs text-gray-500">Testing</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
