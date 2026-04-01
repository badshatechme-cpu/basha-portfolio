import Link from "next/link";
import { notFound } from "next/navigation";
import PageContainer from "@/components/ui/PageContainer";
import { insights } from "@/data/insights";

type InsightDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function InsightDetailPage({
  params,
}: InsightDetailPageProps) {
  const { slug } = await params;

  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <PageContainer maxWidth="max-w-5xl">
      <Link
        href="/insights"
        className="inline-flex items-center text-sm text-slate-400 transition hover:text-white"
      >
        ← Back to Insights
      </Link>

      <section id="insight-header" className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10">
        <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300">
          {insight.category}
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
          {insight.title}
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          {insight.summary}
        </p>
      </section>

      <section id="insight-content" className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {insight.intro}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">{insight.section1Title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {insight.section1Body}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">{insight.section2Title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {insight.section2Body}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">{insight.section3Title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {insight.section3Body}
            </p>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold">Perspective</h2>

          <div className="mt-6 space-y-6 text-sm text-slate-300">
            <div>
              <p className="font-medium text-white">Theme</p>
              <p className="mt-2">{insight.category}</p>
            </div>

            <div>
              <p className="font-medium text-white">Lens</p>
              <p className="mt-2">
                Enterprise architecture with practical delivery implications
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Intent</p>
              <p className="mt-2">
                To share structured thinking on architecture decisions and
                transformation direction
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Continue the conversation
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          Interested in discussing architecture strategy or modernization?
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
          I write about architecture because strong systems require strong
          thinking. If you are exploring enterprise transformation, digital
          platforms, governance, or solution strategy, I would be glad to
          connect.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
          >
            Contact Me
          </Link>

          <Link
            href="/portfolio"
            className="inline-block rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View Portfolio
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}