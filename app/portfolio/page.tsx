import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/ui/PageContainer";
import SectionIntro from "@/components/ui/SectionIntro";
import { caseStudies } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Basha Portfolio",
  description:
    "Review architecture case studies covering microservices modernization, configuration governance, BFF design, and enterprise transformation.",
};

export default function PortfolioPage() {
  return (
    <PageContainer>
      <SectionIntro
        eyebrow="Portfolio"
        title="Architecture Case Studies"
        description="A selected portfolio of enterprise architecture, modernization, integration, and digital transformation initiatives representing my approach to scalable design, structured decision-making, and business-aligned technology leadership."
      />

      <section id="portfolio-intro" className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          What this portfolio represents
        </h2>

        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
          These case studies highlight the type of architecture thinking I bring
          to enterprise environments: practical modernization, scalable system
          design, integration strategy, governance, and customer-focused digital
          platform evolution. Each example is presented as a concise executive
          summary of architecture intent, challenge, approach, and outcome.
        </p>
      </section>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <article
            key={study.slug}
            className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-slate-600 hover:shadow-[0_0_0_1px_rgba(148,163,184,0.15)]"
          >
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="mt-6 text-2xl font-semibold leading-8 sm:text-3xl">
              {study.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              {study.summary}
            </p>

            <div className="mt-8 border-t border-slate-800 pt-6">
              <Link
                href={`/portfolio/${study.slug}`}
                className="inline-flex items-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                View Details →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}