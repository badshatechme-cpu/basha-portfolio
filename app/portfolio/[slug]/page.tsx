import Link from "next/link";
import { notFound } from "next/navigation";
import PageContainer from "@/components/ui/PageContainer";
import { caseStudies } from "@/data/portfolio";

type PortfolioDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { slug } = await params;

  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const isCQRS =
    study.slug === "cqrs-cdc-read-optimization-digital-banking";

  return (
    <PageContainer maxWidth="max-w-5xl">
      {/* Back link */}
      <Link
        href="/portfolio"
        className="inline-flex items-center text-sm text-slate-400 transition hover:text-white"
      >
        ← Back to Portfolio
      </Link>

      {/* Header */}
      <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Case Study
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          {study.title}
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          {study.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* CQRS Diagram */}
      {isCQRS && (
        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Solution Architecture Diagram
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            High-level view of the CQRS architecture separating transactional
            write flows from read-optimized customer-facing query paths using
            CDC-based replication.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-white p-4">
            <img
              src="/new.drawio.svg"
              
              alt="CQRS architecture diagram"
              className="w-full rounded-xl"
            />
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            The write path preserves transactional integrity, while the read path
            uses CDC-based replication to serve faster queries.
          </p>
        </section>
      )}

      {/* Main Content + Sidebar */}
      <section className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {study.overview}
            </p>
          </div>

          {study.businessContext && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-2xl font-semibold">Business Context</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {study.businessContext}
              </p>
            </div>
          )}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">Challenge</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {study.challenge}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">Architecture Approach</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {study.approach}
            </p>
          </div>

          {study.keyDecisions && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-2xl font-semibold">
                Key Architecture Decisions
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {study.keyDecisions}
              </p>
            </div>
          )}

          {study.tradeoffs && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-2xl font-semibold">
                Trade-offs and Considerations
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {study.tradeoffs}
              </p>
            </div>
          )}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">Outcome</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {study.outcome}
            </p>
          </div>

          {/* CQRS Takeaways */}
          {isCQRS && (
            <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10">
              <h2 className="text-2xl font-semibold">Key Takeaways</h2>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                  <h3 className="text-lg font-semibold">
                    Read/Write Separation
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    Treated read and write workloads differently for efficiency.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                  <h3 className="text-lg font-semibold">
                    CDC-Based Replication
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    GoldenGate enabled low-coupling data replication.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                  <h3 className="text-lg font-semibold">
                    Performance Optimization
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    Designed for fast customer-facing queries.
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-8">
          {isCQRS ? (
            <>
              <h2 className="text-2xl font-semibold">CQRS Summary</h2>

              <div className="mt-6 space-y-6 text-sm text-slate-300">
                <div>
                  <p className="font-medium text-white">Pattern</p>
                  <p className="mt-2">CQRS with CDC replication</p>
                </div>

                <div>
                  <p className="font-medium text-white">Read Model</p>
                  <p className="mt-2">Optimized for fast queries</p>
                </div>

                <div>
                  <p className="font-medium text-white">Write Model</p>
                  <p className="mt-2">System of record preserved</p>
                </div>

                <div>
                  <p className="font-medium text-white">Trade-off</p>
                  <p className="mt-2">Eventual consistency</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold">Summary</h2>

              <div className="mt-6 space-y-6 text-sm text-slate-300">
                <div>
                  <p className="font-medium text-white">Focus Area</p>
                  <p className="mt-2">Enterprise architecture</p>
                </div>

                <div>
                  <p className="font-medium text-white">Approach</p>
                  <p className="mt-2">
                    Scalable and business-aligned solutions
                  </p>
                </div>
              </div>
            </>
          )}
        </aside>
      </section>
    </PageContainer>
  );
}