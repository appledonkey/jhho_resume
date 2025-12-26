/**
 * @type {import('../types').ResumeData}
 */
export const RESUME_DATA = {
  basics: {
    name: "James H. H. Oswald",
    label: "IT Operations & Automation Specialist", 
    email: "james.oswald89@gmail.com",
    phone: "", 
    url: "https://www.boot.dev/u/wizardofozwald239",
    summary: "Senior Service Desk Analyst & Automation Specialist. Bridges the gap between Tier 2 operations and engineering by architecting AI-driven knowledge systems. Expert in eliminating manual toil via ServiceNow API automation, Power Platform, and Python scripting.",
    location: {
      city: "The Woodlands", 
      region: "TX", 
    },
    profiles: [
      { network: "Boot.dev", url: "https://www.boot.dev/u/wizardofozwald239", username: "wizardofozwald239" },
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
      name: "Microsoft Certified: Power Automate RPA Developer Associate (PL-500)",
      issuer: "Microsoft",
      date: "In Progress"
    },
    {
      name: "Microsoft Certified: Power Platform Developer Associate (PL-400)",
      issuer: "Microsoft",
      date: "In Progress"
    },
    {
      name: "ITIL 4 Foundation",
      issuer: "Axelos",
      date: "In Progress"
    },
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "In Progress"
    }
  ],
  experience: [
    {
      company: "McKesson / US Oncology",
      position: "Service Desk Representative II", 
      startDate: "2020-01", 
      endDate: "Present",
      summary: "De facto Automation Lead for the Service Desk. Balances concierge-level executive support with the development of custom software to autonomously resolve incidents.",
      highlights: [
        "Delivered white-glove executive support to C-suite and Clinical Directors, ensuring rapid resolution of critical technical roadblocks.",
        "Architected an end-to-end Knowledge Base Article (KBA) system with automated curation workflows, cutting average ticket handling time (AHT) by 18%.",
        "Engineered a flowchart-driven Self-Service Training Portal, diverting 400+ Tier 1 tickets monthly (12% reduction in support volume).",
        "Engineered PowerShell automation scripts reducing account provisioning time by 95% (from 20 mins to <1 min per user).",
        "Leveraged Power Platform/Python to interact with ServiceNow API, saving ~25 hours of manual data entry weekly."
      ]
    },
    {
      company: "QSI",
      position: "Service Desk Representative I",
      startDate: "2013",
      endDate: "2020",
      summary: "Provided specialized, high-touch technical support for Quality Management Systems (QMS) in the Oil & Gas sector.",
      highlights: [
        "Standardized the internal Knowledge Base, improving document retrieval speed by 40% for field engineers.",
        "Performed rigorous quality control on documentation workflows, reducing regulatory non-compliance risks by 25%.",
        "Maintained 99.9% uptime for compliance databases during peak audit seasons."
      ]
    }
  ],
  skills: [
    { name: "Python", category: "Languages & Scripting" },
    { name: "PowerShell", category: "Languages & Scripting" },
    { name: "JavaScript/TypeScript", category: "Languages & Scripting" },
    { name: "SQL", category: "Languages & Scripting" },
    
    { name: "Power Automate", category: "Automation & Platforms" },
    { name: "Power Apps", category: "Automation & Platforms" },
    { name: "ServiceNow API", category: "Automation & Platforms" },
    { name: "Copilot Studio", category: "Automation & Platforms" },
    
    { name: "React / Next.js", category: "Frameworks & Tools" },
    { name: "Git / GitHub", category: "Frameworks & Tools" },
    { name: "VS Code", category: "Frameworks & Tools" },
    { name: "AI-Assisted Dev", category: "Frameworks & Tools" }
  ],
  projects: [
    {
      name: "Self-Service Training Portal",
      description: "Flowchart-driven troubleshooting software that reduces ticket volume by guiding users through self-resolution steps.",
      tags: ["Instructional Design", "React", "Automation"],
      url: "#"
    },
    {
      name: "Automated KBA System",
      description: "Centralized knowledge management system with automated curation workflows for rapid information retrieval.",
      tags: ["Python", "AI/ML", "Workflow Automation"],
      url: "#"
    },
    {
      name: "Boot.dev Portfolio",
      description: "Advanced Computer Science coursework focusing on Backend Architecture, Algorithms, and Data Structures.",
      tags: ["Go", "Python", "Algorithms"],
      url: "https://www.boot.dev/u/wizardofozwald239"
    }
  ]
};
