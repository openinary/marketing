import Banner from "@/components/landing-page/banner";
import FAQsSection from "@/components/landing-page/faq";
import FeaturesSection from "@/components/landing-page/features";
import FooterSection from "@/components/landing-page/footer";
import HeroHeader from "@/components/landing-page/header";
import HeroSection from "@/components/landing-page/hero";
import PricingSection from "@/components/landing-page/pricing";

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
        <PricingSection />
        <FAQsSection />
        <FooterSection />
      </div>
    </div>
  );
}
