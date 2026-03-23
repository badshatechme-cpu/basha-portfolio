import type { Metadata } from "next";
import AboutPreview from "@/components/sections/AboutPreview";
import CallToAction from "@/components/sections/CallToAction";
import Expertise from "@/components/sections/Expertise";
import FeaturedCaseStudies from "@/components/sections/FeaturedCaseStudies";
import FeaturedInsights from "@/components/sections/FeaturedInsights";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";

export const metadata: Metadata = {
  title: "Home | Basha Portfolio",
  description:
    "Enterprise architecture, solution design, digital banking transformation, and technology leadership portfolio of Mohammad Ibrahim Badsha.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Expertise />
      <Metrics />
      <FeaturedCaseStudies />
      <FeaturedInsights />
      <CallToAction />
    </main>
  );
}