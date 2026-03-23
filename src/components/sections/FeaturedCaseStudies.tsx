import Link from "next/link";
import { caseStudies } from "@/data/portfolio";

export default function FeaturedCaseStudies() {
  const featuredStudies = caseStudies.slice(0, 3);

  return (
    <section className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Featured Work
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Selected architecture case studies
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          A snapshot of selected enterprise architecture and transformation
          initiatives covering microservices modernization, platform governance,
          and digital channel design.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredStudies.map((study) => (
            <article
              key={study.slug}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-slate-600"
            >
              <h3 className="text-2xl font-semibold leading-8">{study.title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {study.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="inline-block rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  View Case Study
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/portfolio"
            className="inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}