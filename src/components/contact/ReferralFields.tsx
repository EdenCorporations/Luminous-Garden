"use client";

import { useEffect, useState } from "react";

const choices = [
  ["search", "A search engine"],
  ["friend", "A friend or colleague"],
  ["social", "Social media"],
  ["directory", "A directory or review site"],
  ["other", "Other"],
];
const ai = ["ai", "An AI assistant"];

export function ReferralFields({ value, onChange }: {
  value: { source: string; prompt: string };
  onChange: (value: { source: string; prompt: string }) => void;
}) {
  const [options, setOptions] = useState([...choices, ai]);
  useEffect(() => {
    const shuffled = [...choices];
    shuffled.splice(Math.floor(Math.random() * (choices.length + 1)), 0, ai);
    // Randomize after hydration without changing the visitor's selection.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOptions(shuffled);
  }, []);
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="referral-source" className="block text-sm text-text-secondary mb-2">
          Where did you find us? <span className="text-xs">(optional)</span>
        </label>
        <select id="referral-source" value={value.source}
          className="w-full min-h-11 bg-surface border border-border rounded-sm px-3 text-sm text-text focus:outline-none focus:border-ember"
          onChange={e => onChange({ source: e.target.value, prompt: "" })}>
          <option value="">Choose a source</option>
          {options.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
        </select>
      </div>
      {value.source === "ai" && (
        <div>
          <label htmlFor="ai-prompt" className="block text-sm text-text-secondary mb-2">
            What did you ask it? <span className="text-xs">(optional)</span>
          </label>
          <input id="ai-prompt" type="text" maxLength={200} autoComplete="off"
            aria-describedby="ai-prompt-help" value={value.prompt}
            className="w-full bg-transparent border-b border-border text-text py-2 focus:outline-none focus:border-ember"
            onChange={e => onChange({ ...value, prompt: e.target.value.slice(0, 200) })} />
          <span id="ai-prompt-help" className="block mt-2 text-xs text-text-secondary">
            Skip personal or confidential details. We record only a topic category, not your text. Maximum 200 characters.
          </span>
        </div>
      )}
    </div>
  );
}
