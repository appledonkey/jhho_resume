/**
 * @type {import('../types').ResumeData}
 */
export const RESUME_DATA = {
  basics: {
    name: "James H. H. Oswald",
    label: "AI & Automation Specialist",
    email: "james.oswald89@gmail.com",
    phone: "9792361893",
    url: "https://www.linkedin.com/in/james-oswald-16689a263/",
    summary: "13+ years driving enterprise IT automation across ServiceNow, Azure/Entra ID, and the Power Platform. Deep expertise in agentic AI workflows, LLM integration, voice AI, and MCP/API orchestration, grounded in real service desk operations and self-service tooling. Delivered measurable results automating 400+ tickets/week and achieving 30% call deflection via AI voice support.",
    location: {
      city: "Conroe",
      region: "TX",
    },
    profiles: [
      { network: "LinkedIn", url: "https://www.linkedin.com/in/james-oswald-16689a263/", username: "James Oswald" }
    ]
  },
  education: [
    {
      institution: "Texas Tech University",
      area: "History",
      studyType: "Bachelor of Arts",
      startDate: "2009",
      endDate: "2013",
      score: "",
      courses: ["Minor in Latin"]
    }
  ],
  certifications: [
    {
      name: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "Completed"
    },
    {
      name: "Google AI Essentials",
      issuer: "Google",
      date: "Completed"
    },
    {
      name: "Notable Flow Builder 101",
      issuer: "Notable",
      date: "Completed"
    }
  ],
  experience: [
    {
      company: "HungerRush",
      position: "AI & Automation Specialist",
      location: "Houston, TX",
      startDate: "2026-03",
      endDate: "Present",
      summary: "",
      highlights: [
        "Orchestrated launch of forethought.ai voice support, facilitating over 30% call deflection and operational readiness in less than 2 months.",
        "Engineered coaching scorecards for management teams, reducing meeting preparation time by 95% and driving structured employee development through data-driven 1:1s.",
        "Constructed an integrated data hub unifying Zendesk, Assembled, and Forethought, enabling real-time reporting and metric tracking via Azure, with Entrada securing remote data access.",
        "Established company GitHub and document control processes, standardizing knowledge transfer and reducing onboarding friction."
      ]
    },
    {
      company: "McKesson / US Oncology",
      position: "IT Support Analyst",
      location: "Conroe, TX",
      startDate: "2020-01",
      endDate: "2026-03",
      summary: "",
      highlights: [
        "Built ServiceNow and Power Automate workflows automating ticket routing, access requests, and approval chains, scaling support capacity to 400+ tickets per week.",
        "Managed Azure AD / Entra ID environment including Conditional Access, MFA, BitLocker, and M365 across Windows, macOS, iOS, and Android.",
        "Designed automation workflows with built-in audit trails, kill switches, and ROI dashboards to ensure compliance and measure business impact.",
        "Developed a self-service support application for end users and service desk teams, centralizing scripts, knowledge base articles, templates, and troubleshooting resources to reduce ticket escalations and accelerate resolution times."
      ]
    },
    {
      company: "QSI",
      position: "IT Support Analyst",
      location: "",
      startDate: "2013",
      endDate: "2020",
      summary: "",
      highlights: [
        "Curated and maintained document archives for organizations with hundreds of employees, ensuring readiness for ISO 9001 and API audits.",
        "Standardized knowledge base documentation, improving article retrieval speed by 40% for support teams.",
        "Maintained 99.9% uptime for critical systems through proactive monitoring, patching, and rapid incident resolution."
      ]
    }
  ],
  skills: [
    { name: "LLM Integration & Prompt Engineering", category: "AI & Automation" },
    { name: "Agentic AI Workflows", category: "AI & Automation" },
    { name: "Voice AI (IVR Automation, Call Deflection)", category: "AI & Automation" },
    { name: "Power Automate / AI Builder", category: "AI & Automation" },

    { name: "ServiceNow / Zendesk / Forethought.AI", category: "Platforms & Administration" },
    { name: "Azure AD / Entra ID", category: "Platforms & Administration" },
    { name: "PowerShell / Python", category: "Platforms & Administration" },
    { name: "REST / Graph API / Webhooks", category: "Platforms & Administration" },

    { name: "Intune / Endpoint Management", category: "Infrastructure & Support" },
    { name: "ITIL Service Management", category: "Infrastructure & Support" }
  ],
  projects: [
    {
      name: "AD & Exchange Automation Toolkit",
      description: "PowerShell and Python tooling to automate bulk AD provisioning, group membership changes, and Exchange mailbox operations, eliminating hours of recurring manual work.",
      tags: ["PowerShell", "Python", "Active Directory", "Exchange"],
      url: "#"
    },
    {
      name: "Knowledge Base & AI Training Content System",
      description: "Centralized knowledge management system with standardized article formatting to improve search accuracy and serve as training data for automated support tools.",
      tags: ["Knowledge Management", "AI Training Content", "Python"],
      url: "#"
    },
    {
      name: "ServiceNow Ticket Lifecycle Automation",
      description: "End-to-end ticket automation integrating ServiceNow with AD and Entra ID via PowerShell and Python. Automates alert-driven ticket creation, intelligent routing, and scripted resolution of common requests.",
      tags: ["ServiceNow", "PowerShell", "Python", "Active Directory"],
      url: "#"
    }
  ]
};
