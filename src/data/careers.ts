import type { DepartmentId } from "./departments";

export interface Career {
  id: string;
  title: string;
  department: DepartmentId;
  description: string;
  skills: string[];
}

export const careers: Career[] = [
  {
    id: "network-administrator",
    title: "Network Administrator",
    department: "it",
    description:
      "Plans, configures and maintains the networks that connect an organisation's computers and services.",
    skills: ["Routing and switching", "Network troubleshooting", "Monitoring", "Documentation"],
  },
  {
    id: "it-support-specialist",
    title: "IT Support Specialist",
    department: "it",
    description: "Helps users solve hardware, software and access problems and keeps daily operations running.",
    skills: ["Troubleshooting", "Operating systems", "Communication", "Ticketing tools"],
  },
  {
    id: "systems-administrator",
    title: "Systems Administrator",
    department: "it",
    description: "Installs and maintains servers, user accounts, backups and system services.",
    skills: ["Linux/Windows Server", "Scripting", "Backup and recovery", "Security basics"],
  },
  {
    id: "cloud-support-engineer",
    title: "Cloud Support Engineer",
    department: "it",
    description: "Supports applications and infrastructure running on cloud platforms.",
    skills: ["Cloud services", "Networking", "Monitoring", "Automation"],
  },
  {
    id: "it-consultant",
    title: "IT Consultant",
    department: "it",
    description: "Advises organisations on which technologies to adopt and how to deploy them well.",
    skills: ["Requirements analysis", "Broad technical knowledge", "Presentation", "Planning"],
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst (entry roles)",
    department: "it",
    description: "Helps protect systems and data by monitoring, hardening and responding to incidents.",
    skills: ["Security fundamentals", "Networking", "Log analysis", "Attention to detail"],
  },

  {
    id: "software-developer",
    title: "Software Developer",
    department: "software-engineering",
    description: "Designs and writes software features, fixes defects and improves existing systems.",
    skills: ["Programming", "Debugging", "Version control", "Design patterns"],
  },
  {
    id: "web-developer",
    title: "Web Developer",
    department: "software-engineering",
    description: "Builds websites and web applications, front-end, back-end or both.",
    skills: ["HTML/CSS/JavaScript", "Frameworks", "APIs", "Responsive design"],
  },
  {
    id: "mobile-developer",
    title: "Mobile Developer",
    department: "software-engineering",
    description: "Creates applications for Android or iOS devices.",
    skills: ["Mobile frameworks", "UI implementation", "APIs", "Testing on devices"],
  },
  {
    id: "full-stack-developer",
    title: "Full-Stack Developer",
    department: "software-engineering",
    description: "Works across user interface, server logic and database of an application.",
    skills: ["Front-end", "Back-end", "Databases", "Deployment"],
  },
  {
    id: "qa-engineer",
    title: "QA / Test Engineer",
    department: "software-engineering",
    description: "Checks that software works as intended and builds automated tests.",
    skills: ["Test design", "Automation tools", "Bug reporting", "Attention to detail"],
  },

  {
    id: "algorithm-engineer",
    title: "Algorithm Engineer",
    department: "computer-science",
    description: "Designs efficient algorithms for search, optimisation, graphics or other computation-heavy work.",
    skills: ["Algorithms", "Mathematics", "Programming", "Performance analysis"],
  },
  {
    id: "data-analyst",
    title: "Data Analyst / Data Scientist (with further study)",
    department: "computer-science",
    description: "Turns data into insight using statistics, programming and visualisation.",
    skills: ["Python/R", "Statistics", "SQL", "Visualisation"],
  },
  {
    id: "ml-engineer",
    title: "AI / Machine-Learning roles",
    department: "computer-science",
    description: "Builds and evaluates models that learn from data.",
    skills: ["Machine learning", "Mathematics", "Python", "Experimentation"],
  },
  {
    id: "researcher",
    title: "Researcher / Graduate studies",
    department: "computer-science",
    description: "Studies computing problems and publishes or teaches the results.",
    skills: ["Research methods", "Academic writing", "Deep subject knowledge"],
  },
  {
    id: "systems-developer",
    title: "Systems Developer",
    department: "computer-science",
    description: "Writes low-level or performance-critical software such as tools, services and compilers.",
    skills: ["C/C++", "Operating systems", "Debugging", "Architecture"],
  },

  {
    id: "business-analyst",
    title: "Business Analyst",
    department: "information-systems",
    description: "Studies how an organisation works and specifies the systems it needs.",
    skills: ["Requirements gathering", "Process modelling", "Communication", "Documentation"],
  },
  {
    id: "systems-analyst",
    title: "Systems Analyst",
    department: "information-systems",
    description: "Translates business requirements into system designs developers can build.",
    skills: ["Systems analysis", "UML", "Databases", "Stakeholder management"],
  },
  {
    id: "database-administrator",
    title: "Database Administrator",
    department: "information-systems",
    description: "Designs, secures and maintains organisational databases.",
    skills: ["SQL", "Data modelling", "Backup and tuning", "Access control"],
  },
  {
    id: "it-project-coordinator",
    title: "IT Project Coordinator",
    department: "information-systems",
    description: "Keeps IT projects on schedule, on budget and aligned with user needs.",
    skills: ["Planning", "Coordination", "Risk tracking", "Reporting"],
  },
  {
    id: "erp-consultant",
    title: "Enterprise Systems / ERP roles",
    department: "information-systems",
    description: "Configures and supports enterprise platforms used across departments.",
    skills: ["ERP modules", "Process mapping", "Training users", "Configuration"],
  },

  {
    id: "information-specialist",
    title: "Information Specialist",
    department: "information-science",
    description: "Organises collections and helps people find the information they need.",
    skills: ["Metadata", "Search skills", "User support", "Standards"],
  },
  {
    id: "knowledge-manager",
    title: "Knowledge Management roles",
    department: "information-science",
    description: "Captures and shares organisational knowledge so it is not lost.",
    skills: ["Knowledge organisation", "Content systems", "Facilitation", "Documentation"],
  },
  {
    id: "information-analyst",
    title: "Information Analyst",
    department: "information-science",
    description: "Evaluates information sources and needs, and reports findings.",
    skills: ["Research", "Analysis", "Reporting", "Information literacy"],
  },
  {
    id: "digital-repository-officer",
    title: "Digital Information / Repository roles",
    department: "information-science",
    description: "Builds and maintains digital repositories and preserves digital content.",
    skills: ["DSpace/Koha", "Digitisation", "Preservation", "Metadata"],
  },
  {
    id: "research-services",
    title: "Information and Research Services",
    department: "information-science",
    description: "Supports researchers and students with information services and training.",
    skills: ["Reference services", "Teaching", "Databases", "Communication"],
  },
];

export const careerNote =
  "Career opportunities depend on your education, the skills and projects you build, practical experience, certifications and the job market — not on the department name alone.";
