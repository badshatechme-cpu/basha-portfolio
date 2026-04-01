import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-slate-950 px-6 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center py-24">
        <div className="max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Enterprise & Cloud Architecture | Digital Banking | Azure Solution Architect | Microservices, APIs, Event-Driven & Integration | AI, MLOps & NLP for Financial Services | UAE/GCC
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            MOHAMMAD IBRAHIM BADSHA
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Senior Solution Architect with 20+ years of experience in enterprise
            architecture, microservices modernization, integration strategy,
            digital banking platforms, and large-scale transformation delivery.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}