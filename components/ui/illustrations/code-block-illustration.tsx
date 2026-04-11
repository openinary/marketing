"use client";

import CodeBlock from "@/components/code-block";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import type { BundledLanguage } from "shiki";
import type { SVGProps } from "react";
import { NodeJs } from "@/components/ui/svgs/nodejs";
import { NextJs } from "@/components/ui/svgs/nextjs";
import { Remix } from "@/components/ui/svgs/remix";
import { Python } from "@/components/ui/svgs/python";
import { Go } from "@/components/ui/svgs/go";
import { Rust } from "@/components/ui/svgs/rust";

type CodeBlockType = "nodejs" | "nextjs" | "remix" | "python" | "go" | "rust";

export default function CodeBlockIllustration() {
  const [code, setCode] = useState<CodeBlockType>("nodejs");
  const nodejsRef = useRef<HTMLButtonElement>(null);
  const nextjsRef = useRef<HTMLButtonElement>(null);
  const remixRef = useRef<HTMLButtonElement>(null);
  const pythonRef = useRef<HTMLButtonElement>(null);
  const goRef = useRef<HTMLButtonElement>(null);
  const rustRef = useRef<HTMLButtonElement>(null);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  const iconMap: {
    [key in CodeBlockType]: React.ComponentType<SVGProps<SVGSVGElement>>;
  } = {
    nodejs: NodeJs,
    nextjs: NextJs,
    remix: Remix,
    python: Python,
    go: Go,
    rust: Rust,
  };

  const langMap: { [key in CodeBlockType]: BundledLanguage } = {
    nodejs: "typescript",
    nextjs: "tsx",
    remix: "tsx",
    python: "python",
    go: "go",
    rust: "rust",
  };

  const codeBlockConfigs = useMemo(
    () => [
      {
        name: "Node.js",
        value: "nodejs" as CodeBlockType,
        ref: nodejsRef,
      },
      {
        name: "Next.js",
        value: "nextjs" as CodeBlockType,
        ref: nextjsRef,
      },
      {
        name: "Remix",
        value: "remix" as CodeBlockType,
        ref: remixRef,
      },
      {
        name: "Python",
        value: "python" as CodeBlockType,
        ref: pythonRef,
      },
      {
        name: "Go",
        value: "go" as CodeBlockType,
        ref: goRef,
      },
      {
        name: "Rust",
        value: "rust" as CodeBlockType,
        ref: rustRef,
      },
    ],
    [],
  );

  useEffect(() => {
    const activeConfig = codeBlockConfigs.find(
      (config) => config.value === code,
    );
    const activeRef = activeConfig ? activeConfig.ref : nodejsRef;

    if (activeRef.current) {
      const parentElement = activeRef.current.parentElement;
      if (parentElement) {
        const parentLeft = parentElement.getBoundingClientRect().left;
        const buttonLeft = activeRef.current.getBoundingClientRect().left;
        const buttonWidth = activeRef.current.offsetWidth;

        const newIndicatorLeft = buttonLeft - parentLeft + 16;
        const newIndicatorWidth = buttonWidth;
        setIndicatorLeft(newIndicatorLeft);
        setIndicatorWidth(newIndicatorWidth);
      }
    }
  }, [code, codeBlockConfigs]);

  const codes: { [key in CodeBlockType]: string } = {
    nodejs: `const form = new FormData();
form.append("files", file);
form.append("transformations", JSON.stringify([
  "w_800,h_600,f_webp,q_80",
  "w_400,c_fill,f_avif,q_70",
]));

const res = await fetch("https://your-instance.com/upload", {
  method: "POST",
  headers: { Authorization: \`Bearer \${API_KEY}\` },
  body: form,
});`,
    nextjs: `<Image
  src="https://your-instance.com/t/w_1200,h_630,c_fill,f_avif,q_85/hero.jpg"
  alt="Hero"
  width={1200}
  height={630}
/>

// Upload from a Server Action
const form = new FormData();
form.append("files", file);

await fetch(\`\${OPENINARY_URL}/upload\`, {
  method: "POST",
  headers: { Authorization: \`Bearer \${API_KEY}\` },
  body: form,
});`,
    remix: `export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  const form = new FormData();
  form.append("files", file);
  form.append("transformations", JSON.stringify([
    "w_800,h_600,f_webp,q_80",
  ]));

  const res = await fetch("https://your-instance.com/upload", {
    method: "POST",
    headers: { Authorization: \`Bearer \${API_KEY}\` },
    body: form,
  });
  return json(await res.json());
}`,
    python: `res = requests.post(
    "https://your-instance.com/upload",
    headers={"Authorization": f"Bearer {API_KEY}"},
    files={"files": ("photo.jpg", f, "image/jpeg")},
    data={
        "transformations": '["w_800,h_600,f_webp,q_80"]',
    },
)

print(res.json())

# Transformed image via URL
# GET /t/w_800,h_600,f_webp/uploads/photo.jpg`,
    go: `body := &bytes.Buffer{}
writer := multipart.NewWriter(body)
part, _ := writer.CreateFormFile("files", "photo.jpg")
io.Copy(part, file)
writer.WriteField("transformations",
\t\`["w_800,h_600,f_webp,q_80"]\`)
writer.Close()

req, _ := http.NewRequest("POST",
\t"https://your-instance.com/upload", body)
req.Header.Set("Authorization", "Bearer "+apiKey)
req.Header.Set("Content-Type", writer.FormDataContentType())
resp, _ := http.DefaultClient.Do(req)`,
    rust: `let file_part = multipart::Part::bytes(bytes)
    .file_name("photo.jpg")
    .mime_str("image/jpeg")?;

let form = multipart::Form::new()
    .part("files", file_part)
    .text("transformations",
        r#"["w_800,h_600,f_webp,q_80"]"#);

let res = reqwest::Client::new()
    .post("https://your-instance.com/upload")
    .bearer_auth(&api_key)
    .multipart(form)
    .send().await?;`,
  };

  const currentLang = langMap[code];

  return (
    <div className="bg-background relative z-10 max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-border pt-6 shadow-lg shadow-black/5">
      <div className="relative z-10 px-3">
        <div className="flex gap-1.5 px-3">
          <div className="bg-muted-foreground/10 border-foreground/5 size-2 rounded-full border"></div>
          <div className="bg-muted-foreground/10 border-foreground/5 size-2 rounded-full border"></div>
          <div className="bg-muted-foreground/10 border-foreground/5 size-2 rounded-full border"></div>
        </div>

        <div className="relative mt-4 flex gap-1 overflow-x-auto">
          <motion.span
            animate={{ x: indicatorLeft, width: indicatorWidth }}
            layout
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="bg-foreground/5 border-foreground/5 absolute inset-y-0 -left-4 flex rounded-full border"
          />

          {codeBlockConfigs.map(({ name, value, ref }) => {
            const IconComponent = iconMap[value];
            return (
              <button
                key={name}
                ref={ref}
                onClick={() => setCode(value)}
                data-state={code === value ? "active" : ""}
                className="data-[state=active]:text-foreground z-10 flex h-8 items-center gap-1.5 rounded-full px-3 text-sm duration-150 hover:opacity-50 data-[state=active]:hover:opacity-100"
              >
                {IconComponent && <IconComponent className="size-4 shrink-0" />}
                <span className="text-nowrap font-medium">{name}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="h-76">
        <CodeBlock
          code={codes[code]}
          lang={currentLang}
          maxHeight={360}
          theme="github-light"
          lineNumbers
          className="[&_pre]:mask-y-from-85% [&_pre]:h-74 -mx-1 [&_pre]:min-h-[12rem] [&_pre]:rounded-xl [&_pre]:border-none [&_pre]:!bg-transparent"
        />
      </div>
    </div>
  );
}
