import { SmartCta } from "./SmartCta";

export function SectionCta({ text = "Recevoir mon design gratuit" }: { text?: string }) {
  return <SmartCta variant="inline" ctaLabel={text} />;
}
