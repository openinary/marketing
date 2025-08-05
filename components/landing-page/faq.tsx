import Link from "next/link";

export default function FAQsSection() {
  return (
    <section className="px-6 py-8 border-b">
      <div>
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          <div className="lg:text-left lg:sticky lg:top-[100px] lg:self-start">
            <h2 className="text-left text-3xl font-semibold lg:text-4xl mb-4">
              Frequently <br className="hidden lg:block" /> Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-[480px] leading-relaxed">
              Everything you need to know about deploying and using Openinary.
            </p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            <div className="pb-6">
              <h3 className="font-medium">
                How do I deploy Openinary with Docker?
              </h3>
              <p className="text-muted-foreground mt-4">
                Openinary is fully Dockerized and can be deployed on any infrastructure.
                No external dependencies required - it works standalone or with S3-compatible storage for optimization.
              </p>

              <ol className="list-outside list-decimal space-y-2 pl-4">
                <li className="text-muted-foreground mt-4">
                  Clone the repository and configure environment variables
                </li>
                <li className="text-muted-foreground mt-4">
                  Run docker-compose up or deploy to your preferred container platform
                </li>
                <li className="text-muted-foreground mt-4">
                  Optionally configure S3-compatible storage (like Cloudflare R2) for enhanced performance - detailed instructions in our{" "}
                  <Link target="_blank" className="hover:underline" href="#">
                    documentation
                  </Link>
                </li>
              </ol>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                What are the costs of self-hosting?
              </h3>
              <p className="text-muted-foreground mt-4">
                The self-hosted version is completely free under MIT license.
                You only pay for your own infrastructure costs (server, storage).
                Optionally use S3-compatible storage like Cloudflare R2 for optimized performance.
                For most projects, this typically costs just a few dollars per month.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                How does Openinary compare to Cloudinary?
              </h3>
              <p className="text-muted-foreground my-4">
                Openinary provides the core features of Cloudinary but as an
                open source, self-hostable solution. You get image
                transformations, API uploads, and edge delivery without vendor
                lock-in or enterprise pricing.
              </p>
              <ul className="list-outside list-disc space-y-2 pl-4">
                <li className="text-muted-foreground">
                  Full control over your media infrastructure
                </li>
                <li className="text-muted-foreground">
                  No usage limits beyond what you configure
                </li>
                <li className="text-muted-foreground">
                  Transparent, MIT-licensed codebase you can modify
                </li>
              </ul>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                When will the Cloud version be available?
              </h3>
              <p className="text-muted-foreground mt-4">
                We're currently focused on perfecting the open source version.
                The managed Cloud offering is planned for the future, but we
                don't have a specific timeline yet. Follow our GitHub repository
                for updates on development progress.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                What image and video formats are supported?
              </h3>
              <p className="text-muted-foreground mt-4">
                Openinary supports common web formats (JPEG, PNG, WebP) for images
                and video processing via FFmpeg. On-the-fly transformations include
                resizing, cropping, format conversion, quality optimization, and video
                transcoding. All transformations happen via API for maximum flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
