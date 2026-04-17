"use client";

import { MailIcon, CheckIcon } from "lucide-react";
import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { submitWaitlist } from "@/app/actions/waitlist";
import { trackEvent } from "@/lib/rybbit";

const initialState = { success: false, error: undefined as string | undefined };

export function WaitlistModal({ trigger }: { trigger: React.ReactNode }) {
  const [state, formAction, isPending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => {
      return submitWaitlist(formData);
    },
    initialState
  );

  useEffect(() => {
    if (state.success) {
      trackEvent("waitlist_submitted");
    }
  }, [state.success]);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <div className="mb-2 flex flex-col items-center gap-2">
          <div
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
          >
            {state.success ? (
              <CheckIcon className="size-5 text-foreground" />
            ) : (
              <MailIcon className="size-5 text-foreground" />
            )}
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              {state.success ? "You're on the list!" : "Join the Cloud waitlist"}
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              {state.success
                ? "We'll notify you when Openinary Cloud launches."
                : "Be the first to know when Openinary Cloud launches."}
            </DialogDescription>
          </DialogHeader>
        </div>

        {!state.success && (
          <form action={formAction} className="space-y-5">
            <div className="relative">
              <Input
                aria-label="Email"
                className="peer ps-9"
                id="waitlist-email"
                name="email"
                placeholder="hi@yourcompany.com"
                type="email"
                required
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <MailIcon aria-hidden="true" size={16} />
              </div>
            </div>

            {state.error && (
              <p className="text-sm text-destructive">{state.error}</p>
            )}

            <Button className="w-full" type="submit" disabled={isPending}>
              {isPending ? "Joining…" : "Join waitlist"}
            </Button>
          </form>
        )}

        <p className="text-center text-muted-foreground text-xs">
          By joining you agree to our{" "}
          <a className="underline hover:no-underline" href="/privacy">
            Privacy Policy
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
