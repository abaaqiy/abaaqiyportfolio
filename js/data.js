// =========================================================
// SITE-WIDE DATA
// Edit this file to update site content without touching HTML.
// =========================================================

const SITE = {
  email: "abdulbaaqiyshefiu@gmail.com",
  github: "https://github.com/abaaqiy",
  linkedin: "https://www.linkedin.com/in/abdulbaaqiy-shefiu-badamosi-373ab3351",
};

const SKILLS = [
  {
    title: "Languages & Web Fundamentals",
    items: [
      { name: "JavaScript (ES6+)", level: "project" },
      { name: "HTML5", level: "project" },
      { name: "CSS3", level: "project" },
    ],
  },
  {
    title: "Frameworks & Styling",
    items: [
      { name: "React.js", level: "project" },
      { name: "Tailwind CSS", level: "project" },
    ],
  },
  {
    title: "Development Tools",
    items: [
      { name: "Git", level: "project" },
      { name: "GitHub", level: "project" },
      { name: "Visual Studio Code", level: "project" },
      { name: "Vite", level: "project" },
      { name: "npm", level: "project" },
    ],
  },
  {
    title: "Front-End Concepts",
    items: [
      { name: "Responsive web design", level: "project" },
      { name: "Reusable components", level: "project" },
      { name: "Props and state", level: "project" },
      { name: "Conditional rendering", level: "project" },
      { name: "Event handling", level: "project" },
      { name: "Form handling", level: "project" },
      { name: "UI implementation", level: "project" },
      { name: "Debugging", level: "project" },
      { name: "Accessibility fundamentals", level: "learning" },
    ],
  },
];

const PROJECTS = [
  {
    id: "amazing-roy",
    title: "Amazing Roy Website",
    status: "Live",
    description:
      "A bespoke fashion brand website for a modest couture label, focused on clean editorial layout, service presentation, and a refined brand aesthetic.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Editorial hero with brand positioning",
      "Service and craft showcase sections",
      "Responsive layouts across screen sizes",
      "Clean typography and visual hierarchy",
    ],
    image: "assets/projects/amazing-roy.png",
    live: "https://amazing-roy.vercel.app/",
    repo: null,
  },
  {
    id: "event-ticket-generator",
    title: "Event Ticket Generator",
    status: "Completed",
    description:
      "A web tool that generates event tickets from user input, with a clean interface for entering event details and previewing the final ticket output.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Form-based ticket detail input",
      "Dynamic ticket preview rendering",
      "Reusable interface components",
      "Responsive layout and styling",
    ],
    image: "assets/projects/event-ticket-generator.png",
    live: null,
    repo: "https://github.com/abaaqiy/event-ticket-generator.git",
  },
  {
    id: "clipboard-landing",
    title: "Clipboard Landing Page",
    status: "Completed",
    description:
      "A landing page inspired by a Frontend Mentor design challenge, focused on translating a supplied design into a clean, responsive web interface.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    features: [
      "Structured landing page sections",
      "Typography and spacing system",
      "Responsive layouts across breakpoints",
      "SVG icons and accessibility considerations",
    ],
    image: "assets/projects/clipboard-landing.png",
    live: null,
    repo: "https://github.com/abaaqiy/clipboard-landing-page.git",
  },
];