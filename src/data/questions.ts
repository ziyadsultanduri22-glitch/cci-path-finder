import type { DepartmentId } from "./departments";

/**
 * Interest-based assessment questions.
 * These questions do NOT test technical knowledge. They ask about
 * interests, preferences, curiosity and willingness to learn.
 */

export type Scores = Partial<Record<DepartmentId, number>>;

export interface QuestionOption {
  id: string;
  text: string;
  scores: Scores;
  interests?: string[];
}

export interface Question {
  id: number;
  category: string;
  question: string;
  options: QuestionOption[];
}

const IT: DepartmentId = "it";
const SE: DepartmentId = "software-engineering";
const CS: DepartmentId = "computer-science";
const IS: DepartmentId = "information-systems";
const ISC: DepartmentId = "information-science";

export const questions: Question[] = [
  {
    id: 1,
    category: "Activities",
    question: "Which activity sounds most interesting to you?",
    options: [
      { id: "a", text: "Building websites or software", scores: { [SE]: 3, [IT]: 1 }, interests: ["building applications"] },
      { id: "b", text: "Understanding how computers and networks communicate", scores: { [IT]: 3, [CS]: 1 }, interests: ["networking"] },
      { id: "c", text: "Solving complex computational problems", scores: { [CS]: 3, [SE]: 1 }, interests: ["algorithms"] },
      { id: "d", text: "Connecting technology with business processes", scores: { [IS]: 3, [IT]: 1 }, interests: ["business and organisations"] },
      { id: "e", text: "Organising, managing and finding information", scores: { [ISC]: 3, [IS]: 1 }, interests: ["information organisation"] },
    ],
  },
  {
    id: 2,
    category: "Projects",
    question: "What kind of project would you enjoy working on?",
    options: [
      { id: "a", text: "Developing a mobile or web application", scores: { [SE]: 3, [IT]: 1 }, interests: ["building applications"] },
      { id: "b", text: "Configuring and managing a network", scores: { [IT]: 3 }, interests: ["networking"] },
      { id: "c", text: "Designing an algorithm to solve a difficult problem", scores: { [CS]: 3 }, interests: ["algorithms"] },
      { id: "d", text: "Developing a system for an organisation", scores: { [IS]: 3, [SE]: 1 }, interests: ["organisational systems"] },
      { id: "e", text: "Creating an organised information or knowledge system", scores: { [ISC]: 3, [IS]: 1 }, interests: ["knowledge management"] },
    ],
  },
  {
    id: 3,
    category: "Technology curiosity",
    question: "When you meet a new technology, what do you prefer to do?",
    options: [
      { id: "a", text: "Try building something with it", scores: { [SE]: 3, [IT]: 1 }, interests: ["hands-on building"] },
      { id: "b", text: "Understand how it works in practice", scores: { [IT]: 3, [CS]: 1 }, interests: ["practical technology"] },
      { id: "c", text: "Explore the underlying concepts and theory", scores: { [CS]: 3 }, interests: ["theory and concepts"] },
      { id: "d", text: "Think about how organisations could use it", scores: { [IS]: 3 }, interests: ["business and organisations"] },
      { id: "e", text: "Learn how information in it can be organised and accessed", scores: { [ISC]: 3 }, interests: ["information organisation"] },
    ],
  },
  {
    id: 4,
    category: "Willingness to learn",
    question: "How do you feel about learning something you currently don't know?",
    options: [
      { id: "a", text: "I enjoy learning new things.", scores: { [IT]: 1, [SE]: 1, [CS]: 1, [IS]: 1, [ISC]: 1 }, interests: ["eagerness to learn"] },
      { id: "b", text: "I am willing to practise until I understand it.", scores: { [SE]: 2, [IT]: 1, [CS]: 1 }, interests: ["persistence"] },
      { id: "c", text: "I enjoy challenging myself with hard material.", scores: { [CS]: 2, [SE]: 1 }, interests: ["challenge"] },
      { id: "d", text: "I like learning when I can see practical benefits.", scores: { [IT]: 2, [IS]: 2 }, interests: ["practical learning"] },
      { id: "e", text: "I am curious and willing to explore on my own.", scores: { [ISC]: 2, [CS]: 1 }, interests: ["curiosity"] },
    ],
  },
  {
    id: 5,
    category: "Problem solving",
    question: "How do you usually approach a problem?",
    options: [
      { id: "a", text: "I sketch a solution and start building it", scores: { [SE]: 3 }, interests: ["building"] },
      { id: "b", text: "I test things until I find what is wrong", scores: { [IT]: 3 }, interests: ["troubleshooting"] },
      { id: "c", text: "I analyse it logically and look for the most efficient answer", scores: { [CS]: 3 }, interests: ["logical analysis"] },
      { id: "d", text: "I ask the people involved what they really need", scores: { [IS]: 3 }, interests: ["communication"] },
      { id: "e", text: "I gather and organise information before deciding", scores: { [ISC]: 3 }, interests: ["research"] },
    ],
  },
  {
    id: 6,
    category: "Creativity",
    question: "Which form of creativity appeals to you most?",
    options: [
      { id: "a", text: "Creating a product or interface people use", scores: { [SE]: 3, [IS]: 1 }, interests: ["product creation"] },
      { id: "b", text: "Designing a setup that works reliably", scores: { [IT]: 3 }, interests: ["systems design"] },
      { id: "c", text: "Finding a clever solution nobody thought of", scores: { [CS]: 3 }, interests: ["innovation"] },
      { id: "d", text: "Redesigning how work is done in an organisation", scores: { [IS]: 3 }, interests: ["process improvement"] },
      { id: "e", text: "Structuring content so it becomes easy to use", scores: { [ISC]: 3 }, interests: ["information structuring"] },
    ],
  },
  {
    id: 7,
    category: "Programming interest",
    question: "How interested are you in writing code — even if you have never tried it?",
    options: [
      { id: "a", text: "Very interested, I want to build software", scores: { [SE]: 3, [CS]: 2 }, interests: ["programming"] },
      { id: "b", text: "Interested, mainly to automate practical tasks", scores: { [IT]: 3, [SE]: 1 }, interests: ["scripting"] },
      { id: "c", text: "Interested in coding to solve problems and test ideas", scores: { [CS]: 3 }, interests: ["problem solving with code"] },
      { id: "d", text: "Some interest, but I care more about the system overall", scores: { [IS]: 3 }, interests: ["systems thinking"] },
      { id: "e", text: "A little; I prefer working with information and content", scores: { [ISC]: 3 }, interests: ["information work"] },
    ],
  },
  {
    id: 8,
    category: "Networking interest",
    question: "Does the idea of setting up networks, servers and devices attract you?",
    options: [
      { id: "a", text: "Yes, very much", scores: { [IT]: 4 }, interests: ["networking"] },
      { id: "b", text: "Somewhat, as part of building complete systems", scores: { [IT]: 2, [SE]: 1 }, interests: ["infrastructure"] },
      { id: "c", text: "Only the theory of how it works", scores: { [CS]: 2, [IT]: 1 }, interests: ["theory"] },
      { id: "d", text: "Only as it supports an organisation's operations", scores: { [IS]: 2 }, interests: ["organisational systems"] },
      { id: "e", text: "Not really my main interest", scores: { [ISC]: 2 }, interests: [] },
    ],
  },
  {
    id: 9,
    category: "Data interest",
    question: "What would you most like to do with data?",
    options: [
      { id: "a", text: "Store it safely and keep systems running", scores: { [IT]: 3 }, interests: ["data operations"] },
      { id: "b", text: "Use it inside an application I build", scores: { [SE]: 3 }, interests: ["application data"] },
      { id: "c", text: "Analyse it and find patterns or predictions", scores: { [CS]: 3 }, interests: ["data analysis"] },
      { id: "d", text: "Turn it into reports that support decisions", scores: { [IS]: 3 }, interests: ["decision support"] },
      { id: "e", text: "Describe, classify and make it findable", scores: { [ISC]: 3 }, interests: ["metadata"] },
    ],
  },
  {
    id: 10,
    category: "Business interest",
    question: "How interested are you in how organisations and businesses operate?",
    options: [
      { id: "a", text: "Very interested — I want to improve how they work", scores: { [IS]: 4 }, interests: ["business processes"] },
      { id: "b", text: "Interested, mainly in the technology they depend on", scores: { [IT]: 3, [IS]: 1 }, interests: ["practical technology"] },
      { id: "c", text: "Interested in building the software they use", scores: { [SE]: 3 }, interests: ["software products"] },
      { id: "d", text: "Interested in their information and records", scores: { [ISC]: 3 }, interests: ["records"] },
      { id: "e", text: "I prefer technical and scientific questions", scores: { [CS]: 3 }, interests: ["science and theory"] },
    ],
  },
  {
    id: 11,
    category: "Information organisation",
    question: "How do you feel about organising large amounts of material?",
    options: [
      { id: "a", text: "I enjoy it — good structure makes everything easier", scores: { [ISC]: 4, [IS]: 1 }, interests: ["information organisation"] },
      { id: "b", text: "I like it when it is part of a database design", scores: { [IS]: 3, [ISC]: 1 }, interests: ["databases"] },
      { id: "c", text: "I prefer writing a program to organise it for me", scores: { [SE]: 3, [CS]: 1 }, interests: ["automation"] },
      { id: "d", text: "I like organising the systems that store it", scores: { [IT]: 3 }, interests: ["systems"] },
      { id: "e", text: "I prefer analysing it mathematically", scores: { [CS]: 3 }, interests: ["analysis"] },
    ],
  },
  {
    id: 12,
    category: "Communication",
    question: "How much do you enjoy explaining things to other people?",
    options: [
      { id: "a", text: "A lot — I like training and advising people", scores: { [IS]: 2, [ISC]: 2, [IT]: 1 }, interests: ["communication"] },
      { id: "b", text: "I enjoy helping users solve technical problems", scores: { [IT]: 3 }, interests: ["user support"] },
      { id: "c", text: "I enjoy discussing designs with a team", scores: { [SE]: 3 }, interests: ["teamwork"] },
      { id: "d", text: "I enjoy presenting findings and research", scores: { [CS]: 2, [ISC]: 2 }, interests: ["presenting"] },
      { id: "e", text: "I prefer focused individual work", scores: { [CS]: 2, [SE]: 1 }, interests: ["focused work"] },
    ],
  },
  {
    id: 13,
    category: "System thinking",
    question: "Which statement fits you best?",
    options: [
      { id: "a", text: "I like seeing how all the parts of a big system fit together", scores: { [IS]: 2, [IT]: 2 }, interests: ["systems thinking"] },
      { id: "b", text: "I like building one part really well", scores: { [SE]: 3 }, interests: ["craftsmanship"] },
      { id: "c", text: "I like understanding the rules behind the system", scores: { [CS]: 3 }, interests: ["theory"] },
      { id: "d", text: "I like making sure everything is documented and findable", scores: { [ISC]: 3 }, interests: ["documentation"] },
      { id: "e", text: "I like keeping the whole system available and secure", scores: { [IT]: 3 }, interests: ["reliability"] },
    ],
  },
  {
    id: 14,
    category: "Research interest",
    question: "How appealing is doing research and reading deeply about a topic?",
    options: [
      { id: "a", text: "Very appealing — I may continue to postgraduate study", scores: { [CS]: 3, [ISC]: 2 }, interests: ["research"] },
      { id: "b", text: "Appealing when it improves a real service", scores: { [IS]: 2, [ISC]: 2 }, interests: ["applied research"] },
      { id: "c", text: "I prefer learning by building things", scores: { [SE]: 3 }, interests: ["learning by doing"] },
      { id: "d", text: "I prefer learning by configuring and testing", scores: { [IT]: 3 }, interests: ["hands-on practice"] },
      { id: "e", text: "I enjoy a balance of reading and practice", scores: { [CS]: 1, [SE]: 1, [IT]: 1, [IS]: 1, [ISC]: 1 }, interests: ["balanced learning"] },
    ],
  },
  {
    id: 15,
    category: "Career interest",
    question: "Which future job description attracts you most?",
    options: [
      { id: "a", text: "Developer building applications and features", scores: { [SE]: 4 }, interests: ["software development"] },
      { id: "b", text: "Administrator keeping networks and servers healthy", scores: { [IT]: 4 }, interests: ["administration"] },
      { id: "c", text: "Specialist in algorithms, data or artificial intelligence", scores: { [CS]: 4 }, interests: ["AI and data"] },
      { id: "d", text: "Analyst improving organisational systems", scores: { [IS]: 4 }, interests: ["analysis"] },
      { id: "e", text: "Specialist managing information and knowledge resources", scores: { [ISC]: 4 }, interests: ["information services"] },
    ],
  },
  {
    id: 16,
    category: "Working style",
    question: "Which working environment sounds best?",
    options: [
      { id: "a", text: "A development team shipping software", scores: { [SE]: 3 }, interests: ["teamwork"] },
      { id: "b", text: "A technical unit with labs, devices and servers", scores: { [IT]: 3 }, interests: ["hands-on work"] },
      { id: "c", text: "A research group or laboratory", scores: { [CS]: 3 }, interests: ["research"] },
      { id: "d", text: "An office working with different departments", scores: { [IS]: 3 }, interests: ["collaboration"] },
      { id: "e", text: "A library, archive or information centre", scores: { [ISC]: 3 }, interests: ["information services"] },
    ],
  },
  {
    id: 17,
    category: "Mathematics and logic",
    question: "How do you feel about mathematics and logic?",
    options: [
      { id: "a", text: "I enjoy them, or I want to become strong in them", scores: { [CS]: 4 }, interests: ["mathematics and logic"] },
      { id: "b", text: "I am fine with them when they are applied to real tasks", scores: { [SE]: 2, [IT]: 2 }, interests: ["applied logic"] },
      { id: "c", text: "I prefer statistics and reports over abstract maths", scores: { [IS]: 3 }, interests: ["statistics"] },
      { id: "d", text: "I prefer structure and classification over calculation", scores: { [ISC]: 3 }, interests: ["classification"] },
      { id: "e", text: "I am still developing, but willing to practise", scores: { [CS]: 1, [SE]: 1, [IT]: 1, [IS]: 1, [ISC]: 1 }, interests: ["willingness to learn"] },
    ],
  },
  {
    id: 18,
    category: "Impact",
    question: "What kind of impact would make you proud?",
    options: [
      { id: "a", text: "An app many people use every day", scores: { [SE]: 3 }, interests: ["products"] },
      { id: "b", text: "A network or service that never fails", scores: { [IT]: 3 }, interests: ["reliability"] },
      { id: "c", text: "A discovery or a smarter method", scores: { [CS]: 3 }, interests: ["innovation"] },
      { id: "d", text: "An organisation working much more efficiently", scores: { [IS]: 3 }, interests: ["efficiency"] },
      { id: "e", text: "Knowledge made accessible to everyone", scores: { [ISC]: 3 }, interests: ["access to knowledge"] },
    ],
  },
  {
    id: 19,
    category: "Learning preference",
    question: "How would you prefer to spend most of your study time?",
    options: [
      { id: "a", text: "Writing and reviewing code", scores: { [SE]: 3, [CS]: 1 }, interests: ["programming"] },
      { id: "b", text: "Working in labs with equipment and configurations", scores: { [IT]: 3 }, interests: ["labs"] },
      { id: "c", text: "Solving exercises and proofs", scores: { [CS]: 3 }, interests: ["problem solving"] },
      { id: "d", text: "Case studies of real organisations", scores: { [IS]: 3 }, interests: ["case studies"] },
      { id: "e", text: "Working with collections, content and sources", scores: { [ISC]: 3 }, interests: ["content work"] },
    ],
  },
  {
    id: 20,
    category: "Willingness to learn",
    question: "If a subject turns out to be difficult at first, what would you most likely do?",
    options: [
      { id: "a", text: "Keep practising until it becomes clear", scores: { [SE]: 2, [IT]: 1, [CS]: 1 }, interests: ["persistence"] },
      { id: "b", text: "Ask lecturers, friends or online communities for help", scores: { [IT]: 2, [IS]: 1 }, interests: ["seeking help"] },
      { id: "c", text: "Study the basics again from the beginning", scores: { [CS]: 2, [ISC]: 1 }, interests: ["foundations"] },
      { id: "d", text: "Look for a practical example that shows why it matters", scores: { [IS]: 2, [IT]: 1 }, interests: ["practical learning"] },
      { id: "e", text: "Break it into smaller parts and organise my study", scores: { [ISC]: 2, [SE]: 1 }, interests: ["organised study"] },
    ],
  },
];

export const totalQuestions = questions.length;
