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
    summary: "13+ years in IT with a focus on automating ServiceNow workflows, Active Directory provisioning, Exchange administration, and Azure/Entra ID Graph operations using PowerShell, Python, and Power Automate. Builds end-to-end automation that eliminates manual work and accelerates service delivery across enterprise environments.",
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
        "Automated AD provisioning, group management, and offboarding with PowerShell and Python, eliminating 25+ hours of manual work weekly.",
        "Built ServiceNow and Power Automate workflows to automate ticket routing, access requests, and approval chains across teams.",
        "Managed Azure AD / Entra ID environment including Conditional Access, MFA, and M365 tenant administration across Windows, macOS, iOS, and Android.",
        "Integrated AI Builder with Power Automate for intelligent document processing and automated ticket classification."
      ]
    },
    {
      company: "QSI",
      position: "IT Support Analyst",
      startDate: "2013",
      endDate: "2020",
      summary: "",
      highlights: [
        "Automated Active Directory provisioning, group policy management, and account workflows across a multi-site environment using PowerShell.",
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
