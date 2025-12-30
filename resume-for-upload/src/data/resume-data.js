/**
 * @type {import('../types').ResumeData}
 */
export const RESUME_DATA = {
  basics: {
    name: "James H. H. Oswald",
    label: "Service Desk Level II & AI/Automation Specialist", 
    email: "james.oswald89@gmail.com",
    phone: "", 
    url: "https://www.boot.dev/u/wizardofozwald239",
    summary: "Focused on modernizing Tier 2 operations through AI-driven knowledge systems and workflow automation. I bridge the gap between support and engineering by building tools that eliminate manual toil, utilizing Python, the Power Platform, and ServiceNow API integrations. My background ensures practical solutions for real-world operational tasks, including automated Active Directory management.",
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
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "In Progress"
    },
    {
      name: "ITIL 4 Foundation",
      issuer: "Axelos",
      date: "In Progress"
    },
    {
      name: "Google Cloud Skills Boost: Cloud Healthcare API",
      issuer: "Google",
      date: "Completed"
    },
    {
      name: "Postman Student Expert (API Automation)",
      issuer: "Postman",
      date: "Completed"
    }
  ],
  experience: [
    {
      company: "McKesson / US Oncology",
      position: "Service Desk Representative II", 
      startDate: "2020-01", 
      endDate: "Present",
      summary: "Automation Lead & Service Desk Analyst Acting as the automation lead for the team, I focus on replacing manual operational workflows with scalable code. I specialize in integrating AI into knowledge management systems and using Python and PowerShell to automate core infrastructure tasks, including ServiceNow routing and Active Directory management.",
      highlights: [
        "Engineered a flowchart-driven Self-Service Training Portal, diverting 400+ Tier 1 tickets monthly (a 12% reduction in total support volume).",
        "Implemented intelligent ticket routing and auto-resolution workflows within ServiceNow, eliminating manual triage for high-volume incidents and significantly improving Mean Time to Resolution (MTTR).",
        "Leveraged Python and the Power Platform to interact with the ServiceNow API, eliminating approximately 25 hours of manual data entry every week.",
        "Provided concierge-level technical support for C-suite executives and clinical staff, ensuring rapid resolution of high-priority technical roadblocks."
      ]
    },
    {
      company: "QSI",
      position: "Service Desk Representative I",
      startDate: "2013",
      endDate: "2020",
      summary: "Delivered specialized technical support for Quality Management Systems (QMS) in the Oil & Gas sector. Focused on maintaining data integrity, enforcing regulatory compliance, and optimizing documentation workflows for field operations.",
      highlights: [
        "Standardized the internal Knowledge Base structure, improving document retrieval speed by 40% for field engineers.",
        "Enforced rigorous quality control on documentation workflows, effectively reducing regulatory non-compliance risks by 25%.",
        "Maintained 99.9% uptime for critical compliance databases during peak audit seasons through proactive monitoring and rapid incident resolution."
      ]
    }
  ],
  skills: [
    { name: "Python", category: "Languages & Scripting" },
    { name: "PowerShell", category: "Languages & Scripting" },
    { name: "SQL", category: "Languages & Scripting" },
    { name: "JavaScript (TypeScript)", category: "Languages & Scripting" },
    
    { name: "Microsoft Power Platform (Power Automate, Power Apps)", category: "Automation & Platforms" },
    { name: "ServiceNow (API Integration & Workflows)", category: "Automation & Platforms" },
    { name: "Copilot Studio", category: "Automation & Platforms" },
    
    { name: "React", category: "Web & Tools" },
    { name: "Next.js", category: "Web & Tools" },
    { name: "Git/GitHub", category: "Web & Tools" },
    { name: "VS Code", category: "Web & Tools" },
    { name: "AI-Augmented Development", category: "Web & Tools" }
  ],
  projects: [
    {
      name: "Self-Service Training Portal",
      description: "Developed a logic-based web application that digitizes troubleshooting flowcharts. Engineered a decision-tree architecture that guides users through self-resolution steps, effectively automating Tier 1 support logic.",
      tags: ["React", "Process Automation"],
      url: "#"
    },
    {
      name: "Automated KBA System",
      description: "Architected a centralized knowledge management tool using Python to automate content curation. Designed the system to parse, organize, and retrieve technical documentation, ensuring data consistency and rapid access for support teams.",
      tags: ["Python", "AI Integration"],
      url: "#"
    },
    {
      name: "Computer Science & Backend Portfolio",
      description: "Completed an advanced technical curriculum focused on Backend Architecture, Data Structures, and Algorithms. Built multiple projects using Go and Python to solve complex computational problems and implement distributed systems concepts.",
      tags: ["Go", "Python", "Data Structures", "Algorithms"],
      url: "https://www.boot.dev/u/wizardofozwald239"
    }
  ]
};
