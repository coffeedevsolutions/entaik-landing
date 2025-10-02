import { BlogArticle } from "@/types/blog";

export const prioritizationFrameworks: BlogArticle = {
  id: "prioritization-frameworks",
  slug: "prioritization-frameworks",
  title: "RICE vs WSJF vs MoSCoW: choosing a prioritization model",
  description: "A comprehensive guide to selecting the right prioritization framework for your organization's unique needs and ensuring your team focuses on what truly matters.",
  category: "Framework Guide",
  publishDate: "2025-9-9",
  readTime: "8 min read",
  author: {
    name: "Blake Coffee",
    role: "Cofounder of Uptaik"
  },
  heroImage: "/placeholder-blog.jpg",
  content: {
    sections: [
      {
        paragraphs: [
          "Every product team faces the same challenge: more ideas than capacity. The difference between high-performing teams and the rest often comes down to one thing—how they prioritize.",
          "But with frameworks like RICE, WSJF, MoSCoW, and dozens of others, how do you choose the right one? Here's a practical guide to selecting and implementing the prioritization model that fits your team."
        ]
      },
      {
        heading: "RICE: When Data Drives Decisions",
        paragraphs: [
          "RICE (Reach, Impact, Confidence, Effort) works best for teams with solid user data and the ability to estimate effort reliably. It's quantitative, which makes it feel objective, but requires good data to be effective.",
          "Use RICE when you have clear user metrics, can estimate development effort accurately, and want a framework that scales across different types of features."
        ]
      },
      {
        heading: "WSJF: For SAFe and Flow-Based Teams",
        paragraphs: [
          "Weighted Shortest Job First (WSJF) prioritizes work based on the cost of delay divided by job duration. It's the go-to model for teams using SAFe (Scaled Agile Framework).",
          "WSJF shines when you need to optimize for flow and have a good handle on both business value and implementation complexity. It's particularly effective for platform and infrastructure teams."
        ]
      },
      {
        heading: "MoSCoW: Simple and Stakeholder-Friendly",
        paragraphs: [
          "Must have, Should have, Could have, Won't have. MoSCoW is brilliantly simple and great for aligning with non-technical stakeholders.",
          "Use MoSCoW when you need buy-in from diverse stakeholders, are working with fixed scope projects, or want a framework that's easy to explain to executives."
        ]
      },
      {
        heading: "Choosing Your Framework",
        paragraphs: [
          "The best framework depends on your team's maturity, data availability, and organizational culture. Start simple—MoSCoW for alignment, RICE when you have data, WSJF when optimizing for flow.",
          "And remember: the framework is just a tool. The real work is in honest assessment, clear criteria, and consistent application across your portfolio."
        ]
      },
      {
        quote: "The best prioritization framework is the one your team will actually use consistently. Start simple, then evolve as your needs grow."
      }
    ]
  }
};

