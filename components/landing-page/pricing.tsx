import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

// Pricing Section
export default function PricingSection() {
  return (
    <section className="px-6 py-8 border-b">
      <div>
        <div className="space-y-6">
          <h1 className="text-left text-3xl font-semibold lg:text-4xl">
            Choose the solution <br />
            that fits you best
          </h1>
          <p className="text-muted-foreground max-w-[480px] leading-relaxed">
            Self-host our free open source version on your infrastructure, or go
            fully managed with our cloud platform.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-5 md:gap-0">
          <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <div className="space-y-4">
              <div>
                <h2 className="font-medium">Self-hosted</h2>
                <span className="my-3 block text-2xl font-semibold">
                  Free forever
                </span>
                <p className="text-muted-foreground text-sm">
                  Docker-based self-hosting
                </p>
              </div>

              <Button asChild className="w-full" data-rybbit-event="self_host_clicked" data-rybbit-prop-plan="self-hosted">
                <Link target="_blank" href="https://docs.openinary.dev/quickstart">
                  Self-host with Docker
                </Link>
              </Button>

              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Upload media through the API",
                  "UI for uploads + previews",
                  "Works with any S3-compatible storage",
                  "Transform images and videos on-the-fly via URL",
                  "MIT License",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium">Cloud</h2>
                  <span className="my-3 block text-2xl font-semibold">TBD</span>
                  <p className="text-muted-foreground text-sm">
                    We handle the hosting
                  </p>
                </div>

                <Button asChild variant="outline" className="w-full" data-rybbit-event="waitlist_join_clicked" data-rybbit-prop-plan="cloud" data-rybbit-prop-location="pricing">
                  <Link href="#waitlist">
                    Join the waitlist
                  </Link>
                </Button>
              </div>

              <div>
                <div className="text-sm font-medium">
                  Everything in self-hosted plus:
                </div>

                <ul className="mt-4 list-outside space-y-3 text-sm">
                  {[
                    "Managed Infrastructure",
                    "Automatic Updates & Maintenance",
                    "Enhanced Performance Monitoring",
                    "Priority Support",
                    "Advanced Analytics Dashboard",
                    "Custom Domain Management",
                    "Team Collaboration Features",
                    "Advanced Security Features",
                    "SLA Guarantees",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
