import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/ui/PageContainer";
import SectionIntro from "@/components/ui/SectionIntro";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights | Basha Portfolio",
  description:
    "Thought leadership, architecture insights, and professional perspectives from Mohammad Ibrahim Badsha on enterprise systems, modernization, and digital transformation.",
};

export default function InsightsPage() {
  return (
    <PageContainer>
      <SectionIntro
        eyebrow="Insights"
        title="Architecture Insights and Thought Leadership"
        description="A collection of short perspectives and professional observations on enterprise architecture, digital transformation, modernization, governance, and customer-facing technology platforms."
      />

      <section id="insights-intro" className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Why this section matters
        </h2>

        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
          Architecture is not only about delivery artifacts and project outcomes.
          It is also about structured thinking, trade-offs, principles, and the
          ability to guide decisions in complex enterprise environments. This
          section reflects how I think about architecture beyond implementation.
        </p>
      </section>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {insights.map((item) => (
          <article
            key={item.slug}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-slate-600"
          >
            <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300">
              {item.category}
            </span>

            <h2 className="mt-6 text-2xl font-semibold leading-8 sm:text-3xl">
              {item.title}
            </h2>

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
    </PageContainer>
  );
}