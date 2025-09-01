// Global type declarations

declare global {
  interface Window {
    va: (event: string, data?: unknown) => void;
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export {};
