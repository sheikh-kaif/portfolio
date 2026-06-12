export const SKILLS = [
  {
    icon: "⚛️",
    name: "Frontend",
    desc: "React, Next.js, TypeScript, Tailwind CSS",
    level: 0.92,
  },
  {
    icon: "🖥️",
    name: "Backend",
    desc: "Node.js, Express, REST APIs, GraphQL",
    level: 0.85,
  },
  {
    icon: "🗄️",
    name: "Databases",
    desc: "PostgreSQL, MongoDB, Redis, Prisma",
    level: 0.8,
  },
  {
    icon: "☁️",
    name: "Cloud & DevOps",
    desc: "AWS, Docker, CI/CD, Terraform",
    level: 0.75,
  },
  {
    icon: "🌿",
    name: "Version Control",
    desc: "Git, GitHub, code reviews, monorepos",
    level: 0.95,
  },
  {
    icon: "💻",
    name: "Languages",
    desc: "JavaScript, TypeScript, Python, Bash",
    level: 0.88,
  },
];

export const PROJECTS = [
  {
    tag: "Web App",
    title: "Mosque Donation Platform",
    desc: "A community-driven donation platform that enables students and alumni to contribute to the mosque online, receive automated Friday donation reminders, and track donation history securely.",
    stack: ["React", "Node.js", "Firebase Auth", "MongoDB", "Razorpay"],
    link: "https://mosque-donation-app-six.vercel.app/",
  },
  {
    tag: "Browser Extension",
    title: "YouTube Auto Skip",
    desc: "Developed a Chrome extension that automatically detects and skips YouTube advertisements by simulating user clicks through the Chrome Debugger API, delivering a seamless viewing experience without manual interaction.",
    stack: [
      "JavaScript",
      "Chrome Manifest V3",
      "Chrome Debugger API",
      "Service Worker",
      "chrome.storage.local",
      "HTML",
      "CSS",
    ],
    link: "https://github.com/sheikh-kaif/youtube-auto-ad-skipper-extension",
  },
  {
    tag: "Mobile",
    title: "Nomad Tracker",
    desc: "Travel and expense tracker for remote workers with budget insights and offline support.",
    stack: ["React Native", "Expo", "SQLite"],
  },
  {
    tag: "Open Source",
    title: "CLI Scaffold",
    desc: "Developer tool to scaffold production-ready project templates in seconds from the terminal.",
    stack: ["TypeScript", "Commander.js", "Inquirer"],
  },
];
