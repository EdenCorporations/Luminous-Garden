(function () {
  // A marked QA session must never load Google's tag, even after a full reload.
  var internalTest = new URLSearchParams(window.location.search).get('tin_test') === '1';
  var production = /^(www\.)?edencorp\.org$/.test(window.location.hostname);
  try {
    internalTest = internalTest || sessionStorage.getItem('tin_ad_test') === '1';
    if (internalTest) sessionStorage.setItem('tin_ad_test', '1');
  } catch {
    // The URL still excludes this document if browser storage is unavailable.
  }
  if (!production || internalTest) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  // Set privacy controls before any config/event and before loading remote code.
  // https://developers.google.com/tag-platform/security/guides/consent
  window.gtag('consent', 'default', { ad_user_data: 'denied' });
  window.gtag('set', 'user_data', {});
  window.gtag('js', new Date());
  window.gtag('config', 'AW-18446644911', { user_data: {} });

  var script = document.createElement('script');
  script.id = 'google-ads-loader';
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18446644911';
  document.head.appendChild(script);
})();
