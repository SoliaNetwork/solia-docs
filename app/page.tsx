import Link from 'next/link'
import CodeBlock from '../components/CodeBlock'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 space-y-20">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent mb-6">
          Solia Documentation
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Non-custodial escrow and settlement infrastructure for global payments.
        </p>
        <p className="text-lg text-gray-400 mt-4 max-w-xl mx-auto">
          Solia enables developers, platforms, and individuals to create trustless escrow flows using stablecoins, 
          with optional fiat settlement through adapter integrations.
        </p>
      </section>

      {/* What is Solia */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">🚀 What is Solia?</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Solia is a protocol + backend engine that powers trustless escrow flows for:
          </p>
          <ul className="space-y-3 text-lg text-gray-300">
            <li>• P2P trade settlement</li>
            <li>• Freelance and service escrow</li>
            <li>• Payment links (escrow-native)</li>
            <li>• Cross-border stablecoin → fiat payouts</li>
          </ul>
          <p className="mt-6 text-gray-400">
            Unlike traditional platforms, Solia never custodies funds and enforces agreements via Solana smart contracts.
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700">
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full">
              <span className="text-sm font-medium text-blue-300">Key Benefits</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>Non-custodial</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>Programmable settlement</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>Fiat + crypto rails</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section>
        <h2 className="text-4xl font-bold text-white mb-12 text-center">⚙️ How It Works</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6 uppercase tracking-wider font-mono">
              <span>Creator</span>
              <svg className="w-20 h-px bg-gray-600" />
              <span>Escrow</span>
              <svg className="w-20 h-px bg-gray-600" />
              <span>Settlement</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-blue-500/20 border-2 border-blue-500/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Create Escrow</h3>
              </div>
              <div>
                <div className="w-20 h-20 bg-purple-500/20 border-2 border-purple-500/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Funds Locked</h3>
              </div>
              <div>
                <div className="w-20 h-20 bg-green-500/20 border-2 border-green-500/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Settlement</h3>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Core Flow</h3>
              <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                <li>Creator generates escrow via API</li>
                <li>Funds locked in Solana smart contract vault</li>
                <li>Counterparty fulfills agreement</li>
                <li>Both parties confirm OR dispute</li>
                <li>Funds released (crypto/fiat)</li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Settlement Types</h3>
              <div className="space-y-3">
                <div className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span>Crypto → on-chain transfer</span>
                </div>
                <div className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span>Fiat → Wise/Bridge adapters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-white mb-12">🔗 Quick Links</h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <Link href="/intro" className="group p-8 bg-gray-800/50 border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gray-800/75 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400">Intro</h3>
            <p className="text-gray-400 group-hover:text-gray-300">Get started</p>
          </Link>
          <Link href="/escrow" className="group p-8 bg-gray-800/50 border border-gray-700 rounded-2xl hover:border-purple-500/50 hover:bg-gray-800/75 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400">Escrow</h3>
            <p className="text-gray-400 group-hover:text-gray-300">Concepts</p>
          </Link>
          <Link href="/api" className="group p-8 bg-gray-800/50 border border-gray-700 rounded-2xl hover:border-green-500/50 hover:bg-gray-800/75 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400">API</h3>
            <p className="text-gray-400 group-hover:text-gray-300">Reference</p>
          </Link>
          <Link href="/architecture" className="group p-8 bg-gray-800/50 border border-gray-700 rounded-2xl hover:border-indigo-500/50 hover:bg-gray-800/75 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400">Architecture</h3>
            <p className="text-gray-400 group-hover:text-gray-300">Diagram</p>
          </Link>
          <Link href="https://github.com/solianetwork/solia-docs" className="group p-8 bg-gray-800/50 border border-gray-700 rounded-2xl hover:border-gray-500/50 hover:bg-gray-800/75 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300">GitHub</h3>
            <p className="text-gray-400 group-hover:text-gray-300">Source</p>
          </Link>
        </div>
      </section>

      {/* Quick Start API */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">🚀 Quick Start</h2>
        <div className="max-w-3xl mx-auto">
          <CodeBlock language="bash">
POST /v1/escrow/create
          </CodeBlock>
          <CodeBlock language="json">
{
  "amount": 100,
  "token": "USDC",
  "recipient": "wallet_address",
  "settlement": {
    "type": "FIAT",
    "currency": "GBP"
  }
}
          </CodeBlock>
        </div>
      </section>
    </div>
  )
}
