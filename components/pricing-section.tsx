import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import * as PricingCard from "@/components/pricing-card";
import { CheckCircle2, Server, Cloud, Building2 } from "lucide-react";
import Link from "next/link";
import { FullWidthDivider } from "@/components/ui/full-width-divider";
import { WaitlistModal } from "@/components/waitlist-modal";
import { EnterpriseModal } from "@/components/enterprise-modal";

export function PricingSection() {
	return (
		<section className="w-full py-10 md:py-20">
			<div className="mx-auto mb-8 max-w-2xl px-6 text-center">
				<h2 className="text-3xl font-semibold tracking-tight lg:text-4xl mb-4">
					Free to self-host. Open source forever.
				</h2>
				<p className="text-muted-foreground leading-relaxed">
					No paywalled features. No vendor lock-in. Deploy on your own infrastructure for free, or let us manage it when you&apos;re ready.
				</p>
			</div>
			<div className="mx-auto grid w-full max-w-4xl gap-4 px-6 md:grid-cols-3">
				{plans.map((plan, index) => (
					<PricingCard.Card
						className={cn("w-full max-w-full", index === 1 && "md:scale-105")}
						key={plan.name}
					>
						<PricingCard.Header isPopular={index === 1}>
							<PricingCard.Plan>
								<PricingCard.PlanName>
									{plan.icon}
									<span>{plan.name}</span>
								</PricingCard.PlanName>
								{plan.badge && (
									<PricingCard.Badge>{plan.badge}</PricingCard.Badge>
								)}
							</PricingCard.Plan>
							<PricingCard.Price>
								<PricingCard.MainPrice>{plan.price}</PricingCard.MainPrice>
								{plan.period && (
									<PricingCard.Period>{plan.period}</PricingCard.Period>
								)}
							</PricingCard.Price>
							{plan.cta}
						</PricingCard.Header>

						<PricingCard.Body>
							<PricingCard.Description>
								{plan.description}
							</PricingCard.Description>
							<PricingCard.List>
								{plan.features.map((item) => (
									<PricingCard.ListItem className="text-xs" key={item}>
										<CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-foreground" />
										<span>{item}</span>
									</PricingCard.ListItem>
								))}
							</PricingCard.List>
						</PricingCard.Body>
					</PricingCard.Card>
				))}
			</div>
			<FullWidthDivider position="bottom" />
		</section>
	);
}

const plans = [
	{
		icon: <Server />,
		name: "Self-hosted",
		price: "Free",
		badge: undefined,
		description: "Run Openinary on your own infrastructure. Full control, no lock-in.",
		features: [
			"All features included",
			"Docker-based setup in 5 minutes",
			"Works with any S3-compatible storage",
			"Image & video transformations via URL",
			"Upload API + media browser UI",
			"Cloudinary-compatible syntax",
			"AGPL 3.0 license",
		],
		cta: (
			<Button
				asChild
				variant="outline"
				className="w-full font-semibold"
				data-rybbit-event="quickstart_clicked"
				data-rybbit-prop-location="pricing"
			>
				<Link href="https://docs.openinary.dev/quickstart" target="_blank">
					Self-host with Docker
				</Link>
			</Button>
		),
	},
	{
		icon: <Cloud />,
		name: "Cloud",
		price: "$20",
		period: "/month",
		badge: "Popular",
		description: "We handle the hosting. Includes a generous monthly quota, then pay as you go.",
		features: [
			"Managed infrastructure & updates",
			"Generous monthly quota included",
			"Then pay per transformation, GB stored & bandwidth",
			"Bring your own S3 bucket (optional)",
			"Analytics dashboard",
			"Priority support",
		],
		cta: (
			<WaitlistModal
				trigger={
					<Button
						className="w-full font-semibold"
						data-rybbit-event="cloud_waitlist_clicked"
						data-rybbit-prop-location="pricing"
					>
						Join the waitlist
					</Button>
				}
			/>
		),
	},
	{
		icon: <Building2 />,
		name: "Enterprise",
		price: "Custom",
		period: undefined,
		badge: undefined,
		description: "Tailored for large-scale deployments. Ideal for teams migrating from Cloudinary.",
		features: [
			"Everything in Cloud",
			"Dedicated infrastructure",
			"Volume pricing & custom contracts",
			"SLA guarantees",
			"Onboarding & migration support",
			"Dedicated account manager",
			"Custom integrations",
		],
		cta: (
			<EnterpriseModal
				trigger={
					<Button
						variant="outline"
						className="w-full font-semibold"
						data-rybbit-event="enterprise_contact_clicked"
						data-rybbit-prop-location="pricing"
					>
						Contact us
					</Button>
				}
			/>
		),
	},
];
