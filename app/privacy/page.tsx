import { PrivacyPolicyClient } from "@/components/ui/openpolicy/privacy-policy-client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import config from "@/lib/openpolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Openinary",
  description: "Learn how Openinary collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background overflow-x-clip">
      <div className="relative mx-auto max-w-screen-xl border-x">
        <Header />
        <main className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-20 min-h-[80vh]">
          <div className="mb-12">
            <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground max-w-[600px] leading-relaxed">
              Last updated April 17, 2026. Learn how Openinary collects, uses, and protects your data.
            </p>
          </div>
          <PrivacyPolicyClient config={config} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
