/**
 * @type {import('../types').ResumeData}
 */
export const RESUME_DATA = {
  basics: {
    name: "James H. H. Oswald",
    label: "IT Automation Specialist | Service Desk Analyst II",
    email: "james.oswald89@gmail.com",
    phone: "",
    url: "https://www.linkedin.com/in/james-oswald-16689a263/",
    summary: "13+ years in IT building automation across ServiceNow, Active Directory, and Azure/Entra ID with PowerShell, Python, and the Power Platform. Develops self-service support tooling, AI-driven workflows, and end-to-end process automation to reduce manual effort and accelerate service delivery in healthcare enterprise environments.",
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
      date: "In Progress"
    },
    {
      name: "Microsoft Certified: Power Platform Developer Associate (PL-400)",
      issuer: "Microsoft",
      date: "In Progress"
    },
    {
      name: "Notable Flow Builder 101",
      issuer: "Notable",
      date: "Completed"
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
        "Developed a self-service support application for end users and service desk teams, centralizing scripts, knowledge base articles, templates, and troubleshooting resources to reduce ticket escalations and accelerate resolution times.",
        "Built ServiceNow and Power Automate workflows to automate ticket routing, access requests, and approval chains across teams.",
        "Managed Azure AD / Entra ID environment including Conditional Access, MFA, BitLocker administration, and M365 tenant management across Windows, macOS, iOS, and Android.",
        "Integrated AI Builder, Power Automate, and Notable to automate document processing, ticket classification, and healthcare-specific workflows. Trained and refined AI models using curated internal data to improve automation accuracy and reduce manual triage."
      ]
    },
    {
      company: "QSI",
      position: "IT Support Analyst",
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
    { name: "PowerShell", category: "Automation & Scripting" },
    { name: "Python", category: "Automation & Scripting" },
    { name: "Power Automate / AI Builder", category: "Automation & Scripting" },
    { name: "API Integrations (Graph API, REST, Webhooks)", category: "Automation & Scripting" },

    { name: "ServiceNow", category: "Platforms & Administration" },
    { name: "Active Directory & Group Policy", category: "Platforms & Administration" },
    { name: "Azure AD / Entra ID", category: "Platforms & Administration" },
    { name: "Exchange Online / M365 Administration", category: "Platforms & Administration" },
    { name: "Notable (Healthcare Automation)", category: "Platforms & Administration" },

    { name: "Intune / Endpoint Management", category: "Infrastructure & Support" },
    { name: "Multi-Platform Support", category: "Infrastructure & Support" },
    { name: "TCP/IP / DNS / DHCP", category: "Infrastructure & Support" },
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
