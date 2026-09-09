import posthog from "posthog-js";

let initialized = false;
const events = new Set([
  "$pageview", "inquiry_started", "inquiry_submitted", "inquiry_succeeded", "inquiry_failed",
]);

export function captureInquiryEvent(event: string, route = "/contact") {
  if (typeof window === "undefined" || !events.has(event)) return;
  try {
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
          if (!payload || !events.has(payload.event)) return null;
          // Explicit allowlist: no URL queries, referrers, form values, or identities.
          const { token, distinct_id, $session_id, $lib, $lib_version, route } = payload.properties;
          payload.properties = {
            token, distinct_id, $session_id, $lib, $lib_version, route,
            is_test: window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost",
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
    const publicRoute = ["/", "/about", "/contact", "/orchard", "/prism", "/privacy", "/terms"].includes(route) ? route : "/other";
    posthog.capture(event, { route: publicRoute });
  } catch {
    // Analytics must never interrupt the inquiry or its delivery result.
  }
}
