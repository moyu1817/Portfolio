// Enter all your details in this file
// Profile Image
import profile from "./assets/Profile2.jpg";
// Tech stack images
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
// Project screenshots
import reservUImage from "./assets/projects/ReservU.webp";
import sportAppImage from "./assets/projects/SportApp.webp";
// Placeholder illustrations until real screenshots are added
import tradingBotImage from "./assets/projects/TradingBot.svg";
import poseAppImage from "./assets/projects/PoseApp.svg";

// Icons not bundled in src/assets come from icon CDNs
const devicon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`;
const iconifyLogo = (name) => `https://api.iconify.design/logos/${name}.svg`;
const lobehub = (name) =>
  `https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.95.1/icons/${name}.svg`;

// Enter your Personal Details here
export const personalDetails = {
  name: "Moe Yu",
  // Roles typed out one after another under your name
  roles: ["Software Engineer", "AI Engineer", "Data Analyst"],
  // One-line intro shown under the roles
  intro: "I like to build backend systems, AI-powered tools, and data dashboards that turn raw data into useful answers, using Python, FastAPI, OpenAI, Claude, and Tableau.",
  img: profile,
  // Resume file placed in the public folder
  resume: `${process.env.PUBLIC_URL}/MoeYu_CV.pdf`,
  // A blank line starts a new paragraph
  about: `I'm a Computer Engineering graduate from Mae Fah Luang University (GPAX 3.79/4.0) who builds backend systems with Python, FastAPI, MongoDB, and MySQL. I contributed to an AI-powered analytics platform at Codigo integrating OpenAI, Claude, and Groq, validating 230+ business queries. Now at DVB Association, I build database features and Tableau dashboards for research reporting.

I speak Burmese (native) and English (fluent), and I'm currently studying Japanese (N4). Based in Chiang Mai, Thailand and open to relocate.`,
};

// Enter your Social Media URLs here (leave empty to hide an icon)
export const socialMediaUrl = {
  linkdein: "https://linkedin.com/in/moe-yu-8755a42a6",
  github: "https://github.com/moyu1817",
  twitter: "",
  instagram: "https://www.instagram.com/_moyu_22",
};

// Enter your Work Experience here (Summary is an optional one-line highlight)
export const workDetails = [
  {
    Position: "Data Analyst & Software Engineering Intern",
    Company: `DVB Association`,
    Location: "Chiang Mai, Thailand",
    Type: "Internship",
    Duration: "Jun 2026 - Present",
    Summary: "Building backend and database features and Tableau dashboards for research reporting.",
  },
  {
    Position: "Backend Developer Intern",
    Company: `Codigo Pte. Ltd.`,
    Location: "Remote, Singapore",
    Type: "Internship",
    Duration: "Jan 2026 - Apr 2026",
    Summary: "Contributed to an AI-powered analytics platform integrating OpenAI, Claude, and Groq, validating 230+ business queries.",
  },
  {
    Position: "Freelance Transcriber | Project Manager",
    Company: `Productive Playhouse, Inc.`,
    Location: "Remote, Myanmar",
    Type: "Freelance",
    Duration: "2022 - 2023",
    Summary: "Led teams of 25-30 people delivering 2,300+ Burmese audio files at 99% accuracy.",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Engineering in Computer Engineering",
    Company: "Mae Fah Luang University",
    Location: "Chiang Rai, Thailand",
    Type: "GPAX 3.79/4.0",
    Duration: "Graduated Jun 2026",
  },
];

// Tech Stack and Tools, grouped into sections (items without an img show as a letter tile;
// invert: true flips black single-colour logos to white in dark mode).
// chips: true shows a group as plain text chips instead of logos (used for the supporting tools)
export const techStackDetails = [
  {
    heading: "Languages",
    items: [
      { name: "Python", img: devicon("python") },
      { name: "Java", img: devicon("java") },
      { name: "JavaScript", img: js },
    ],
  },
  {
    heading: "Frameworks & Databases",
    items: [
      { name: "FastAPI", img: devicon("fastapi") },
      { name: "React", img: react },
      { name: "Flutter", img: devicon("flutter") },
      { name: "MongoDB", img: devicon("mongodb") },
      { name: "MySQL", img: devicon("mysql"), invert: true },
    ],
  },
  {
    heading: "AI & ML",
    items: [
      { name: "OpenAI API", img: iconifyLogo("openai-icon"), invert: true },
      { name: "Claude API", img: iconifyLogo("claude-icon") },
      { name: "Groq API", img: lobehub("groq"), invert: true },
      { name: "scikit-learn", img: devicon("scikitlearn") },
      { name: "OpenCV", img: devicon("opencv") },
    ],
  },
  {
    heading: "Data",
    items: [
      { name: "Pandas", img: devicon("pandas"), invert: true },
      { name: "Matplotlib", img: devicon("matplotlib") },
      { name: "Tableau", img: iconifyLogo("tableau-icon") },
    ],
  },
  {
    heading: "Tools",
    chips: true,
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Swagger UI" },
      { name: "MongoDB Compass" },
      { name: "Nginx" },
      { name: "Jupyter" },
      { name: "VS Code" },
      { name: "Claude Code" },
    ],
  },
];

// Enter your Project Details here (image, previewLink and githubLink are optional).
// highlight: optional one-line result shown under the description.
// details: optional bullet points, shown when the visitor taps "Details" on the card.
// imageInvert: true inverts a light mockup image in dark mode so it doesn't glare (for grayscale drawings only;
// photos and screenshots are just dimmed slightly)
export const projectDetails = [
  {
    title: "Automated Cryptocurrency Trading Bot",
    image: tradingBotImage,
    imageInvert: true,
    description: `Senior research project (2024 - 2025). A Binance trading bot with 6 strategies, backtested on 5 years of hourly SOL/USDT data.`,
    highlight: "+87.5% backtested return (EMA Crossover, 2021 bull market)",
    details: [
      "A custom RSI_Pivot strategy combines pivot points, RSI momentum and EMA trend, and was the most consistent across all market conditions.",
      "A 2-of-3 majority-vote mode across all 10 strategy combinations cuts false signals.",
      "4 real-time monitoring modules with CSV logging.",
    ],
    techstack: "Python, CCXT",
    previewLink: "https://drive.google.com/file/d/17GBJPiuh79tsWXWf0Pr6GEwUfBeUKgCp/view?usp=sharing",
    previewLabel: "Documentation",
    githubLink: "https://github.com/moyu1817/Automated-Cryptocurrency-Trading-Console-Application",
  },
  {
    title: "Image Processing & Human Action Recognition App",
    image: poseAppImage,
    imageInvert: true,
    description: `Academic project (2024), built with a classmate. A desktop app for image enhancement, edge detection and pose recognition.`,
    highlight: "Replaced a MATLAB workflow; recognizes 5 poses in real time",
    details: [
      "Enhancement, edge detection (Sobel, Canny, Otsu) and image transformations in one Tkinter interface.",
      "MediaPipe Pose tracks body landmarks to recognize five poses from a live camera.",
    ],
    techstack: "Python, Tkinter, OpenCV, MediaPipe",
    githubLink: "https://github.com/moyu1817/Image_Processing_GUI-app",
  },
  {
    title: "Sport Equipment Lending App",
    image: sportAppImage,
    description: `A cross-platform Android/iOS app (2023 - 2024) for borrowing and returning sport equipment.`,
    highlight: "One Flutter codebase for Android and iOS",
    details: [
      "Login, equipment browsing, reservations, borrowing history and profile management.",
      "Talks to a REST backend over HTTP with JWT authentication and secure token storage.",
      "GetX for state management and fl_chart for the dashboard charts.",
    ],
    techstack: "Flutter, GetX, REST API, JWT, fl_chart",
    githubLink: "https://github.com/moyu1817/MobileApp",
  },
  {
    title: "Library Room Reservation System",
    image: reservUImage,
    description: `A website university students use to book library rooms (2023 - 2024).`,
    highlight: "Used by students to book rooms; reduced scheduling conflicts",
    details: [
      "Built both the frontend and the backend database logic.",
      "User sessions and real-time room availability.",
    ],
    techstack: "HTML/CSS, JavaScript, MySQL",
    githubLink: "https://github.com/moyu1817/WebApp",
  },
];

// Enter your Contact Details here (location/availability are optional; leave empty to hide a card)
export const contactDetails = {
  heading: "Let's Work Together",
  subheading: "Open to Software Engineer, AI Engineer, and Data Analyst roles.",
  email: "moeyu17.my@gmail.com",
  // International format so the number works for callers outside Thailand
  phone: "+66 96 170 3276",
  location: "Chiang Mai, Thailand",
  availability: "Full-time, open to relocation",
};
