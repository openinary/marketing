"use client";

import { OpenPolicy } from "@openpolicy/react";
import { PrivacyPolicy } from "@/components/ui/openpolicy/privacy-policy";
import type { OpenPolicyConfig } from "@openpolicy/sdk";

const theme = {
  "--op-heading-color": "var(--foreground)",
  "--op-body-color": "var(--muted-foreground)",
  "--op-border-color": "var(--border)",
  "--op-link-color": "var(--foreground)",
  "--op-link-color-hover": "var(--muted-foreground)",
} as const;

export function PrivacyPolicyClient({ config }: { config: OpenPolicyConfig }) {
  return (
    <OpenPolicy config={config} theme={theme}>
      <PrivacyPolicy config={config} />
    </OpenPolicy>
  );
}
