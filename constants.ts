
import { ExpertiseArea, Metric, CareerHighlight, Insight } from './types';

export const LINKEDIN_URL = "https://www.linkedin.com/in/adam-wallace-/";
export const BOOKING_URL = "https://tidycal.com/3q22djv/30-minute-meeting";

export const HERO_TITLE = "Strategic Growth & Revenue Executive";
export const HERO_SUBTITLE = "Bridging the gap between operational efficiency and commercial strategy. I partner with C-Suite leaders and SMB's to scale businesses internationally.";

export const KEY_METRICS: Metric[] = [
  {
    value: "290%",
    label: "Revenue Growth",
    description: "Achieved monthly revenue increase within 18 months through strategic restructuring and sales optimisation."
  },
  {
    value: "27",
    label: "Global Markets",
    description: "Successfully delivered marketing campaigns and product launches across 27 countries."
  },
  {
    value: "50%",
    label: "Efficiency Gain",
    description: "Reduction in onboarding time and operational costs through process optimisation."
  }
];

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    title: "Strategic Revenue Growth",
    description: "Designing and executing frameworks that drive sustainable financial performance.",
    skills: ["Revenue Analysis", "Sales Process Optimisation", "Go-to-Market Strategy", "Commercial Alignment"]
  },
  {
    title: "International Expansion",
    description: "Navigating complex global markets to establish brand presence and profitability abroad.",
    skills: ["Global Marketing", "Cross-Border Logistics", "Cultural Team Management", "New Market Entry"]
  },
  {
    title: "Digital Transformation",
    description: "Leveraging technology to automate workflows, enhance customer experience, and reduce risk.",
    skills: ["Software Implementation", "E-commerce Operations", "Data Driven Insights", "Tech Audits"]
  },
  {
    title: "Organisational Leadership",
    description: "Building high-performance, cross-functional teams that align with corporate vision.",
    skills: ["Change Management", "Executive Mentoring", "Remote Team Leadership", "Stakeholder Management"]
  }
];

// Grouped by Impact Area rather than Company Name to maintain the "Experience Only" request
export const IMPACT_HIGHLIGHTS: CareerHighlight[] = [
  {
    title: "Hyper-Growth & Scale",
    description: "Led sales and marketing operations, transforming revenue streams.",
    achievements: [
      "Achieved an 87.5% increase in revenue via an e-commerce channel within 19 months by optimising sales GTM, process and value proposition.",
      "Spearheaded broader growth achieving 290% monthly revenue increase within 18 months.",
      "Recognised as a 'Two Comma Club' award winner (top 0.8% of platform users) for exceptional sales funnel performance.",
      "Led a sales function achieving the highest monthly sales within the first six weeks of tenure through immediate leadership impact."
    ],
    iconName: 'TrendingUp'
  },
  {
    title: "Global Operations & E-commerce",
    description: "Managed end-to-end e-commerce and marketing for a market leading brand.",
    achievements: [
      "Conducted comprehensive new market analysis utilising frameworks such as PESTLE and VRIO to assess and de-risk international expansion.",
      "Optimised online sales processes and implemented data driven marketing strategies impacting profitability.",
      "Delivered global marketing campaigns to 27 countries, enhancing international brand positioning.",
      "Managed cross functional teams in Australia and South East Asia, fostering a high performance culture."
    ],
    iconName: 'Globe'
  },
  {
    title: "Transformation & Consulting",
    description: "Served as a strategic advisor to scale businesses and optimise operational bottlenecks.",
    achievements: [
      "Provided strategic advisory on Revenue Operations (RevOps), identifying critical gaps and improvement areas in sales, marketing and customer success.",
      "Conducted technology audits and implemented software to enhance sales, business analytics and operations.",
      "Overhauled employee onboarding processes resulting in a 50% reduction in training time.",
      "Identified performance gaps in sales teams, resulting in a notable revenue uplift through process re-engineering."
    ],
    iconName: 'Zap'
  }
];

export const FEATURED_INSIGHTS: Insight[] = [
  {
    title: "The AI Paradox: Why Scaling Output Doesn't Mean Scaling Headcount",
    category: "AI & Strategy",
    summary: "How modern executives are decoupling revenue generation from operational overhead using intelligent automation.",
    link: LINKEDIN_URL, // Points to LinkedIn Profile for now
    date: "Latest Insight"
  },
  {
    title: "Expanding to 27 Markets: Lessons in Global Logistics & Culture",
    category: "International Business",
    summary: "A breakdown of the PESTLE and VRIO frameworks used to de-risk international expansion strategies.",
    link: LINKEDIN_URL,
    date: "Featured"
  },
  {
    title: "The 290% Growth Blueprint: Optimising the Customer Journey",
    category: "Revenue Operations",
    summary: "Why most sales funnels fail at the 'handover' points, and how to fix them for rapid revenue acceleration.",
    link: LINKEDIN_URL,
    date: "Case Study"
  }
];

export const SYSTEM_INSTRUCTION = `You are Adam Wallace's virtual executive assistant.
Your goal is to represent Adam professionally to potential clients, partners, and employers.
Adam is a Strategic Growth & Revenue Executive who bridges the gap between operational efficiency and commercial strategy.

Key Highlights:
- 290% Revenue Growth achieved monthly within 18 months.
- Expansion into 27 Global Markets.
- 50% Efficiency Gain in onboarding and operations.
- Expertise in Strategic Revenue Growth, International Expansion, Digital Transformation, and Organizational Leadership.
- Philosophy: "Growth isn't just about selling more. It's about aligning operational capability with market opportunity."
- Advocate for "Scaling Output, Not Headcount" using AI and automation.

When answering:
1. Be professional, concise, and strategic in tone.
2. Use "we" or "Adam" appropriately.
3. If asked about contact, refer to the LinkedIn link or booking a strategy call.
4. If asked about specific details not in your knowledge base, suggest connecting on LinkedIn.`;
