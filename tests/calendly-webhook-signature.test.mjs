import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import test from "node:test";
import { verifyCalendlyWebhookSignature } from "../lib/calendly-webhook-signature.ts";

const signingKey = "unit-test-signing-key";
const now = 1_700_000_000_000;

function signatureFor(rawBody, timestamp) {
  const digest = createHmac("sha256", signingKey)
    .update(`${timestamp}.${rawBody}`, "utf8")
    .digest("hex");
  return `t=${timestamp},v1=${digest}`;
}

test("accepts a valid Calendly signature for the exact raw body", () => {
  const rawBody = '{"event":"invitee.created"}';
  const timestamp = Math.floor(now / 1_000);

  assert.equal(
    verifyCalendlyWebhookSignature(
      rawBody,
      signatureFor(rawBody, timestamp),
      signingKey,
      now
    ),
    true
  );
});

test("rejects a signature when the raw request body changes", () => {
  const signedBody = '{"event":"invitee.created"}';
  const timestamp = Math.floor(now / 1_000);

  assert.equal(
    verifyCalendlyWebhookSignature(
      `${signedBody} `,
      signatureFor(signedBody, timestamp),
      signingKey,
      now
    ),
    false
  );
});

test("rejects a signature outside the three-minute replay window", () => {
  const rawBody = '{"event":"invitee.created"}';
  const timestamp = Math.floor(now / 1_000) - 181;

  assert.equal(
    verifyCalendlyWebhookSignature(
      rawBody,
      signatureFor(rawBody, timestamp),
      signingKey,
      now
    ),
    false
  );
});

test("rejects timestamps too far in the future", () => {
  const rawBody = '{"event":"invitee.created"}';
  const timestamp = Math.floor(now / 1_000) + 181;

  assert.equal(
    verifyCalendlyWebhookSignature(
      rawBody,
      signatureFor(rawBody, timestamp),
      signingKey,
      now
    ),
    false
  );
});

test("rejects missing keys and malformed signature headers", () => {
  assert.equal(verifyCalendlyWebhookSignature("{}", null, signingKey, now), false);
  assert.equal(verifyCalendlyWebhookSignature("{}", "t=1700000000,v1=xyz", signingKey, now), false);
  assert.equal(verifyCalendlyWebhookSignature("{}", "t=1700000000,v1=abc", "", now), false);
});
