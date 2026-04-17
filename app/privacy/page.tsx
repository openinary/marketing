import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Openinary",
  description: "Learn how Openinary collects, uses, and protects your personal data.",
};

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="pb-8 mb-8 border-b border-border last:border-0 last:pb-0 last:mb-0">
      {children}
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-base font-semibold text-foreground mb-2">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground leading-relaxed mb-3">{children}</p>;
}

function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="text-sm text-muted-foreground pl-5 mb-3 space-y-1 list-disc">
      {children}
    </ul>
  );
}

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

          <Section>
            <H2>1. Who we are</H2>
            <P>
              Openinary is operated by Florian Heysen, based in France. For privacy-related inquiries,
              contact us at{" "}
              <a href="mailto:privacy@openinary.dev" className="underline underline-offset-2 hover:text-foreground transition-colors">
                privacy@openinary.dev
              </a>.
            </P>
          </Section>

          <Section>
            <H2>2. Data we collect</H2>
            <P>We collect the following categories of personal data:</P>
            <Ul>
              <li><strong>Account information</strong> — email address, username</li>
              <li><strong>Usage data</strong> — pages visited, features used, time spent on site</li>
              <li><strong>Technical data</strong> — IP address, browser type, device information</li>
              <li><strong>Media files</strong> — images and videos uploaded by you</li>
            </Ul>
          </Section>

          <Section>
            <H2>3. Legal basis for processing</H2>
            <P>We process your data on the following legal bases:</P>
            <Ul>
              <li>Legitimate interests</li>
              <li>Your consent</li>
              <li>Performance of a contract</li>
            </Ul>
          </Section>

          <Section>
            <H2>4. How long we keep your data</H2>
            <Ul>
              <li><strong>Account data</strong> — as long as your account is active or as required by law</li>
              <li><strong>Usage data</strong> — up to 12 months</li>
              <li><strong>Media files</strong> — until deletion by you or account termination</li>
            </Ul>
          </Section>

          <Section>
            <H2>5. Cookies</H2>
            <P>We use essential and analytics cookies. We do not use marketing cookies.</P>
          </Section>

          <Section>
            <H2>6. Third parties</H2>
            <P>We share data with the following trusted third parties:</P>
            <Ul>
              <li><strong>Hetzner Cloud</strong> — server hosting and infrastructure</li>
              <li><strong>Cloudflare</strong> — edge delivery and DDoS protection</li>
              <li><strong>Ahrefs</strong> — web analytics</li>
              <li><strong>LogSnag</strong> — event tracking</li>
            </Ul>
          </Section>

          <Section>
            <H2>7. Your rights (GDPR)</H2>
            <P>As a user in the EU, you have the right to:</P>
            <Ul>
              <li>Access your personal data</li>
              <li>Request erasure of your data</li>
              <li>Data portability</li>
              <li>Rectification of inaccurate data</li>
              <li>Restriction of processing</li>
            </Ul>
            <P>
              To exercise any of these rights, email us at{" "}
              <a href="mailto:privacy@openinary.dev" className="underline underline-offset-2 hover:text-foreground transition-colors">
                privacy@openinary.dev
              </a>.
            </P>
          </Section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
