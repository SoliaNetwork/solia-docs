import CodeBlock from '../../components/CodeBlock'

export default function API() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-24 space-y-14">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/65 p-8 md:p-12">
        <h1 className="text-4xl font-semibold text-white md:text-6xl">API Reference</h1>
        <p className="mt-4 max-w-2xl text-slate-300 md:text-lg">
          REST endpoints for escrow creation, confirmation, and settlement status.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/55 p-8">
        <h2 className="mb-5 text-2xl font-semibold text-white">Create Escrow</h2>
        <CodeBlock language="http">{`POST /v1/escrow/create`}</CodeBlock>
        <CodeBlock language="json">{`{
  "amount": 100,
  "token": "USDC",
  "recipient": "wallet_address",
  "creator": "wallet_address",
  "settlement": {
    "type": "LOCAL_PAYOUT",
    "currency": "GBP"
  },
  "ttl": 86400
}`}</CodeBlock>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/55 p-8">
        <h2 className="mb-5 text-2xl font-semibold text-white">Confirm Escrow</h2>
        <CodeBlock language="http">{`POST /v1/escrow/:id/confirm`}</CodeBlock>
        <CodeBlock language="json">{`{
  "signature": "base58_signature"
}`}</CodeBlock>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/55 p-8">
        <h2 className="mb-5 text-2xl font-semibold text-white">Response Format</h2>
        <CodeBlock language="json">{`{
  "escrow_id": "abc123",
  "status": "active",
  "amount": 100,
  "token": "USDC",
  "creator": "wallet_1",
  "recipient": "wallet_2",
  "program_id": "Escrow9...",
  "instructions": ["fund", "confirm", "settle"]
}`}</CodeBlock>
      </section>
    </div>
  )
}
