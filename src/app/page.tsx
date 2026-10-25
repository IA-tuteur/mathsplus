import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { MethodSection } from "@/components/MethodSection";
import { ProofSection } from "@/components/ProofSection";
import { GuaranteeBanner } from "@/components/GuaranteeBanner";
import { FitSection } from "@/components/FitSection";
import { CalendarEmbed } from "@/components/CalendarEmbed";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <ProofSection />
      <GuaranteeBanner />
      <FitSection />
      <CalendarEmbed />
    </main>
  );
}
