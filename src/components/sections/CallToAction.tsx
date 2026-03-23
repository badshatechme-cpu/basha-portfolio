import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 p-10 sm:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Let’s Connect
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          Open to architecture, transformation, and technology leadership
          conversations
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This portfolio showcases my experience across enterprise
          architecture, solution design, digital banking platforms,
          microservices modernization, integration strategy, and delivery
          governance. If you are a recruiter, hiring manager, or technology
          leader, I would be glad to connect.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
          >
            Contact Me
          </Link>

          <Link
            href="/resume"
            className="inline-block rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}