"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { submitWaitlist } from "@/app/actions/waitlist";
import Link from "next/link";
import { Check } from "lucide-react";

export default function HeroSection() {
  
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("");

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitWaitlist(formData);
      
      if (result.success) {
        // Show success toast
        toast.success("Successfully joined the waitlist!", {
          description: "You'll receive updates on the open-source project and cloud solution.",
        });
        
        // Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        
        // Clear email input
        setEmail("");
      } else {
        // Show error toast with the validation message
        toast.error(result.error || "Something went wrong");
      }
    });
  };

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
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="https://docs.openinary.dev/quickstart" target="_blank" rel="noopener noreferrer">
              Self-host Openinary in 5 minutes
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="https://github.com/openinary/openinary" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5 mr-1"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
              </svg>
              View on GitHub
            </Link>
          </Button>
        </div>
        
        {/* Tertiary CTA - Waitlist as text link 
        <div className="flex flex-col gap-2 scroll-mt-[100px]" id="waitlist">          
          <form action={handleSubmit} className="flex flex-col gap-2 mt-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Cloud platform (coming soon)
              </label>
              <div className="flex gap-1">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="h-8 w-56 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isPending}
                />
                <Button type="submit" size="sm" disabled={isPending}>
                  {isPending ? "Joining..." : "Join the waitlist"}
                </Button>
              </div>
            </div>
          </form>
        </div> */}
      </div>
    </section>
  );
}
