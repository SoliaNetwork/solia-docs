import Link from 'next/link'
import CodeBlock from '../components/CodeBlock'

const quickLinks = [
  {
    href: '/intro',
    title: 'Intro',
    description: 'Protocol overview and positioning',
  },
  {
    href: '/escrow',
    title: 'Escrow Concepts',
    description: 'Lifecycle, roles, and settlement paths',
  },
  {
    href: '/api',
    title: 'API Reference',
    description: 'Create, confirm, and monitor escrows',
  },
  {
    href: '/architecture',
    title: 'Architecture',
    description: 'System blueprint and integration model',
  },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 space-y-20">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/65 p-8 md:p-12 backdrop-blur-sm">
        <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          Solia Protocol Docs
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          Non-custodial escrow and settlement infrastructure for global payments.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          Solia enables developers and platforms to build trustless escrow flows with stablecoins and
          optional local payout settlement through pluggable adapters.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">What Is Solia?</h2>
          <p className="mb-5 text-slate-300">
            Solia is a protocol and backend engine for programmable escrow agreements.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>P2P trade settlement</li>
            <li>Freelance and service escrow</li>
            <li>Escrow-native payment links</li>
            <li>Cross-border digital-to-local payout flows</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">How It Works</h2>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-cyan-200/90">
            User -&gt; Escrow Creation -&gt; Funds Locked -&gt; Conditions Met -&gt; Settlement
          </p>
          <ol className="mt-6 space-y-3 text-slate-300">
            <li>1. Creator initializes an escrow via API.</li>
            <li>2. Funds lock in an on-chain program vault.</li>
            <li>3. Counterparty fulfills agreement terms.</li>
            <li>4. Parties confirm or enter dispute path.</li>
            <li>5. Settlement is routed to the selected destination.</li>
          </ol>
        </article>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-white">Quick Start</h2>
        <div className="space-y-3">
          <CodeBlock language="http">{`POST /v1/escrow/create`}</CodeBlock>
          <CodeBlock language="json">{`{
  "amount": 100,
  "token": "USDC",
  "recipient": "wallet_address",
  "settlement": {
    "type": "LOCAL_PAYOUT",
    "currency": "GBP"
  }
}`}</CodeBlock>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-white">Documentation Sections</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-cyan-400/35 hover:bg-slate-900"
            >
              <h3 className="text-xl font-medium text-white transition group-hover:text-cyan-200">{link.title}</h3>
              <p className="mt-2 text-slate-400">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
