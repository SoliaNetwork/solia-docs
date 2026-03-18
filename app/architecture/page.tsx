import CodeBlock from '../../components/CodeBlock'

const layers = [
  {
    title: 'Client Layer',
    subtitle: 'Web / Mobile / SDK',
    points: ['Escrow creation requests', 'User confirmation actions', 'State visibility'],
  },
  {
    title: 'Solia API Layer',
    subtitle: 'api.solia.network',
    points: ['Validation and orchestration', 'Escrow lifecycle endpoints', 'Adapter routing policy'],
  },
  {
    title: 'Solana Program Layer',
    subtitle: 'solia_escrow',
    points: ['Vault-based fund locking', 'State transitions and disputes', 'Deterministic event emission'],
  },
  {
    title: 'Event Listener Layer',
    subtitle: 'Indexer / Worker',
    points: ['Program event consumption', 'Backend state synchronization', 'Settlement trigger dispatch'],
  },
  {
    title: 'Adapter Layer',
    subtitle: 'Provider-agnostic connectors',
    points: ['Local payout connector', 'Digital asset settlement connector', 'Future provider plug-ins'],
  },
  {
    title: 'External Rails',
    subtitle: 'Settlement destinations',
    points: ['Bank payout channels', 'Regional transfer networks', 'Digital asset rails'],
  },
]

export default function Architecture() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 space-y-14">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/65 p-8 md:p-12">
        <p className="mb-4 inline-flex rounded-full border border-emerald-300/35 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
          System Blueprint
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-6xl">Architecture</h1>
        <p className="mt-5 max-w-3xl text-slate-300 md:text-lg">
          Solia separates on-chain escrow enforcement from off-chain settlement execution, enabling
          secure agreements with flexible payout routing.
        </p>
      </header>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 md:p-10">
        <h2 className="mb-8 text-2xl font-semibold text-white">System Architecture</h2>
        <div className="relative mx-auto max-w-3xl space-y-6">
          <div className="pointer-events-none absolute left-1/2 top-5 h-[calc(100%-2.5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/50 via-cyan-300/25 to-transparent" />
          {layers.map((layer) => (
            <article
              key={layer.title}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-5 md:p-6"
            >
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/40 bg-cyan-300/50" />
              <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-cyan-200/80">{layer.subtitle}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300 md:text-base">
                {layer.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/55 p-7">
          <h2 className="mb-4 text-2xl font-semibold text-white">Core Program Instructions</h2>
          <CodeBlock language="rust">
{`create_private_escrow
fund_private_escrow
confirm_private_escrow
cancel_private_escrow
dispute_private_escrow
resolve_private_escrow`}
          </CodeBlock>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/55 p-7">
          <h2 className="mb-4 text-2xl font-semibold text-white">Deployment Profile</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-200">Mainnet</p>
              <p className="mt-1 text-sm text-slate-200">Production escrow settlement.</p>
            </div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-200">Devnet</p>
              <p className="mt-1 text-sm text-slate-200">Integration and lifecycle testing.</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
