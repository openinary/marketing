import Banner from "@/components/landing-page/banner";
import FAQsSection from "@/components/landing-page/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { FeatureSection } from "@/components/feature-section";
import { PricingSection } from "@/components/pricing-section";
import { Integrations } from "@/components/integrations";
import DeveloperSection from "@/components/features-6";
import WaitlistSection from "@/components/landing-page/waitlist";
import { SectionReveal } from "@/components/ui/section-reveal";

export default function Home() {
  return (
    <div className="bg-background overflow-x-clip">
      <div className="relative mx-auto max-w-screen-xl border-x">
        {/* <Banner
          title="The project is under active development."
          description="Expect bugs and changes, please check our repo on"
          linkText="GitHub"
          linkUrl="https://github.com/openinary/openinary?tab=readme-ov-file#%EF%B8%8F-openinary"
        /> */}
        <Header />
        <SectionReveal>
          <HeroSection />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <FeatureSection />
        </SectionReveal>
        {/* <HowItWorksSection /> */}
        <SectionReveal delay={0.1}>
          <Integrations />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <DeveloperSection />
        </SectionReveal>
        {/* <SectionReveal delay={0.1}>
          <TransformationExamplesSection />
        </SectionReveal> */}
        <SectionReveal delay={0.1}>
          <PricingSection />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <FAQsSection />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <WaitlistSection />
        </SectionReveal>
        <SectionReveal>
          <Footer />
        </SectionReveal>
      </div>
    </div>
  );
}
