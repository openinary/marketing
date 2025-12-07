"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { submitWaitlist } from "@/app/actions/waitlist";

export default function WaitlistSection() {
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
    <section className="px-6 py-24 border-b scroll-mt-[100px]" id="waitlist">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
        <div className="flex-1">
          <h2 className="text-left text-3xl font-semibold lg:text-4xl mb-4">
            Join the Waitlist
          </h2>
          <p className="text-muted-foreground max-w-[480px] leading-relaxed">
            Be the first to know when our cloud platform is available. Get updates on new features and early access.
          </p>
        </div>
        
        <div className="flex-shrink-0 md:mt-0">
          <form action={handleSubmit} className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-md font-medium text-gray-700">
                Email address
              </label>
              <div className="flex gap-1">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="h-10 md:w-[300px] w-full text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isPending}
                />
                <Button className="h-10" type="submit" size="sm" disabled={isPending} data-rybbit-event="waitlist_join_clicked">
                  {isPending ? "Joining..." : "Join the waitlist"}
                </Button>
              </div>
            </div>
          </form>
        </div> 
      </div>
    </section>
  );
}

