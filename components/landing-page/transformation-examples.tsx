"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const examples = [
  {
    title: "Image resize and format",
    description: "Resize and convert to WebP format",
    url: "https://your-instance.com/image/upload/w_800,h_600,f_webp/sample.jpg",
    code: `// Resize to 800x600 and convert to WebP
GET /image/upload/w_800,h_600,f_webp/sample.jpg`,
  },
  {
    title: "Video thumbnail",
    description: "Extract a frame from video",
    url: "https://your-instance.com/video/upload/w_400,h_300,so_5/video.mp4",
    code: `// Extract frame at 5 seconds, resize to 400x300
GET /video/upload/w_400,h_300,so_5/video.mp4`,
  },
];

export default function TransformationExamplesSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="px-6 py-12 border-y">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold lg:text-4xl">
            Looks familiar if you know Cloudinary
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            Same powerful URL-based transformations you&apos;re used to, but self-hosted and open-source.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {examples.map((example, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 border rounded-lg"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{example.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {example.description}
                </p>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    Example URL
                  </span>
                  <button
                    onClick={() => copyToClipboard(example.url, index)}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="size-3" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3 bg-neutral-50 rounded border font-mono text-xs overflow-x-auto">
                  <code>{example.url}</code>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Code example
                </span>
                <div className="p-3 bg-neutral-50 rounded border font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{example.code}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start">
          <Button asChild variant="outline">
            <Link
              href="https://docs.openinary.dev/transformations"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all transformation options
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

