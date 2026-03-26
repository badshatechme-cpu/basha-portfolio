const expertiseItems = [
  {
    title: "Enterprise Architecture",
    description:
      "Designing scalable target architectures, governance models, and modernization roadmaps for enterprise platforms.",
  },
  {
    title: "Digital Banking",
    description:
      "Delivering architecture for mobile banking, internet banking, payments, onboarding, and personalized customer journeys.",
  },
  {
    title: "Microservices Modernization",
    description:
      "Driving distributed systems design using Spring Boot, APIs, event-driven patterns, and centralized platform capabilities.",
  },
];

export default function Expertise() {
  return (
    <section className="bg-slate-900 px-6 py-24 text-white">
      <br />
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Core Expertise
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          Architecture capabilities aligned to enterprise transformation
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <br />
    </section>
  );
}