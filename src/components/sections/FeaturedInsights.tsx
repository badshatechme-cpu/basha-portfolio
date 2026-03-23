import Link from "next/link";
import { insights } from "@/data/insights";

export default function FeaturedInsights() {
  const featuredInsights = insights.slice(0, 3);

  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Thought Leadership
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Featured architecture insights
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          A selection of perspectives on enterprise architecture, modernization,
          governance, and customer-facing platform design.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredInsights.map((item) => (
            <article
              key={item.slug}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-slate-600"
            >
              <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300">
                {item.category}
              </span>

              <h3 className="mt-6 text-2xl font-semibold leading-8">
                {item.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300">
                {item.summary}
              </p>

              <div className="mt-8">
                <Link
                  href={`/insights/${item.slug}`}
                  className="inline-block rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Read Insight
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/insights"
            className="inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
          >
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  );
}