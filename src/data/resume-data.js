/**
 * @type {import('../types').ResumeData}
 */
export const RESUME_DATA = {
  basics: {
    name: "James H. H. Oswald",
    label: "IAM & IT Automation Specialist",
    email: "james.oswald89@gmail.com",
    phone: "",
    url: "https://www.linkedin.com/in/james-oswald-16689a263/",
    summary: "13+ years in IT with deep expertise in identity and access management, user lifecycle operations, and enterprise automation. Skilled in administering Azure AD / Entra ID environments including Conditional Access, MFA, and role-based access controls. Proven track record automating AD provisioning, access workflows, and incident resolution using PowerShell, Python, and Power Automate. Experienced collaborating cross-functionally with security, HR, and operations teams to ensure secure, scalable access across mixed-platform environments. Applies automation and AI tooling to streamline IAM operations and improve service delivery.",
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
        "Administered Azure AD / Entra ID environment including Conditional Access policies, multi-factor authentication, and role-based access controls, securing identities across Windows, macOS, iOS, and Android endpoints.",
        "Automated end-to-end identity lifecycle management — onboarding, role transitions, and offboarding — with PowerShell and Python scripts integrated with Active Directory and Azure AD, eliminating 25+ hours of manual provisioning weekly.",
        "Built automated access request and approval workflows using ServiceNow and Power Automate, streamlining role-based assignments and reducing access fulfillment time across cross-functional teams.",
        "Led periodic access reviews and enforced least-privilege controls across M365 and Azure AD; partnered with Security and HR to align identity governance processes with compliance requirements.",
        "Integrated AI Builder with Power Automate for intelligent document processing and ticket classification, applying automation expertise to reduce manual triage and improve operational efficiency."
      ]
    },
    {
      company: "QSI",
      position: "IT Support Analyst",
      startDate: "2013",
      endDate: "2020",
      summary: "",
      highlights: [
        "Managed user account provisioning, access permissions, and group policies across Active Directory in a multi-site environment, supporting secure onboarding and access workflows.",
        "Standardized knowledge base documentation structure, improving technical article retrieval speed by 40% for support teams.",
        "Maintained 99.9% uptime for critical business systems through proactive monitoring, patch management, and rapid incident resolution.",
        "Enforced security controls, access management policies, and periodic access certifications, reducing compliance audit findings by 25%."
      ]
    }
  ],
  skills: [
    { name: "Azure AD / Entra ID (Conditional Access, MFA)", category: "Identity & Access Management" },
    { name: "Active Directory & Group Policy", category: "Identity & Access Management" },
    { name: "Identity Lifecycle Management (RBAC, Provisioning)", category: "Identity & Access Management" },
    { name: "SSO & Authentication Protocols", category: "Identity & Access Management" },

    { name: "PowerShell Scripting", category: "Automation & Scripting" },
    { name: "Python Scripting", category: "Automation & Scripting" },
    { name: "Power Automate / AI Builder", category: "Automation & Scripting" },
    { name: "API Integrations & Webhooks", category: "Automation & Scripting" },

    { name: "ServiceNow (ITSM / Workflows)", category: "Platforms & Administration" },
    { name: "Microsoft 365 Administration", category: "Platforms & Administration" },
    { name: "Intune / Endpoint Management", category: "Platforms & Administration" },
    { name: "Exchange Online / Teams / SharePoint", category: "Platforms & Administration" },

    { name: "Multi-Platform Support (Windows, macOS, iOS, Android)", category: "Infrastructure & Support" },
    { name: "TCP/IP / DNS / DHCP", category: "Infrastructure & Support" },
    { name: "ITIL Service Management", category: "Infrastructure & Support" }
  ],
  projects: [
    {
      name: "Identity & Access Automation Toolkit",
      description: "Developed internal tooling to automate identity lifecycle operations including bulk provisioning, access reviews, and role-based assignment workflows. Built with Python to reduce manual overhead in day-to-day IAM administration.",
      tags: ["Python", "Automation", "IAM"],
      url: "#"
    },
    {
      name: "Knowledge Base & AI Training Content System",
      description: "Architected a centralized knowledge management system for support content curation and retrieval. Standardized article formatting to improve AI/automation accuracy and implemented search optimization for rapid technical reference. Content serves as training data for automated support tools.",
      tags: ["Knowledge Management", "AI Training Content", "Documentation", "Python"],
      url: "#"
    },
    {
      name: "ServiceNow Ticket Lifecycle Automation",
      description: "Built an end-to-end ticket automation framework integrating ServiceNow with Active Directory and Microsoft Entra ID (Azure AD) via PowerShell and Python. Automated ticket creation from monitoring alerts, intelligent routing based on category and priority, and scripted resolution of common requests such as AD provisioning, group membership changes, and password resets. Reduced manual intervention across the ticket lifecycle and improved mean time to resolution.",
      tags: ["ServiceNow", "PowerShell", "Python", "Active Directory"],
      url: "#"
    }
  ]
};
