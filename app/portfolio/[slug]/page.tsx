import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageContainer from "@/components/ui/PageContainer";
import { caseStudies } from "@/data/portfolio";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | Basha Portfolio`,
    description: caseStudy.summary,
  };
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <PageContainer maxWidth="max-w-5xl">
      <Link
        href="/portfolio"
        className="inline-flex items-center text-sm text-slate-400 transition hover:text-white"
      >
        ← Back to Portfolio
      </Link>

      <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10">
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
          {caseStudy.title}
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          {caseStudy.summary}
        </p>
      </section>

      <section className="mt-10 space-y-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {caseStudy.overview}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold">Challenge</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {caseStudy.challenge}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold">Approach</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {caseStudy.approach}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {caseStudy.outcome}
          </p>
        </div>
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