import PageContainer from "@/components/ui/PageContainer";
import SectionIntro from "@/components/ui/SectionIntro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Basha Portfolio",
  description:
    "View the professional profile, experience highlights, and architecture focus areas of Mohammad Ibrahim Badsha.",
};

const highlights = [
  "20+ years of IT experience across architecture, engineering, and enterprise delivery",
  "Strong background in enterprise architecture, solution design, and banking transformation",
  "Hands-on expertise in Java, Spring Boot, Oracle, APIs, and distributed systems",
  "Experience leading modernization initiatives across microservices, platforms, and integration landscapes",
  "Track record of aligning technology direction with business priorities and governance needs",
];

const focusAreas = [
  "Enterprise Architecture",
  "Solution Architecture",
  "Digital Banking",
  "Microservices",
  "Integration Architecture",
  "Architecture Governance",
  "Modernization Strategy",
  "Technical Leadership",
];

export default function ResumePage() {
  return (
    <PageContainer>
      <SectionIntro
        eyebrow="Resume"
        title="Professional Profile"
        description="A concise view of my architecture experience, professional focus, and leadership strengths."
      />

      <section id="resume-summary" className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Executive Summary
        </h2>

        <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300">
          I am Mohammad Ibrahim Badsha, a Senior Solution Architect with more
          than 20 years of experience in enterprise technology, digital
          banking, microservices, integration architecture, and transformation
          delivery. My background combines strong hands-on engineering depth
          with architecture governance, solution leadership, and business-aligned
          technology strategy.
        </p>
      </section>

      <section id="resume-highlights" className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold">Career Highlights</h2>

          <ul className="mt-6 space-y-4 text-slate-300">
            {highlights.map((item) => (
              <li key={item} className="leading-8">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold">Core Focus Areas</h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Resume Download</h2>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
          A downloadable PDF version of my resume will be added here so that
          recruiters, hiring managers, and professional connections can quickly
          access my detailed profile.
        </p>

        <div className="mt-8">
          <a
            href="/resume/MohammadIbrahimBadsha_EA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Download CV
          </a>
        </div>

      </section>
    </PageContainer>
  );
}