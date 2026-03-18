import Link from 'next/link'

export default function Intro() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-24 space-y-14">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/65 p-8 md:p-12">
        <h1 className="text-4xl font-semibold text-white md:text-6xl">Welcome to Solia</h1>
        <p className="mt-4 max-w-3xl text-slate-300 md:text-lg">
          Solia is non-custodial escrow infrastructure for trust-minimized payments and programmable settlement.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-rose-400/30 bg-rose-400/10 p-6">
          <h2 className="text-xl font-semibold text-rose-100">Centralized Risk</h2>
          <p className="mt-3 text-slate-200">Traditional platforms custody funds and can freeze user accounts.</p>
        </article>
        <article className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6">
          <h2 className="text-xl font-semibold text-amber-100">Slow Settlement</h2>
          <p className="mt-3 text-slate-200">Legacy payout paths introduce delays and opaque intermediary fees.</p>
        </article>
        <article className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <h2 className="text-xl font-semibold text-emerald-100">Smart Contract Enforcement</h2>
          <p className="mt-3 text-slate-200">Agreements execute through verifiable on-chain state transitions.</p>
        </article>
        <article className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <h2 className="text-xl font-semibold text-cyan-100">Zero Custody</h2>
          <p className="mt-3 text-slate-200">Funds remain program-controlled until predefined conditions are met.</p>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8">
        <h2 className="text-2xl font-semibold text-white">Why Solia</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
            <h3 className="text-lg font-medium text-white">Fast</h3>
            <p className="mt-2 text-slate-300">High-throughput chain performance with predictable confirmations.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
            <h3 className="text-lg font-medium text-white">Secure</h3>
            <p className="mt-2 text-slate-300">Non-custodial primitives and explicit dispute paths.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
            <h3 className="text-lg font-medium text-white">Composable</h3>
            <p className="mt-2 text-slate-300">API-first architecture that fits marketplaces and apps.</p>
          </div>
        </div>
      </section>

      <section>
        <Link
          href="/api"
          className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-400/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-100 transition hover:bg-cyan-400/25"
        >
          Start Building
        </Link>
      </section>
    </div>
  )
}
