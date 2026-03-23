import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Enterprise Architecture • Solution Design • Digital Transformation
        </p>

        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Mohammad Ibrahim Badsha
        </h1>

        <p className="mt-6 text-lg text-slate-300 sm:text-xl leading-8">
          Solution Architect with 20+ years of experience delivering enterprise
          architecture, microservices modernization, digital banking platforms,
          integration strategy, and large-scale transformation initiatives.
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
    </section>
  );
}