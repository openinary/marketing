"use client";

import { ContainerIcon, CpuIcon, ImageIcon } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  {
    icon: <ContainerIcon className="size-5" />,
    title: "Docker-Ready",
    description: "Self-hostable with Docker",
    image: "/image-1.png",
    value: "docker",
  },
  {
    icon: <CpuIcon className="size-5" />,
    title: "API-First",
    description: "On-the-fly image and video processing",
    image: "/image-2.png",
    value: "upload",
  },
  {
    icon: <ImageIcon className="size-5" />,
    title: "Media Transforms",
    description: "Resize, format, and optimize via URL",
    image: "/image-3.png",
    value: "transform",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full border-y border-black/10">
      <Tabs defaultValue={features[0]?.value ?? "explore"} className="w-full">
        <TabsList className="flex flex-col lg:flex-row h-auto w-full p-0 bg-transparent rounded-none border-0 gap-0">
          {features.map((feature, index) => (
            <TabsTrigger
              key={feature.value}
              value={feature.value}
              className={`flex flex-1 h-auto min-h-[80px] lg:min-h-[100px] justify-start rounded-none border-0 p-4 lg:p-6 text-left bg-neutral-50 data-[state=active]:bg-white shadow-none transition-colors w-full ${
                index < features.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-black/10"
                  : ""
              }`}
            >
              <div className="flex w-full flex-row items-center gap-3">
                <div className="flex h-8 w-8 lg:h-10 lg:w-10 flex-shrink-0 items-center justify-center rounded-lg border border-black/10 shadow-none">
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm lg:text-base font-medium leading-tight mb-1 break-words">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-sm font-normal text-gray-500 leading-relaxed break-words">
                    {feature.description}
                  </p>
                </div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="mx-auto max-w-screen-xl">
          <div className="p-4 sm:p-6 border-t">
            {features.map((feature) => (
              <TabsContent key={feature.value} value={feature.value}>
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1230}
                    height={640}
                    className="rounded-lg shadow-none w-full h-auto"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </section>
  );
}
