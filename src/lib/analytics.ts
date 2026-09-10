import posthog from "posthog-js";

let initialized = false;
let internalTest = false;
let initialChannel: string | undefined;
let contactViewCaptured = false;
let contactSuccessCaptured = false;
const channels = new Set(["ai", "search", "direct", "other", "unknown"]);
const sources = new Set(["ai", "search", "friend", "social", "directory", "other"]);
const topics = new Set(["admin", "reporting", "integrations", "website", "other", "not_provided"]);

export function classifyReferrer(referrer: string, search = "") {
  const aiHosts = ["chatgpt.com", "chat.openai.com", "claude.ai", "perplexity.ai", "gemini.google.com", "copilot.microsoft.com"];
  const matches = (host: string, root: string) => host === root || host.endsWith(`.${root}`);
  try {
    const utm = new URLSearchParams(search).get("utm_source")?.toLowerCase();
    if (utm && aiHosts.includes(utm)) return "ai";
    if (!referrer) return "direct";
    const host = new URL(referrer).hostname.toLowerCase();
    if (aiHosts.some(root => matches(host, root))) return "ai";
    if (["google.com", "google.co.uk", "google.co.in", "google.ca", "google.com.au", "bing.com", "duckduckgo.com", "search.yahoo.com", "search.brave.com", "ecosia.org"].some(root => matches(host, root))) return "search";
    if (matches(host, "edencorp.org")) return "unknown";
    return "other";
  } catch { return "unknown"; }
}

// Reduce deliberate feedback locally. No raw text or person properties leave the browser.
export function promptTopic(text: string) {
  const value = text.slice(0, 200).trim().toLowerCase();
  if (!value) return "not_provided";
  if (/\b(dashboard|report|reporting)\b/.test(value)) return "reporting";
  if (/\b(integrate|integration|integrations|connect|crm)\b/.test(value)) return "integrations";
  if (/\b(website|websites|site)\b/.test(value)) return "website";
  if (/\b(admin|invoice|invoices|spreadsheet|spreadsheets)\b/.test(value)) return "admin";
  return "other";
}
const events = new Set([
  "inquiry_source",
  ...["ai", "search", "direct", "other", "unknown"].flatMap(channel => [`contact_visit_${channel}`, `contact_success_${channel}`]),
  "$pageview", "inquiry_started", "inquiry_submitted", "inquiry_succeeded", "inquiry_failed", "inquiry_invalid", "orchard_empty",
  "feedback_admin", "feedback_reporting", "feedback_integrations", "feedback_website", "feedback_other",
]);

export function captureInquiryEvent(event: string, route = "/contact", attribution: { source?: string; prompt?: string } = {}) {
  if (typeof window === "undefined" || !events.has(event)) return;
  try {
    // Keep the explicit QA marker in memory across client-side navigation only.
    internalTest ||= window.location.hostname === "127.0.0.1"
      || window.location.hostname === "localhost"
      || new URLSearchParams(window.location.search).get("tin_test") === "1";
    if (initialChannel === undefined) {
      initialChannel = typeof document === "undefined" ? "unknown" : classifyReferrer(document.referrer, window.location.search);
    }
    if (!initialized) {
      posthog.init("phc_CbGQK3TZ2ux3zJQdbsVMiedurF5XWLmiAVvDnjHMSH5Q", {
        api_host: "https://us.i.posthog.com",
        persistence: "memory",
        disable_persistence: true,
        person_profiles: "never",
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: false,
        disable_session_recording: true,
        disable_surveys: true,
        advanced_disable_feature_flags: true,
        ip: false,
        save_referrer: false,
        before_send: (payload) => {
          if (!payload) return null;
          const baseEvent = payload.event.startsWith("qa_") ? payload.event.slice(3) : payload.event;
          if (!events.has(baseEvent)) return null;
          // Explicit allowlist: no URL queries, referrers, form values, or identities.
          const { token, distinct_id, $session_id, $lib, $lib_version, route, is_test, referrer_channel, source, ai_prompt_topic } = payload.properties;
          payload.properties = {
            token, distinct_id, $session_id, $lib, $lib_version, route,
            is_test: is_test === true,
            referrer_channel: channels.has(referrer_channel) ? referrer_channel : "unknown",
            ...(baseEvent === "inquiry_source" && sources.has(source) ? {
              source,
              ...(source === "ai" && topics.has(ai_prompt_topic) ? { ai_prompt_topic } : {}),
            } : {}),
            $current_url: `https://www.edencorp.org${route}`,
            $process_person_profile: false,
            $geoip_disable: true,
            $ip: null,
          };
          return payload;
        },
      });
      initialized = true;
    }
    const publicRoute = ["/", "/about", "/contact", "/orchard", "/prism", "/privacy", "/terms", "/compare/zapier-vs-make", "/compare/n8n-vs-zapier", "/alternatives/zapier"].includes(route) ? route : "/other";
    // The reporting mirror groups by event, not properties. Separate QA by name.
    posthog.capture(internalTest ? `qa_${event}` : event, {
      route: publicRoute, is_test: internalTest, referrer_channel: initialChannel,
      ...(event === "inquiry_source" && sources.has(attribution.source ?? "") ? {
        source: attribution.source,
        ...(attribution.source === "ai" ? { ai_prompt_topic: promptTopic(attribution.prompt ?? "") } : {}),
      } : {}),
    });
    // One tracked contact visit and provider-accepted success per document lifetime.
    // Event names make channel denominators available in the count-only mirror.
    if (event === "$pageview" && publicRoute === "/contact" && !contactViewCaptured) {
      contactViewCaptured = true;
      captureInquiryEvent(`contact_visit_${initialChannel}`);
    }
    if (event === "inquiry_succeeded" && contactViewCaptured && !contactSuccessCaptured) {
      contactSuccessCaptured = true;
      captureInquiryEvent(`contact_success_${initialChannel}`);
    }
  } catch {
    // Analytics must never interrupt the inquiry or its delivery result.
  }
}
