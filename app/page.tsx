import Hero from "@/components/Hero";
import MisionAndVision from "@/components/MisionAndVision";
import Features from "@/components/Features";
import Team from "@/components/Team";
import CallToContact from "@/components/CallToContact";
import VideosSection from "@/components/VideosSection";

export default function Home() {
  return (
      <>
          <Hero/>
          <Features/>
          <MisionAndVision/>
          <VideosSection/>
          <Team/>
          <CallToContact/>
      </>
  );
}
