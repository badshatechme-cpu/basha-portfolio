const metrics = [
  { value: "20+", label: "Years of IT Experience" },
  { value: "90+", label: "Microservices in Enterprise Landscape" },
  { value: "Multiple", label: "Digital Banking Initiatives Led" },
  { value: "UAE", label: "Banking Domain Focus" },
];

export default function Metrics() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Impact Snapshot
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          Experience backed by enterprise-scale delivery
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="text-3xl font-bold">{metric.value}</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}