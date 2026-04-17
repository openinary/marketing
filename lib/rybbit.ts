declare global {
  interface Window {
    rybbit?: {
      event: (name: string, props?: Record<string, string | number>) => void;
      pageview: () => void;
    };
  }
}

export function trackEvent(name: string, props?: Record<string, string | number>) {
  if (typeof window !== "undefined") {
    window.rybbit?.event(name, props);
  }
}
