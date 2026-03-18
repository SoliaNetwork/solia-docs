const states = ['Pending', 'Funded', 'Active', 'Confirmed', 'Disputed', 'Settled']

export default function Escrow() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-24 space-y-14">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/65 p-8 md:p-12">
        <h1 className="text-4xl font-semibold text-white md:text-6xl">Escrow Concepts</h1>
        <p className="mt-4 max-w-2xl text-slate-300 md:text-lg">
          Core primitives for building trustless agreements with deterministic settlement paths.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/55 p-7">
          <h2 className="mb-5 text-2xl font-semibold text-white">Roles</h2>
          <div className="space-y-4 text-slate-300">
            <p><span className="font-semibold text-white">Creator:</span> Initiates escrow and defines release conditions.</p>
            <p><span className="font-semibold text-white">Depositor:</span> Funds the escrow vault.</p>
            <p><span className="font-semibold text-white">Recipient:</span> Receives payout after confirmation or resolution.</p>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/55 p-7">
          <h2 className="mb-5 text-2xl font-semibold text-white">Escrow Types</h2>
          <div className="space-y-4 text-slate-300">
            <p><span className="font-semibold text-white">Private:</span> Direct payment links and one-off agreements.</p>
            <p><span className="font-semibold text-white">Marketplace:</span> Multi-party platform transactions.</p>
            <p><span className="font-semibold text-white">Service:</span> Milestone-based delivery and release.</p>
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8">
        <h2 className="mb-6 text-2xl font-semibold text-white">Lifecycle States</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {states.map((state) => (
            <div key={state} className="rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-center text-sm font-medium text-slate-200">
              {state}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8">
        <h2 className="mb-5 text-2xl font-semibold text-white">Settlement Types</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-5">
            <h3 className="text-lg font-medium text-emerald-100">Crypto Settlement</h3>
            <p className="mt-2 text-slate-200">Direct on-chain transfer to recipient wallet.</p>
          </div>
          <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-5">
            <h3 className="text-lg font-medium text-cyan-100">Local Payout Settlement</h3>
            <p className="mt-2 text-slate-200">Adapter-routed transfer into regional payout rails.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
