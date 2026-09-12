import type { Metadata } from "next";
import { ComparisonGuide } from "../ComparisonGuide";

const guide = {
  "slug": "n8n-vs-zapier",
  "title": "n8n vs Zapier: hosting and workflow ownership",
  "names": [
    "n8n",
    "Zapier"
  ],
  "subtitle": "Hosting and workflow ownership",
  "intro": "Decide who will run the infrastructure before choosing your workflow tool. n8n offers cloud and self-hosted options.",
  "rows": [
    [
      "Hosting",
      "Use managed n8n Cloud or deploy on your own infrastructure.",
      "Build and run workflows through Zapier’s online service."
    ],
    [
      "Upkeep",
      "n8n manages Cloud infrastructure. Self-hosted upkeep belongs to your team.",
      "Use Zapier’s hosted platform; configure app connections and workflow rules."
    ],
    [
      "Control",
      "Self-hosting lets you control the deployment environment and configuration.",
      "Manage triggers, actions, and app connections inside Zapier."
    ]
  ],
  "guidanceTitle": "Choose an owner, then a tool",
  "guidance": "Choose n8n self-hosting when your team wants deployment control and can maintain it. Consider n8n Cloud or Zapier when you want hosted infrastructure. Your workflow still needs someone to test changes and handle failures.",
  "serviceTitle": "Define the work before the stack",
  "service": "Eden offers custom development, integration, consulting, and support for workflow automation. Bring your current tools and the process you want to change. We can discuss scope and responsibilities in a project proposal.",
  "question": "Decide who will handle access, workflow changes, and ongoing support. The implementation follows those requirements. Eden scopes workflow development and support through individual project proposals.",
  "sources": [
    [
      "n8n hosting options",
      "https://docs.n8n.io/choose-how-to-use-n8n"
    ],
    [
      "Zapier workflows",
      "https://zapier.com/workflows"
    ],
    [
      "Zapier concepts",
      "https://help.zapier.com/hc/en-us/articles/8496181725453-Learn-key-concepts-in-Zap-workflows"
    ]
  ],
  "related": "zapier-vs-make",
  "relatedLabel": "Zapier vs Make",
  "description": "Decide who will run the infrastructure before choosing your workflow tool. n8n offers cloud and self-hosted options. See where Eden’s custom workflow automation services fit."
};

export const metadata: Metadata = {
  title: `${guide.title} | EdenCORP`,
  description: guide.description,
  alternates: { canonical: `/compare/${guide.slug}` },
  openGraph: { title: guide.title, description: guide.description, url: `/compare/${guide.slug}`, type: "article" },
};

export default function Page() { return <ComparisonGuide guide={guide} />; }
