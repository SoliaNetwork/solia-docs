export default function API() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 space-y-16">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent mb-6">
          API Reference
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Simple REST API for escrow lifecycle management.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
          Create Escrow
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <CodeBlock language="bash">
POST /v1/escrow/create
            </CodeBlock>
            <CodeBlock language="json">
{
  "amount": 100,
  "token": "USDC",
  "recipient": "wallet_address",
  "creator": "wallet_address", 
  "settlement": {
    "type": "FIAT",
    "currency": "GBP",
    "adapter": "wise"
  },
  "ttl": 86400
}
            </CodeBlock>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>Creates a new private escrow with programmable settlement.</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="font-mono text-gray-400">amount</span><br/><span className="text-xs text-gray-500">number</span></div>
              <div><span className="font-mono text-gray-400">token</span><br/><span className="text-xs text-gray-500">USDC/USDT</span></div>
              <div><span className="font-mono text-gray-400">ttl</span><br/><span className="text-xs text-gray-500">seconds</span></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
          Confirm Escrow
        </h2>
        <CodeBlock language="bash">
POST /v1/escrow/:id/confirm
        </CodeBlock>
        <CodeBlock language="json">
{
  "signature": "base58_signature"
}
        </CodeBlock>
      </section>

      <section className="bg-gray-900/50 border border-gray-700 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">📋 Response Format</h2>
        <CodeBlock language="json">
{
  "escrow_id": "abc123",
  "status": "active",
  "amount": 100,
  "token": "USDC",
  "creator": "ETH1...",
  "recipient": "ETH2...",
  "program_id": "Escrow9...",
  "instructions": [
    "fund",
    "confirm", 
    "settle"
  ]
}
        </CodeBlock>
      </section>
    </div>
  )
}
