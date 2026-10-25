import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const source = fs.readFileSync('src/lib/analytics.ts', 'utf8');
let config;
const sent = [];
const sdk = {
  init: (_, value) => { config = value; },
  capture: (event, properties) => sent.push(config.before_send({ event, properties: {
    token: 'public-test-key', distinct_id: 'test-only', ...properties, email: 'private@example.test',
    $current_url: 'https://www.edencorp.org/contact?email=private@example.test',
    $referrer: 'https://example.test/private', $set: {name: 'Private'},
  }})),
};
const output = {};
vm.runInNewContext(ts.transpileModule(source, {compilerOptions: {module: ts.ModuleKind.CommonJS}}).outputText, {
  exports: output, require: () => ({default: sdk}), window: {location: {hostname: "localhost"}},
});
output.captureInquiryEvent('inquiry_submitted');
assert.equal(sent.length, 1);
assert.equal(sent[0].properties.token, "public-test-key");
assert.equal(config.disable_persistence, true);
assert.equal(config.person_profiles, 'never');
assert.equal(config.autocapture, false);
assert.equal(config.disable_session_recording, true);
assert.equal(config.ip, false);
assert.equal(sent[0].properties.$current_url, 'https://www.edencorp.org/contact');
assert.equal(sent[0].properties.$process_person_profile, false);
assert.equal(JSON.stringify(sent).includes('private'), false);
assert.equal(JSON.stringify(sent).includes('Private'), false);
assert.equal(config.before_send({event: '$autocapture', properties: {}}), null);
output.captureInquiryEvent('private_event');
assert.equal(sent.length, 1);
output.captureInquiryEvent('inquiry_failed', '/contact', {failure_type: 'network'});
assert.equal(sent.length, 2);
assert.equal(sent[1].event, 'qa_inquiry_failed');
assert.equal(sent[1].properties.failure_type, 'network');
assert.equal(sent[1].properties.request_stage, 'emailjs_send');
assert.equal(sent[1].properties.distinct_id, 'anonymous_inquiry_failure');
assert.equal(sent[1].properties.$session_id, undefined);
assert.equal(JSON.stringify(sent[1]).includes('private'), false);
output.captureInquiryEvent('inquiry_failed', '/contact', {failure_type: 'private@example.test'});
assert.equal(sent.at(-1).properties.failure_type, undefined);
sdk.capture = () => { throw new Error('unavailable'); };
assert.doesNotThrow(() => output.captureInquiryEvent('inquiry_succeeded'));
console.log('Analytics privacy and failure isolation checks passed.');

// Exercise the real form handler with a stub provider; no network or customer email.
const contactOutput = {};
let providerFails = false;
const formEvents = [];
const jsx = (type, props) => ({type, props});
vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/app/contact/page.tsx', 'utf8'), {
  compilerOptions: {module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX},
}).outputText, {
  exports: contactOutput, process: {env: {}},
  require: (name) => {
    if (name === 'react') return {useState: (initial) => [initial, () => {}], useRef: () => ({current: false})};
    if (name === 'react/jsx-runtime') return {jsx, jsxs: jsx};
    if (name === 'motion/react') return {motion: {div: 'div', button: 'button'}};
    if (name === '@/lib/analytics') return {captureInquiryEvent: (event, _route, attribution) => formEvents.push({event, attribution})};
    if (name === '@emailjs/browser') return {default: {send: async () => {if (providerFails) throw {status: 0};}}};
    return {};
  },
  window: {setTimeout: () => 1, clearTimeout: () => {}}, navigator: {onLine: true},
});
function findForm(node) {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'form') return node;
  for (const child of [node.props?.children].flat(Infinity)) {const result = findForm(child);if (result) return result;}
}
const form = findForm(contactOutput.default());
assert.ok(form);
await form.props.onSubmit({preventDefault() {}});
assert.deepEqual(formEvents.map(item => item.event), ['inquiry_submitted', 'inquiry_succeeded']);
formEvents.length = 0;
providerFails = true;
await form.props.onSubmit({preventDefault() {}});
assert.deepEqual(formEvents.map(item => item.event), ['inquiry_submitted', 'inquiry_failed', 'inquiry_failed_network']);
assert.equal(formEvents[1].attribution.failure_type, 'network');
console.log('Contact success and failure event ordering passed with a stub provider.');
