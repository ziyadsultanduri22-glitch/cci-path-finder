/**
 * Department content for the CCI guidance system.
 * Content is kept separate from components so translations
 * (e.g. Afaan Oromoo) can be added later without touching the UI.
 */

export type DepartmentId =
  | "it"
  | "software-engineering"
  | "computer-science"
  | "information-systems"
  | "information-science";

export interface Department {
  id: DepartmentId;
  name: string;
  abbreviation: string;
  tagline: string;
  intro: string;
  focus: string;
  focusKeyword: string;
  studyAreas: string[];
  subjects: string[];
  technologies: string[];
  skills: string[];
  projects: string[];
  careers: string[];
  modernTechnology: string;
  careerPaths: string[];
  whoMayEnjoy: string[];
  whatYouCanLearn: string[];
  skillsNote: string;
  related: DepartmentId[];
  interests: string[];
}

export const departments: Department[] = [
  {
    id: "it",
    name: "Information Technology",
    abbreviation: "IT",
    tagline: "Applying technology to keep organisations running",
    intro:
      "Information Technology is about putting computing to practical use: setting up systems, connecting them through networks, keeping them secure and helping people use them well.",
    focus:
      "IT focuses on applying existing technologies to real needs — networks, servers, operating systems, databases, security and user support — rather than only building software from scratch.",
    focusKeyword: "Applied technology, networks and systems",
    studyAreas: [
      "Computer networking and data communication",
      "Operating systems and system administration",
      "Web and application technologies",
      "Database administration",
      "Information security fundamentals",
      "IT service management and support",
    ],
    subjects: [
      "Fundamentals of programming",
      "Data communication and computer networks",
      "Operating systems",
      "Database systems",
      "Network and system administration",
      "Internet programming",
      "Computer security",
      "Multimedia systems",
    ],
    technologies: [
      "Linux and Windows Server",
      "Cisco networking / packet tracer",
      "Virtualisation (VirtualBox, VMware)",
      "Cloud platforms",
      "HTML, CSS, JavaScript",
      "MySQL / PostgreSQL",
      "Git",
    ],
    skills: [
      "Configuring and troubleshooting networks",
      "Installing and maintaining systems and servers",
      "Basic scripting and automation",
      "Web development fundamentals",
      "Security awareness and hardening",
      "Documentation and user support",
    ],
    projects: [
      "Design and configure a campus network",
      "Set up a small server with users, backups and monitoring",
      "Build a website or internal portal for a department",
      "Create an IT help-desk ticketing system",
      "Deploy an application to a cloud service",
    ],
    careers: [
      "Network Administrator",
      "IT Support Specialist",
      "Systems Administrator",
      "Cloud Support Engineer",
      "IT Consultant",
      "Cybersecurity-related roles",
    ],
    modernTechnology:
      "IT sits close to cloud computing, virtualisation, DevOps practices, wireless networks and cybersecurity — the layers that keep modern digital services available.",
    careerPaths: [
      "Support technician → System administrator → Infrastructure lead",
      "Network technician → Network engineer → Network architect",
      "IT officer → Cloud support → Cloud engineer",
    ],
    whoMayEnjoy: [
      "You enjoy making technology work for other people",
      "You are curious about how computers talk to each other",
      "You like hands-on, practical work and troubleshooting",
      "You enjoy variety instead of one single task",
    ],
    whatYouCanLearn: [
      "How networks are designed, configured and secured",
      "How to run servers and services reliably",
      "Enough programming and scripting to automate your work",
      "How to support users and document systems clearly",
    ],
    skillsNote:
      "You do not need networking or programming experience to start IT. These are exactly the things you will be taught, step by step, in labs and practice.",
    related: ["information-systems", "computer-science"],
    interests: ["practical technology", "networking", "systems", "problem solving", "security"],
  },
  {
    id: "software-engineering",
    name: "Software Engineering",
    abbreviation: "SE",
    tagline: "Building software products in a disciplined way",
    intro:
      "Software Engineering is about designing, building, testing and maintaining software that real people use — and doing it as a team, with process and quality in mind.",
    focus:
      "SE focuses on the whole life of a software product: requirements, design, implementation, testing, delivery and maintenance.",
    focusKeyword: "Software development and design",
    studyAreas: [
      "Programming and object-oriented design",
      "Requirements engineering",
      "Software architecture and design patterns",
      "Web and mobile application development",
      "Software testing and quality assurance",
      "Project management and teamwork",
    ],
    subjects: [
      "Object-oriented programming",
      "Data structures and algorithms",
      "Software requirements and modelling",
      "Software design and architecture",
      "Web programming",
      "Mobile application development",
      "Software testing and quality assurance",
      "Software project management",
    ],
    technologies: [
      "Java, Python, JavaScript / TypeScript",
      "React and modern web frameworks",
      "Android / Flutter",
      "Git and GitHub",
      "REST APIs",
      "MySQL / PostgreSQL / Firebase",
      "Testing tools and CI pipelines",
    ],
    skills: [
      "Writing clean, readable code",
      "Turning user needs into features",
      "Designing systems before coding them",
      "Testing and debugging methodically",
      "Working with version control and teams",
      "Communicating technical decisions",
    ],
    projects: [
      "A web application for a campus service",
      "A mobile app for students",
      "A team project built with Git branches and code review",
      "An API plus a client that consumes it",
      "A tested module with automated test cases",
    ],
    careers: [
      "Software Developer",
      "Web Developer",
      "Mobile Developer",
      "Full-Stack Developer",
      "Software Engineer",
      "QA / Test Engineer",
    ],
    modernTechnology:
      "SE connects directly with modern web and mobile platforms, cloud deployment, APIs, DevOps and AI-assisted development tools.",
    careerPaths: [
      "Junior developer → Developer → Senior / Lead engineer",
      "Web developer → Full-stack developer → Software architect",
      "QA engineer → Test automation engineer → QA lead",
    ],
    whoMayEnjoy: [
      "You like the idea of creating something people can use",
      "You enjoy building, improving and fixing things",
      "You like structure, teamwork and clear processes",
      "You are willing to practise coding regularly",
    ],
    whatYouCanLearn: [
      "How to program, from your first line of code onwards",
      "How to design software that can grow and be maintained",
      "How professional teams plan, build and test products",
      "How to deliver a project from idea to working system",
    ],
    skillsNote:
      "Nobody arrives able to code. Software Engineering teaches programming from the beginning; what matters is your interest and willingness to practise.",
    related: ["computer-science", "it"],
    interests: ["programming", "building applications", "design", "teamwork", "problem solving"],
  },
  {
    id: "computer-science",
    name: "Computer Science",
    abbreviation: "CS",
    tagline: "The science and theory behind computing",
    intro:
      "Computer Science studies computation itself — algorithms, data, logic and the ideas that make software and intelligent systems possible.",
    focus:
      "CS focuses on computational thinking: how problems can be represented, solved efficiently, and proved correct, plus the systems and intelligence built on top of that.",
    focusKeyword: "Algorithms and computational thinking",
    studyAreas: [
      "Algorithms and data structures",
      "Theory of computation and discrete mathematics",
      "Artificial intelligence and machine learning",
      "Computer architecture and operating systems",
      "Compilers and programming languages",
      "Data science and research methods",
    ],
    subjects: [
      "Programming fundamentals",
      "Data structures and algorithm analysis",
      "Discrete mathematics and logic",
      "Automata and theory of computation",
      "Computer organisation and architecture",
      "Artificial intelligence",
      "Machine learning basics",
      "Compiler design",
    ],
    technologies: [
      "Python, C/C++, Java",
      "NumPy, pandas, scikit-learn",
      "TensorFlow / PyTorch basics",
      "Linux tooling",
      "Jupyter notebooks",
      "Git",
    ],
    skills: [
      "Breaking complex problems into solvable steps",
      "Analysing efficiency of solutions",
      "Mathematical and logical reasoning",
      "Programming and experimentation",
      "Reading and writing technical/research material",
      "Working with data and models",
    ],
    projects: [
      "Implement and compare sorting or search algorithms",
      "A small machine-learning model on a real dataset",
      "A simple interpreter or compiler front-end",
      "A game or simulation driven by an algorithm",
      "A research-style report on an experiment",
    ],
    careers: [
      "Software Developer",
      "Algorithm Engineer",
      "Data-related roles",
      "AI / ML-related roles",
      "Researcher or graduate studies",
      "Systems Developer",
    ],
    modernTechnology:
      "CS underpins artificial intelligence, data science, cryptography, computer vision and high-performance computing.",
    careerPaths: [
      "Developer → Machine-learning engineer → AI specialist",
      "Graduate → MSc/PhD → Researcher or lecturer",
      "Developer → Data engineer → Data scientist",
    ],
    whoMayEnjoy: [
      "You like puzzles and thinking problems through",
      "You are curious about why things work, not just how",
      "You enjoy mathematics and logic, or want to get better at them",
      "You are interested in AI, data or research",
    ],
    whatYouCanLearn: [
      "How to design and analyse algorithms",
      "The theory that makes computing reliable",
      "How machine learning and AI systems actually work",
      "How to carry out a small research study",
    ],
    skillsNote:
      "Strong mathematics is built during the programme, not required before it. Curiosity and willingness to keep trying matter far more than your current level.",
    related: ["software-engineering", "it"],
    interests: ["algorithms", "mathematics and logic", "research", "artificial intelligence", "programming"],
  },
  {
    id: "information-systems",
    name: "Information Systems",
    abbreviation: "IS",
    tagline: "Where technology meets organisations and people",
    intro:
      "Information Systems studies how organisations use information and technology to work better — analysing needs, designing systems and improving processes.",
    focus:
      "IS focuses on the bridge between business processes and technology: understanding an organisation, then specifying and managing the systems it needs.",
    focusKeyword: "Business processes and organisational systems",
    studyAreas: [
      "Systems analysis and design",
      "Database design and management",
      "Business process management",
      "Enterprise systems (ERP)",
      "Management information systems",
      "IT project management",
    ],
    subjects: [
      "Fundamentals of information systems",
      "Systems analysis and design",
      "Database systems",
      "Business process reengineering",
      "Enterprise resource planning",
      "Decision support systems",
      "IT project management",
      "E-business",
    ],
    technologies: [
      "SQL and relational databases",
      "ERP platforms (e.g. Odoo, SAP concepts)",
      "Modelling tools (UML, BPMN)",
      "Spreadsheets and reporting / BI tools",
      "Web technologies",
      "Low-code platforms",
    ],
    skills: [
      "Gathering and documenting requirements",
      "Modelling processes and data",
      "Designing databases",
      "Analysing and improving workflows",
      "Communicating with non-technical users",
      "Planning and coordinating projects",
    ],
    projects: [
      "A student registration or payroll system",
      "A requirements and design document for a real office",
      "A database with reports for a small business",
      "A process improvement study for a campus service",
      "A management dashboard",
    ],
    careers: [
      "Business Analyst",
      "Systems Analyst",
      "Database-related roles",
      "IT Project roles",
      "Enterprise Systems roles",
      "ERP Consultant",
    ],
    modernTechnology:
      "IS connects with business intelligence, data analytics, cloud business platforms, digital transformation and e-government systems.",
    careerPaths: [
      "Systems analyst → Business analyst → IT manager",
      "Database officer → Database administrator → Data architect",
      "Project assistant → Project coordinator → IT project manager",
    ],
    whoMayEnjoy: [
      "You like talking to people and understanding how work is done",
      "You enjoy organising and improving processes",
      "You are interested in both management and technology",
      "You like turning messy situations into clear plans",
    ],
    whatYouCanLearn: [
      "How to analyse an organisation and specify a system",
      "How to design and query databases",
      "How enterprise systems support real operations",
      "How to manage an IT project and its people",
    ],
    skillsNote:
      "You will learn the technical parts — databases, modelling, some programming — during your studies. Interest in organisations and willingness to learn are the real starting point.",
    related: ["information-science", "it"],
    interests: ["business and organisations", "databases", "analysis", "information management", "communication"],
  },
  {
    id: "information-science",
    name: "Information Science",
    abbreviation: "ISc",
    tagline: "Organising knowledge so people can find and use it",
    intro:
      "Information Science studies how information and knowledge are created, organised, stored, retrieved and shared — in digital libraries, archives, repositories and online services.",
    focus:
      "ISc focuses on the information itself: how to describe it, organise it, preserve it and make it findable for the people who need it.",
    focusKeyword: "Information organisation and retrieval",
    studyAreas: [
      "Information organisation and metadata",
      "Information retrieval and search",
      "Knowledge management",
      "Digital libraries and repositories",
      "Records management and preservation",
      "Information services and user studies",
    ],
    subjects: [
      "Foundations of information science",
      "Cataloguing, classification and metadata",
      "Information storage and retrieval",
      "Knowledge organisation systems",
      "Digital library technologies",
      "Archives and records management",
      "Research methods",
      "Information literacy services",
    ],
    technologies: [
      "DSpace, Koha, Greenstone",
      "Metadata standards (Dublin Core, MARC)",
      "Databases and SQL basics",
      "Search and indexing tools",
      "Content management systems",
      "Data cleaning and analysis tools",
    ],
    skills: [
      "Describing and classifying information",
      "Designing search and retrieval systems",
      "Curating and preserving digital content",
      "Helping users find reliable information",
      "Research and evaluation",
      "Working with standards and quality control",
    ],
    projects: [
      "Build a digital repository for student projects",
      "Design a metadata scheme for a collection",
      "An institutional knowledge-sharing portal",
      "A study of how students search for information",
      "Digitise and organise an archive",
    ],
    careers: [
      "Information Specialist",
      "Knowledge Management roles",
      "Information Analyst",
      "Digital Information / Repository roles",
      "Information and research services",
      "Records / Archives officer",
    ],
    modernTechnology:
      "ISc connects with search engines, open data, digital preservation, semantic web and the information side of data science and AI.",
    careerPaths: [
      "Information officer → Information specialist → Knowledge manager",
      "Repository assistant → Digital librarian → Digital collections lead",
      "Research assistant → Information analyst → Research data manager",
    ],
    whoMayEnjoy: [
      "You like order, structure and clear categories",
      "You enjoy research and finding reliable sources",
      "You want to help people access knowledge",
      "You are interested in digital content and preservation",
    ],
    whatYouCanLearn: [
      "How information is described, stored and retrieved",
      "How to build and run digital repositories",
      "How knowledge is managed in institutions",
      "How to conduct and present research",
    ],
    skillsNote:
      "Technical tools in this field are taught gradually. Your interest in information, research and helping people is the best reason to start here.",
    related: ["information-systems", "computer-science"],
    interests: ["information organisation", "research", "knowledge management", "digital content", "helping users"],
  },
];

export const departmentIds = departments.map((d) => d.id);

export function getDepartment(id: string): Department | undefined {
  return departments.find((d) => d.id === id);
}
