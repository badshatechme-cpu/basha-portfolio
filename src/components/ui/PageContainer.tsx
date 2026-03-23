type PageContainerProps = {
  children: React.ReactNode;
  maxWidth?: string;
};

export default function PageContainer({
  children,
  maxWidth = "max-w-6xl",
}: PageContainerProps) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className={`mx-auto ${maxWidth}`}>{children}</div>
    </main>
  );
}