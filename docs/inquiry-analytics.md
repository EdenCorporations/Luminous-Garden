# Inquiry analytics

Managed PostHog project: 601326. Ingestion host: https://us.i.posthog.com.
The client ingestion key is public and stored in src/lib/analytics.ts.
Vercel Analytics remains installed.

| Event | Trigger |
|---|---|
| $pageview | Initial route and client-side route changes |
| inquiry_started | First change to a contact text field per mounted form |
| inquiry_submitted | Valid form submission, before EmailJS |
| inquiry_succeeded | EmailJS resolves successfully |
| inquiry_failed | EmailJS rejects or configuration validation fails |

Read the funnel as /contact page view → started → submitted → succeeded.
Failures are a separate result of submitted. Success means provider acceptance,
not proof of inbox receipt. The start event covers text fields, not budget-only changes.

Only public route metadata and anonymous in-memory delivery/session identifiers
are retained. No cookies, persistent storage, person profiles, replay, autocapture,
form values, referrers, or URL queries are sent. Unknown routes become /other.
Full reloads reset identity, so this measures within-visit flow, not returning users.
Localhost events carry is_test=true and should be excluded from reporting.

Run `node scripts/check-analytics.mjs` for privacy and failure-isolation checks.
Production builds use `npm run build`. The local database's PostHog collector
provides read-back after its next successful sync; HTTP acceptance alone does
not prove that a report has refreshed.

## Referral attribution

The contact form asks an optional source question and, for AI, an optional 200-character prompt.
The AI option changes position after each page load. Switching source clears the prompt.
`inquiry_source` records the first source answer on a valid submission per mounted form.
It carries a fixed `source` and, for AI, a locally derived `ai_prompt_topic` enum.
Raw prompt text never leaves the browser and is cleared after that capture attempt.
It never enters EmailJS, storage, person properties, or analytics payloads.
Topic mapping is a coarse keyword heuristic, not a copy of the question or a reliable intent inference.
No legal page is changed. Existing legal replacements remain under their own approval.

Every explicit event carries `referrer_channel`: ai, search, direct, other, or unknown.
Known AI hosts and exact `utm_source=chatgpt.com` count as AI. Raw URLs and queries are discarded.
The channel is fixed for this document lifetime, including client-side navigation.
Self-reported source remains separate from the referrer channel; neither overwrites the other.
No cookies or person profiles are added. A full reload starts a new anonymous document visit.

`contact_visit_<channel>` fires once when /contact is viewed in a document.
`contact_success_<channel>` fires at most once after provider acceptance in that same document,
only if its contact visit was recorded. Retried submissions do not inflate this numerator.
All marked tests have qa_ event names, including channel events.
The event-count mirror can support tracked contact-visit conversion as successes / contact visits,
separately for AI and search over the same complete post-deployment window. It cannot count unique
people, landing-to-inquiry conversion, self-reported source conversion, or company receipt.
Missing referrers do not rule out AI influence. Do not combine historical tests with this series.

Verification: `node scripts/test-attribution.cjs`, plus the existing analytics and feedback tests.
