import { getOriginalDesignSnapshot } from "@/lib/original-design";

export function DesignReplica() {
  const { rootHtml } = getOriginalDesignSnapshot();

  return (
    <>
      {/*
        Le markup source est conservé intégralement pour garantir la fidélité visuelle.
        display: contents évite d'introduire une vraie boîte de layout supplémentaire.
      */}
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: rootHtml }} />
    </>
  );
}
