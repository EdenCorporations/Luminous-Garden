import type { Metadata } from "next";
import { ComparisonGuide } from "../ComparisonGuide";

const guide = {
  "slug": "zapier-vs-make",
  "title": "Zapier vs Make: choosing a workflow tool",
  "names": [
    "Zapier",
    "Make"
  ],
  "subtitle": "Choosing a workflow tool",
  "intro": "Start with the apps you use and the steps your workflow needs. Compare how each builder connects them.",
  "rows": [
    [
      "Build",
      "Connect a trigger to action steps in a Zap.",
      "Arrange connected modules on a visual scenario canvas."
    ],
    [
      "Branch",
      "Paths send work down branches using rules.",
      "Routers split a scenario into routes with filters."
    ],
    [
      "Connect",
      "Browse app integrations and their supported triggers and actions.",
      "Use app modules or HTTP requests to public APIs."
    ]
  ],
  "guidanceTitle": "Try one real workflow",
  "guidance": "Choose Zapier when its app actions and editor fit your team. Choose Make when its visual scenario layout fits your process. Test the exact trigger, a branch, and a failed step before choosing a plan.",
  "serviceTitle": "Need the workflow built for you?",
  "service": "Eden offers custom workflow automation: development, integration, consulting, and support. Bring the process you want to improve. We can discuss a project proposal around your requirements.",
  "question": "Buying a tool and commissioning a service are separate decisions. Start with the outcome your team needs.",
  "sources": [
    [
      "Zapier workflows",
      "https://zapier.com/workflows"
    ],
    [
      "Zapier Paths",
      "https://help.zapier.com/hc/en-us/articles/8496288555917-Add-branching-logic-to-Zap-workflows-with-Paths"
    ],
    [
      "Make product",
      "https://www.make.com/en/product"
    ],
    [
      "Make routers",
      "https://help.make.com/router"
    ]
  ],
  "related": "n8n-vs-zapier",
  "relatedLabel": "n8n vs Zapier",
  "description": "Start with the apps you use and the steps your workflow needs. Compare how each builder connects them. See where Eden’s custom workflow automation services fit."
};

export const metadata: Metadata = {
  title: `${guide.title} | EdenCORP`,
  description: guide.description,
  alternates: { canonical: `/compare/${guide.slug}` },
  openGraph: { title: guide.title, description: guide.description, url: `/compare/${guide.slug}`, type: "article" },
};

export default function Page() { return <ComparisonGuide guide={guide} />; }
