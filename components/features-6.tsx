import CodeBlockIllustration from "@/components/ui/illustrations/code-block-illustration";
import { FullWidthDivider } from "@/components/ui/full-width-divider";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="relative @container mx-auto w-full py-10 md:py-20">
      <div className="mx-auto w-full max-w-5xl px-6 py-6 md:py-12">
        <div className="@3xl:grid-cols-3 relative grid gap-12">
          <div className="@3xl:pb-3 flex flex-col justify-between gap-2 @3xl:gap-12">
            <div>
              <h2 className="relative z-10 text-balance text-3xl font-semibold tracking-tight lg:text-4xl">
                Manage your files efficiently with code
              </h2>
              <p className="text-muted-foreground my-6 max-w-2xl leading-relaxed">
                Add the logic to create, update, rename, and remove files
                directly into your application.
              </p>
            </div>

            <Link
              href="https://docs.openinary.dev/media-transformations/overview"
              target="_blank"
              className="group inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              data-rybbit-event="docs_clicked"
              data-rybbit-prop-location="features"
            >
              <BookOpen className="size-4" />
              Documentation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="@3xl:col-span-2 mt-auto h-fit">
            <CodeBlockIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
