import { HeroAnimation } from "@/components/home/HeroAnimation";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { CTABlock } from "@/components/global/CTABlock";

export default function Home() {
  return (
    <>
      <HeroAnimation />
      <PhilosophySection />
      <ServicesPreview />
      <LogoMarquee />
      <CTABlock />
    </>
  );
}
