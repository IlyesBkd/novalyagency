/**
 * Type declarations for Google gtag.js
 * Used for Google Ads conversion tracking
 */

interface GtagEventParams {
  send_to?: string;
  value?: number;
  currency?: string;
  transaction_id?: string;
  [key: string]: unknown;
}

interface GtagConfigParams {
  page_path?: string;
  page_title?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    gtag?: {
      (command: "event", action: string, params?: GtagEventParams): void;
      (command: "config", targetId: string, params?: GtagConfigParams): void;
      (command: "js", date: Date): void;
      (...args: unknown[]): void;
    };
    dataLayer?: unknown[];
  }
}

export {};
