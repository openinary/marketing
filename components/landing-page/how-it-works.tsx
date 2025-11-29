import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code2, Key, Play } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Clone & Docker compose",
    description: "Get started with a single docker-compose command",
    icon: <Code2 className="size-6" />,
  },
  {
    number: "2",
    title: "Setup admin + API key",
    description: "Configure your admin account and generate API keys",
    icon: <Key className="size-6" />,
  },
  {
    number: "3",
    title: "Call a transformation URL",
    description: "Start transforming images and videos via URL parameters",
    icon: <Play className="size-6" />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="px-6 py-12 border-y">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold lg:text-4xl">
            How it works in 3 steps
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            Get up and running with Openinary in minutes. No complex setup required.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 p-6 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-neutral-50">
                  {step.icon}
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start">
          <Button asChild size="lg" variant="outline">
            <Link
              href="https://docs.openinary.dev/quickstart"
              target="_blank"
              rel="noopener noreferrer"
            >
              See full Quickstart
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

