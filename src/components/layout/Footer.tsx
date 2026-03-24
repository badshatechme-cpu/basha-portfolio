import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <h2 className="text-lg font-semibold tracking-wide">
            Mohammad Ibrahim Badsha
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Senior Solution Architect portfolio focused on enterprise
            architecture, digital banking transformation, integration strategy,
            and modernization delivery.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Quick Links
          </h3>
          <div className="mt-4 flex flex-row gap-6 text-sm text-slate-300">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-800 pt-6 text-sm text-slate-500">
        © 2026 Mohammad Ibrahim Badsha. All rights reserved.
      </div>
    </footer>
  );
}