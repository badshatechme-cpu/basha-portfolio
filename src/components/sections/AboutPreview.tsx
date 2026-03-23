import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Enterprise architect with strong delivery and transformation depth
          </h2>

          <div className="mt-6 space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I am Mohammad Ibrahim Badsha, a Solution Architect with more than
              20 years of experience across enterprise technology, digital
              banking, solution design, microservices, integration, and
              large-scale transformation initiatives.
            </p>

            <p>
              My experience combines hands-on technical depth with architecture
              governance, cross-functional leadership, and business-aligned
              technology strategy. I focus on designing practical, scalable, and
              resilient solutions for complex enterprise environments.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-block rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Read Full Profile
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h3 className="text-2xl font-semibold">At a glance</h3>

          <div className="mt-6 space-y-5 text-sm text-slate-300">
            <div>
              <p className="font-medium text-white">Experience</p>
              <p className="mt-1">20+ years across architecture and enterprise delivery</p>
            </div>

            <div>
              <p className="font-medium text-white">Domain Focus</p>
              <p className="mt-1">Digital banking, enterprise platforms, and transformation</p>
            </div>

            <div>
              <p className="font-medium text-white">Core Strength</p>
              <p className="mt-1">Architecture strategy backed by hands-on engineering depth</p>
            </div>

            <div>
              <p className="font-medium text-white">Leadership Style</p>
              <p className="mt-1">Business-aligned, structured, delivery-focused, and practical</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}