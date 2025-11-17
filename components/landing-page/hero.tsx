"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { submitWaitlist } from "@/app/actions/waitlist";

export default function HeroSection() {
  
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("");

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitWaitlist(formData);
      
      if (result.success) {
        // Show success toast
        toast.success("Successfully joined the waitlist!", {
          description: "We'll notify you when we launch.",
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-[660px]">
            Store your medias in an environment you trust.
          </h1>
          <p className=" text-gray-600">
            The Open Source Media Cloud. Fast, cheap, and open.
          </p>
        </div>
        <div className="flex gap-4">
          <form action={handleSubmit} className="flex gap-1">
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="h-full w-56 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isPending}
            />
            <Button type="submit" size="sm" disabled={isPending}>
              {isPending ? "Joining..." : "Join the waitlist"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
