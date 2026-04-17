"use server";

import { LogSnag } from "@logsnag/next/server";

export async function submitEnterprise(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const teamSize = formData.get("teamSize") as string;
    const monthlyVolume = formData.get("monthlyVolume") as string;
    const message = formData.get("message") as string;

    if (!email || !company) {
      return { success: false, error: "Email and company are required" };
    }

    const logsnagToken = process.env.LOGSNAG_TOKEN;
    const logsnagProject = process.env.LOGSNAG_PROJECT || "openinary";

    if (logsnagToken) {
      const logsnag = new LogSnag({
        token: logsnagToken,
        project: logsnagProject,
      });

      await logsnag.track({
        channel: "enterprise",
        event: "New Enterprise Request",
        user_id: email,
        icon: "🏢",
        description: `Company: ${company} | Team: ${teamSize || "N/A"} | Volume: ${monthlyVolume || "N/A"}${message ? ` | Message: ${message}` : ""}`,
        tags: {
          company,
          ...(teamSize && { team_size: teamSize }),
          ...(monthlyVolume && { monthly_volume: monthlyVolume }),
        },
        notify: true,
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Enterprise submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong. Please try again later.",
    };
  }
}
