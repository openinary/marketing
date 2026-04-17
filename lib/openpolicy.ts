import { defineConfig } from "@openpolicy/sdk";

export default defineConfig({
  company: {
    name: "Openinary",
    legalName: "Florian Heysen",
    address: "France",
    contact: "privacy@openinary.dev",
  },
  privacy: {
    effectiveDate: "2026-04-17",
    dataCollected: {
      "Account Information": ["Email address", "Username"],
      "Usage Data": ["Pages visited", "Features used", "Time spent on site"],
      "Technical Data": ["IP address", "Browser type", "Device information"],
      "Media Files": ["Images and videos uploaded by the user"],
    },
    legalBasis: ["legitimate_interests", "consent", "contract"],
    retention: {
      "Account data": "As long as your account is active or as required by law",
      "Usage data": "Up to 12 months",
      "Media files": "Until deletion by the user or account termination",
    },
    cookies: {
      essential: true,
      analytics: true,
      marketing: false,
    },
    thirdParties: [
      { name: "Hetzner Cloud", purpose: "Server hosting and infrastructure" },
      { name: "Cloudflare", purpose: "Edge delivery and DDoS protection" },
      { name: "Ahrefs", purpose: "Web analytics" },
      { name: "LogSnag", purpose: "Event tracking" },
    ],
    userRights: ["access", "erasure", "portability", "rectification", "restriction"],
    jurisdictions: ["eu"],
  },
  cookie: {
    effectiveDate: "2026-04-17",
    cookies: {
      essential: true,
      analytics: true,
      marketing: false,
    },
    jurisdictions: ["eu"],
  },
});
