"use client";
import { useEffect, useRef } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

// Public booking page of the Novaly Agency Cal.com account (free 15-minute call).
export const CAL_LINK = "novaly-agency-hlvwdx/15min";
const NAMESPACE = "novaly";

// The embed keeps one listener list per namespace for the whole page lifetime, so the
// listener is registered once and always calls the handler of the mounted component.
let registered = false;
let currentHandler: (() => void) | null = null;

type CalBookingProps = {
  /** Called once when a visitor confirms a booking. */
  onBooked: () => void;
};

export function CalBooking({ onBooked }: CalBookingProps) {
  const handlerRef = useRef(onBooked);
  handlerRef.current = onBooked;

  useEffect(() => {
    const handler = () => handlerRef.current();
    currentHandler = handler;
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: { light: { "cal-brand": "#9fe870" }, dark: { "cal-brand": "#9fe870" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      if (!registered) {
        registered = true;
        cal("on", { action: "bookingSuccessfulV2", callback: () => currentHandler?.() });
      }
    })();
    return () => {
      if (currentHandler === handler) currentHandler = null;
    };
  }, []);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: "100%", minHeight: "640px", overflow: "auto" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
