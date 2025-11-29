import Banner from "@/components/landing-page/banner";
import BuiltForDevelopersSection from "@/components/landing-page/built-for-developers";
import FAQsSection from "@/components/landing-page/faq";
import FeaturesSection from "@/components/landing-page/features";
import FooterSection from "@/components/landing-page/footer";
import HeroHeader from "@/components/landing-page/header";
import HeroSection from "@/components/landing-page/hero";
import HowItWorksSection from "@/components/landing-page/how-it-works";
import PricingSection from "@/components/landing-page/pricing";
import StorageCompatibilitySection from "@/components/landing-page/storage-compatibility";
import TakeControlSection from "@/components/landing-page/take-control";
import TransformationExamplesSection from "@/components/landing-page/transformation-examples";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative mx-auto max-w-screen-xl border-x">
        <Banner
          title="The project is under active development."
          description="Expect bugs and changes, please check our repo on"
          linkText="GitHub"
          linkUrl="https://github.com/openinary/openinary?tab=readme-ov-file#%EF%B8%8F-openinary"
        />
        <HeroHeader />
        <HeroSection />
        <FeaturesSection />
        <BuiltForDevelopersSection />
        <TransformationExamplesSection />
        
        <HowItWorksSection />
        <StorageCompatibilitySection />
        <TakeControlSection />
        <PricingSection />
        <FAQsSection />
        <FooterSection />
      </div>
    </div>
  );
}
