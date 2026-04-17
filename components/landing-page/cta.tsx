"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WaitlistModal } from "@/components/waitlist-modal";
import { FullWidthDivider } from "../ui/full-width-divider";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { ArrowRightIcon } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="px-6 py-10 md:py-20 border-b scroll-mt-[100px] relative"
      id="cta"
    >
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-40"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--background"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--background"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      <FullWidthDivider position="top" />
      <FullWidthDivider position="bottom" />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl mb-4">
            Store your medias in an environment you trust.
          </h2>
        </div>

        <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
          <Button asChild size="default" data-rybbit-event="self_host_cta_clicked">
            <Link href="https://docs.Ente.io/self-hosting" target="_blank" rel="noopener noreferrer">
              Self host in 5 minutes
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
          <WaitlistModal
            trigger={
              <Button
                size="default"
                variant="outline"
                data-rybbit-event="waitlist_cta_clicked"
                data-rybbit-prop-location="cta"
              >
                Join Cloud waitlist
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
