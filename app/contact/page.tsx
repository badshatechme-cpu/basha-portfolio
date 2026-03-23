import Link from "next/link";
import PageContainer from "@/components/ui/PageContainer";
import SectionIntro from "@/components/ui/SectionIntro";
import { contactItems } from "@/data/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Basha Portfolio",
  description:
    "Connect with Mohammad Ibrahim Badsha for enterprise architecture, solution design, digital transformation, and leadership opportunities.",
};

export default function ContactPage() {
  return (
    <PageContainer>
      <SectionIntro
        eyebrow="Contact"
        title="Let’s Connect"
        description="I am always open to meaningful conversations around enterprise architecture, solution design, digital banking transformation, modernization programs, and senior technology leadership opportunities."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {contactItems.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>

            {item.href ? (
              <Link
                href={item.href}
                className="mt-4 block wrap-break-word text-sm font-medium text-slate-100 underline underline-offset-4 transition hover:text-white"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {item.value}
              </Link>
            ) : (
              <p className="mt-4 wrap-break-word text-sm font-medium text-slate-100">
                {item.value}
              </p>
            )}

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Available for professional discussions
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
          This portfolio is being built as a professional platform to showcase
          my experience in enterprise architecture, digital platforms,
          microservices modernization, integration strategy, and architecture
          governance. If you are a recruiter, hiring manager, technology leader,
          or professional connection, I would be glad to connect.
        </p>
      </section>
    </PageContainer>
  );
}