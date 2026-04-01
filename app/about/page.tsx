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
            I am Mohammad Ibrahim Badsha, a Senior Solution Architect with over two decades of experience designing 
            enterprise systems that are expected to perform when failure is not an option.
        </p>

        <p>
          My expertise spans enterprise architecture, digital banking platforms, 
          microservices ecosystems, and large-scale transformation programs. 
          I focus on building systems that are resilient, scalable, and aligned to 
          real business outcomes—particularly in environments where performance, 
          reliability, and security are critical.
        </p>

        <p>
          Over the years, I have led architecture initiatives across digital banking platforms, 
          integration ecosystems, and distributed systems, including high-scale microservices 
          landscapes and mission-critical enterprise environments. 
          My work has involved solving complex challenges such as read/write optimization using CQRS patterns, large-scale platform modernization, and designing resilient infrastructure capable of supporting zero data loss and high-availability requirements.
        </p>
        <p>
          My approach to architecture is grounded in clarity, structured decision-making,
           and a deep understanding of trade-offs. I believe strong systems are not just 
           designed—they are shaped through practical choices that ensure they continue 
           to perform under real-world conditions, not just on diagrams.
        </p>
      </div>

      <section id="strengths" className="mt-16">

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

      <section id="journey" className="mt-16">

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