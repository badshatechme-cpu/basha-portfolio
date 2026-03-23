type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
}: SectionIntroProps) {
  return (
    <section>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
        {eyebrow}
      </p>

      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h1>

      {description ? (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>
      ) : null}
    </section>
  );
}