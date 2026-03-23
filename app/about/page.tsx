import PageContainer from "@/components/ui/PageContainer";
import SectionIntro from "@/components/ui/SectionIntro";
import { journey, strengths } from "@/data/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Basha Portfolio",
  description:
    "Learn more about Mohammad Ibrahim Badsha, his enterprise architecture background, digital banking experience, and solution leadership journey.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <SectionIntro eyebrow="About" title="About Me" />

      <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-slate-300">
        <p>
          I am Mohammad Ibrahim Badsha, a Solution Architect with more than 20
          years of experience in enterprise technology, solution design,
          large-scale integration, and digital transformation initiatives.
        </p>

        <p>
          My experience spans enterprise architecture, banking platforms,
          microservices modernization, API ecosystems, distributed systems, and
          architecture governance. I focus on building practical, scalable, and
          business-aligned technology solutions for complex organizations.
        </p>

        <p>
          Over the years, I have worked across engineering, architecture, and
          leadership responsibilities, helping organizations design resilient
          systems, modernize legacy platforms, and deliver strategic
          transformation outcomes.
        </p>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">Core Strengths</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {strengths.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Professional Journey
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {journey.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}