import { DecorIcon } from "@/components/ui/decor-icon";
import { Button } from "@/components/ui/button";
import { ShieldCheckIcon } from "lucide-react";
import { FullWidthDivider } from "./ui/full-width-divider";

export function PricingSection() {
  return (
    <section className="w-full py-10 md:py-20">
      <FullWidthDivider position="top" />
      <div className="mx-auto max-w-3xl px-6 pb-6 md:pb-12 text-center">
        <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl mb-4">
          Choose the solution that fits you best
        </h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto leading-relaxed">
          Self-host our free open source version on your infrastructure, or go
          fully managed with our cloud platform.
        </p>
      </div>

      <div className="mx-auto w-full max-w-2xl space-y-2">
        <div className="relative grid border bg-background p-4 shadow-xs md:grid-cols-2">
          <DecorIcon className="size-3" position="top-left" />
          <DecorIcon className="size-3" position="top-right" />
          <DecorIcon className="size-3" position="bottom-left" />
          <DecorIcon className="size-3" position="bottom-right" />

          <div className="flex w-full flex-col px-4 pt-5 pb-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold leading-none">Self-hosted</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Docker-based self-hosting
              </p>
            </div>
            <div className="mt-auto pt-10 space-y-4">
              <div className="flex items-end gap-0.5 text-muted-foreground text-xl">
                <span className="-mb-0.5 font-bold text-4xl text-foreground tracking-tighter md:text-4xl">
                  Free forever
                </span>
              </div>
              <Button
                asChild
                className="w-full"
                variant="outline"
                data-rybbit-event="quickstart_clicked"
                data-rybbit-prop-location="pricing"
              >
                <a href="https://docs.openinary.dev/quickstart" target="_blank">
                  Self-host in 5 minutes
                </a>
              </Button>
            </div>
          </div>
          <div className="relative flex w-full flex-col rounded-md border bg-card p-4 shadow dark:bg-card/80">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold leading-none">Cloud</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                We handle the hosting
              </p>
            </div>
            <div className="mt-auto pt-10 space-y-4">
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">
                  Starting at
                </span>
                <div className="flex items-end text-muted-foreground text-xl">
                  <span>$</span>
                  <span className="-mb-0.5 font-bold text-4xl text-foreground tracking-tighter md:text-4xl">
                    29
                  </span>
                  <span>/month</span>
                </div>
              </div>
              <Button disabled className="w-full">
                Coming soon
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-2 text-muted-foreground text-sm">
          <ShieldCheckIcon className="size-4" />
          <span>Access to all features with no hidden fees</span>
        </div>
      </div>
      <FullWidthDivider position="bottom" />
    </section>
  );
}
