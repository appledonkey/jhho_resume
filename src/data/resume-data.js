/**
 * @type {import('../types').ResumeData}
 */
export const RESUME_DATA = {
  basics: {
    name: "James H. H. Oswald",
    label: "Support Automation & AI Specialist",
    email: "james.oswald89@gmail.com",
    phone: "",
    url: "https://www.linkedin.com/in/james-oswald-16689a263/",
    summary: "13+ years in IT support with a focus on building AI-powered automation that enhances customer experience and drives operational efficiency. Proven track record implementing intelligent ticket routing, case deflection systems, and workflow automation using Power Automate, AI Builder, and Python/PowerShell scripting. Experienced in configuring support platforms, measuring automation ROI, and deploying self-service solutions that reduce support volume while improving customer satisfaction. Passionate about leveraging emerging AI technologies to transform support operations.",
    location: {
      city: "The Woodlands", 
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
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Completed"
    },
    {
      name: "Microsoft Certified: Power Platform Developer Associate (PL-400)",
      issuer: "Microsoft",
      date: "In Progress"
    }
  ],
  experience: [
    {
      company: "McKesson / US Oncology",
      position: "IT Support Analyst",
      startDate: "2020-01",
      endDate: "Present",
      summary: "",
      highlights: [
        "Built Power Automate flows integrated with AI Builder for intelligent ticket classification and document processing, enabling AI-powered triage that reduced manual sorting time significantly.",
        "Created self-service troubleshooting portal with guided decision trees, achieving 400+ case deflections monthly (12% reduction in support volume) and improving customer experience.",
        "Developed automation scripts and workflows in ServiceNow for intelligent ticket routing, automated incident resolution, and proactive customer outreach, improving MTTR for high-volume requests.",
        "Authored PowerShell and Python scripts to automate Active Directory provisioning, group management, and routine support processes, eliminating 25+ hours of manual work weekly.",
        "Configured and optimized support platform integrations across ServiceNow, M365, and Azure AD; maintained API connections for real-time automation workflows."
      ]
    },
    {
      company: "QSI",
      position: "IT Support Analyst",
      startDate: "2013",
      endDate: "2020",
      summary: "",
      highlights: [
        "Troubleshot and resolved TCP/IP networking issues, printer configurations, and user access permissions across wired and wireless environments.",
        "Standardized knowledge base documentation structure, improving technical article retrieval speed by 40% for support teams.",
        "Maintained 99.9% uptime for critical business systems through proactive monitoring, patch management, and rapid incident resolution.",
        "Enforced security controls and access management policies, reducing compliance audit findings by 25%."
      ]
    }
  ],
  skills: [
    { name: "Power Automate / AI Builder", category: "Automation & AI" },
    { name: "ServiceNow Automation & Workflows", category: "Automation & AI" },
    { name: "Microsoft Copilot / AI Tools", category: "Automation & AI" },
    { name: "PowerShell Scripting", category: "Automation & AI" },
    { name: "Python Scripting", category: "Automation & AI" },
    { name: "API Integrations & Webhooks", category: "Automation & AI" },

    { name: "Support Platforms (ServiceNow, Salesforce)", category: "Customer Support" },
    { name: "Ticket Routing & Case Management", category: "Customer Support" },
    { name: "Knowledge Base Systems", category: "Customer Support" },

    { name: "Microsoft 365 Administration", category: "Microsoft Technologies" },
    { name: "Azure Active Directory (Entra ID)", category: "Microsoft Technologies" },
    { name: "Exchange Online / Teams / SharePoint", category: "Microsoft Technologies" },
    { name: "Intune Endpoint Management", category: "Microsoft Technologies" },

    { name: "Active Directory Management", category: "Infrastructure" },
    { name: "TCP/IP / DNS / DHCP", category: "Infrastructure" },
    { name: "Endpoint Troubleshooting (Windows, iOS, Android)", category: "Infrastructure" }
  ],
  projects: [
    {
      name: "Office Management Software",
      description: "Developed internal tooling to streamline office operations and administrative workflows. Built with a focus on improving efficiency for day-to-day business processes and reducing manual overhead.",
      tags: ["Python", "Automation", "Business Operations"],
      url: "#"
    },
    {
      name: "Knowledge Base & AI Training Content System",
      description: "Architected a centralized knowledge management system for support content curation and retrieval. Standardized article formatting to improve AI/automation accuracy and implemented search optimization for rapid technical reference. Content serves as training data for automated support tools.",
      tags: ["Knowledge Management", "AI Training Content", "Documentation", "Python"],
      url: "#"
    },
    {
      name: "Self-Service Support Portal",
      description: "Designed and built a guided troubleshooting portal with conversational decision trees for case deflection. Achieved measurable reduction in Tier 1 ticket volume while improving customer experience through self-resolution. Also serves as an interactive training tool for onboarding support agents.",
      tags: ["Case Deflection", "Conversation Design", "Customer Experience", "Training"],
      url: "#"
    }
  ]
};
