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
  value: { source: string };
  onChange: (value: { source: string }) => void;
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
          onChange={e => onChange({ source: e.target.value })}>
          <option value="">Choose a source</option>
          {options.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
        </select>
      </div>
    </div>
  );
}
