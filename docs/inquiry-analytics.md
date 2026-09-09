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
