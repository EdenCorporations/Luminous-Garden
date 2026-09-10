const ts = require('typescript');
const vm = require('node:vm');
const fs = require('node:fs');
const assert = require('node:assert/strict');
function setup(referrer, search = '') {
  let config; const events = []; const exports = {};
  const sdk = {init: (_, c) => config = c, capture: (event, properties) => events.push(config.before_send({event, properties: {...properties, email: 'PRIVATE', ai_prompt_text: 'PRIVATE', $referrer: 'PRIVATE'}}))};
  vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/lib/analytics.ts', 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS}}).outputText, {
    exports, require: () => ({default: sdk}), URL, URLSearchParams,
    document: {referrer}, window: {location: {hostname: 'www.edencorp.org', search}},
  });
  return {...exports, events, get config() {return config}};
}
const a = setup('https://chatgpt.com/c/private', '?tin_test=1');
for (const host of ['chatgpt.com', 'chat.openai.com', 'claude.ai', 'perplexity.ai', 'gemini.google.com', 'copilot.microsoft.com']) assert.equal(a.classifyReferrer(`https://${host}/private`), 'ai');
assert.equal(a.classifyReferrer('', '?utm_source=chatgpt.com'), 'ai');
assert.equal(a.classifyReferrer('https://chatgpt.com.evil.test'), 'other');
assert.equal(a.classifyReferrer('https://www.google.co.in/search?q=private'), 'search');
assert.equal(a.classifyReferrer('https://www.edencorp.org/'), 'unknown');
assert.equal(a.classifyReferrer('bad-url'), 'unknown');
assert.equal(a.classifyReferrer(''), 'direct');
a.captureInquiryEvent('$pageview', '/');
a.captureInquiryEvent('$pageview', '/contact');
a.captureInquiryEvent('$pageview', '/contact');
a.captureInquiryEvent('inquiry_source', '/contact', {source: 'ai', prompt: 'A CRM integration for PRIVATE@example.test'});
a.captureInquiryEvent('inquiry_succeeded'); a.captureInquiryEvent('inquiry_succeeded');
assert.equal(a.events.filter(e=>e.event === 'qa_contact_visit_ai').length, 1);
assert.equal(a.events.filter(e=>e.event === 'qa_contact_success_ai').length, 1);
assert.equal(a.events.find(e=>e.event === 'qa_inquiry_source').properties.ai_prompt_topic, 'integrations');
assert(!JSON.stringify(a.events).includes('PRIVATE'));
assert(a.events.every(e=>e.event.startsWith('qa_') && e.properties.referrer_channel === 'ai'));
assert.equal(a.promptTopic(' '.repeat(200) + 'CRM'), 'not_provided');
a.captureInquiryEvent('inquiry_source', '/contact', {source: 'search', prompt: 'PRIVATE'});
assert.equal(a.events.at(-1).properties.ai_prompt_topic, undefined);
const b = setup('https://www.google.com/search?q=private');
b.captureInquiryEvent('$pageview', '/contact');b.captureInquiryEvent('inquiry_succeeded');
assert.deepEqual(b.events.map(e=>e.event), ['$pageview', 'contact_visit_search', 'inquiry_succeeded', 'contact_success_search']);
assert.equal(b.events[0].properties.is_test, false);
console.log('PASS: AI/search/direct/unknown, spoof resistance, QA separation, one denominator and numerator per document, text reduction and private-property stripping.');
