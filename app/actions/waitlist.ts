"use server";

import arcjet, { validateEmail, request } from "@arcjet/next";
import { LogSnag } from "@logsnag/next/server";

// Initialize Arcjet only if key is available
const getArcjetInstance = () => {
  const key = process.env.ARCJET_KEY;
  if (!key) {
    return null;
  }
  return arcjet({
    key,
    rules: [
      validateEmail({
        mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
        // block disposable, invalid, and email addresses with no MX records
        deny: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
      }),
    ],
  });
};

export async function submitWaitlist(formData: FormData) {
  try {
    const email = formData.get("email") as string;

    if (!email) {
      return {
        success: false,
        error: "Email is required",
      };
    }

    // Validate email with Arcjet if configured
    const aj = getArcjetInstance();
    if (aj) {
      try {
        // Use Arcjet's request() helper for server actions
        const req = await request();

        // Protect the request with Arcjet email validation
        const decision = await aj.protect(req, {
          email,
        });

        if (decision.isDenied()) {
          if (decision.reason.isEmail()) {
            const emailTypes = decision.reason.emailTypes;
            
            let message: string;
            if (emailTypes.includes("INVALID")) {
              message = "Email address format is invalid. Is there a typo?";
            } else if (emailTypes.includes("DISPOSABLE")) {
              message = "We do not allow disposable email addresses.";
            } else if (emailTypes.includes("NO_MX_RECORDS")) {
              message = "Your email domain does not have an MX record. Is there a typo?";
            } else {
              message = "Invalid email address.";
            }

            return {
              success: false,
              error: message,
            };
          }

          return {
            success: false,
            error: "Request denied",
          };
        }
      } catch (arcjetError) {
        // Log Arcjet errors but don't block the request
        console.error("Arcjet validation error:", arcjetError);
        // Continue without Arcjet validation if it fails
      }
    }

    // If validation passes (or Arcjet is not configured), track the waitlist entry
    const logsnagToken = process.env.LOGSNAG_TOKEN;
    const logsnagProject = process.env.LOGSNAG_PROJECT || "openinary";
    
    if (logsnagToken) {
      const logsnag = new LogSnag({
        token: logsnagToken,
        project: logsnagProject,
      });
      
      await logsnag.track({
        channel: "waitlist",
        event: "New Waitlist Entry",
        user_id: email,
        icon: "📫",
        notify: true,
      });
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong. Please try again later.",
    };
  }
}

