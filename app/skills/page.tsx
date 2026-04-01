import PageContainer from "@/components/ui/PageContainer";
import SectionIntro from "@/components/ui/SectionIntro";
import { skillCategories } from "@/data/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Basha Portfolio",
  description:
    "Explore the architecture, technical, domain, and leadership skills of Mohammad Ibrahim Badsha across enterprise and digital banking platforms.",
};

export default function SkillsPage() {
  return (
    <PageContainer>
      <SectionIntro
        eyebrow="Skills"
        title="Architecture and Technical Skill Set"
        description="A structured view of my enterprise architecture, technical, domain, and leadership capabilities built across more than 20 years of experience."
      />

      <div id="skills-list" className="mt-12 grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <section
            key={category.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h2 className="text-2xl font-semibold">{category.title}</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}