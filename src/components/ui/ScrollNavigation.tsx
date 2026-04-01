"use client";

import { useEffect, useState } from "react";

export default function ScrollNavigation() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      const isBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 50;

      setIsAtTop(isTop);
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToNextSection = () => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const currentScroll = window.scrollY + window.innerHeight / 2;

    // Find the first section that starts below the current viewport center
    const nextSection = sections.find(section => {
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      return sectionTop > currentScroll + 100;
    });

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-2">
      <button
        onClick={scrollUp}
        aria-label="Scroll to top"
        title="Scroll to top"
        disabled={isAtTop}
        className="rounded-full bg-(--surface) border border-(--border) p-2 text-(--foreground) shadow-lg transition cursor-pointer hover:bg-(--surface-alt) hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      <button
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
        title="Scroll to next section"
        disabled={isAtBottom}
        className="rounded-full bg-(--surface) border border-(--border) p-2 text-(--foreground) shadow-lg transition cursor-pointer hover:bg-(--surface-alt) hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </div>
  );
}
