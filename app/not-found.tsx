import Link from "next/link";
import PageContainer from "@/components/ui/PageContainer";

export default function NotFound() {
  return (
    <PageContainer maxWidth="max-w-3xl">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Go back home
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}