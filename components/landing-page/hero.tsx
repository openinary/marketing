"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import GitHubStarsAnimation from "@/components/github-stars-animation";

export default function HeroSection() {
  return (
    <section className="py-8 px-6">
      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-[800px]">
            Open-source, self-hostable alternative to Cloudinary
          </h1>
          <p className="text-gray-600 max-w-[700px]">
            Store your medias in an environment you trust. Fast, cheap, and open.
          </p>
          
          {/* 3 Pillars */}
          <ul className="flex flex-col sm:flex-row gap-4 mt-2">
            <li className="flex items-center gap-2">
              <Check className="size-5 text-green-600 flex-shrink-0" />
              <span className="text-sm font-medium">Self-hosted</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-5 text-green-600 flex-shrink-0" />
              <span className="text-sm font-medium">No vendor lock-in</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-5 text-green-600 flex-shrink-0" />
              <span className="text-sm font-medium">Works with S3/R2/MinIO</span>
            </li>
          </ul>
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto" data-rybbit-event="quickstart_clicked" data-rybbit-prop-location="hero">
            <Link href="https://docs.openinary.dev/quickstart" target="_blank" rel="noopener noreferrer">
              Self-host Openinary in 5 minutes
            </Link>
          </Button>
          <GitHubStarsAnimation
            maxAvatars={5}
            owner="openinary"
            repo="openinary"
            showAvatars
          />
        </div>
      </div>
    </section>
  );
}
