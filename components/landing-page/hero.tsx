"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";

export default function HeroSection() {
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("");

  const handleSubmit = async (formData: FormData) => {
    console.log(formData);
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
