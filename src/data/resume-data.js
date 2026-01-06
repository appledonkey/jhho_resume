/**
 * @type {import('../types').ResumeData}
 */
export const RESUME_DATA = {
  basics: {
    name: "James H. H. Oswald",
    label: "IT Support Analyst & AI/Automation Specialist",
    email: "james.oswald89@gmail.com",
    phone: "",
    url: "https://www.linkedin.com/in/james-oswald-16689a263/",
    summary: "13+ years of hands-on IT support experience in enterprise Windows environments, specializing in Microsoft 365 administration, Active Directory management, and endpoint troubleshooting. Proven track record of building automation solutions using Power Automate, AI-powered tools, and Python/PowerShell scripting to eliminate manual workflows and improve operational efficiency. Passionate about leveraging emerging AI technologies to transform IT support operations.",
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
        "Developed PowerShell scripts to automate Active Directory account provisioning and group management, reducing manual administration by 25+ hours weekly.",
        "Built Power Automate flows integrated with AI Builder to streamline ticket classification and document processing, cutting manual triage time significantly.",
        "Created self-service troubleshooting portal that deflected 400+ Tier 1 tickets monthly (12% reduction in support volume), documenting solutions in knowledge base articles.",
        "Implemented automated ticket routing and incident resolution workflows in ServiceNow, improving Mean Time to Resolution (MTTR) for high-volume support requests.",
        "Manage user accounts, security groups, and permissions in Active Directory and Azure AD; administer M365 services including Exchange, Teams, and SharePoint."
      ]
    },
    {
      company: "QSI",
      position: "IT Support Analyst",
      startDate: "2013",
      endDate: "2020",
      summary: "Delivered technical support in a Windows-based enterprise environment for the Oil & Gas sector. Troubleshot networking, printing, and access issues while maintaining critical system documentation and enforcing compliance standards.",
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
    { name: "Microsoft Copilot / AI Tools", category: "Automation & AI" },
    { name: "PowerShell Scripting", category: "Automation & AI" },
    { name: "Python Scripting", category: "Automation & AI" },
    { name: "ServiceNow Workflows", category: "Automation & AI" },

    { name: "Microsoft 365 Administration", category: "Microsoft Technologies" },
    { name: "Azure Active Directory (Entra ID)", category: "Microsoft Technologies" },
    { name: "Exchange Online / Teams / SharePoint", category: "Microsoft Technologies" },
    { name: "Intune Endpoint Management", category: "Microsoft Technologies" },
    { name: "Windows 10/11 Enterprise", category: "Microsoft Technologies" },

    { name: "Active Directory Management", category: "Infrastructure" },
    { name: "TCP/IP / DNS / DHCP", category: "Infrastructure" },
    { name: "Endpoint Troubleshooting (Windows, iOS, Android)", category: "Infrastructure" },
    { name: "System Imaging & Deployment", category: "Infrastructure" }
  ],
  projects: [
    {
      name: "Office Management Software",
      description: "Developed internal tooling to streamline office operations and administrative workflows. Built with a focus on improving efficiency for day-to-day business processes and reducing manual overhead.",
      tags: ["Python", "Automation", "Business Operations"],
      url: "#"
    },
    {
      name: "Knowledge Base Article System",
      description: "Architected a centralized knowledge management system to automate documentation curation and retrieval. Standardized article formatting and implemented search optimization for rapid technical reference by support teams.",
      tags: ["Python", "Documentation", "IT Operations"],
      url: "#"
    },
    {
      name: "Self-Service Portal & Training Prototype",
      description: "Built a flowchart-driven troubleshooting portal with guided decision trees for common IT issues. Enables user self-resolution and serves as an interactive training tool for new support staff.",
      tags: ["Process Automation", "Knowledge Management", "Training"],
      url: "#"
    }
  ]
};
