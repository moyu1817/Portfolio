// Enter all your details in this file
// Profile Image
import profile from "./assets/Profile2.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import postman from "./assets/techstack/postman.png";
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
  about: `I'm a Computer Engineering graduate from Mae Fah Luang University (GPAX 3.79/4.0) who builds backend systems with Python, FastAPI, MongoDB, and MySQL. I contributed to an AI-powered analytics platform at Codigo integrating OpenAI, Claude, and Groq, validating 230+ business queries. Now at DVB Association, I build database features and Tableau dashboards for research reporting. I speak Burmese (native) and English (fluent), and I'm currently studying Japanese (N4). Based in Chiang Mai, Thailand and open to relocate.`,
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
// invert: true flips black single-colour logos to white in dark mode)
export const techStackDetails = [
  {
    heading: "Tech Stack",
    items: [
      { name: "Python", img: devicon("python") },
      { name: "Java", img: devicon("java") },
      { name: "JavaScript", img: js },
      { name: "FastAPI", img: devicon("fastapi") },
      { name: "MongoDB", img: devicon("mongodb") },
      { name: "MySQL", img: devicon("mysql") },
      { name: "HTML", img: html },
      { name: "CSS", img: css },
      { name: "React", img: react },
      { name: "Flutter", img: devicon("flutter") },
    ],
  },
  {
    heading: "AI & Data",
    items: [
      { name: "Pandas", img: devicon("pandas") },
      { name: "Matplotlib", img: devicon("matplotlib") },
      { name: "scikit-learn", img: devicon("scikitlearn") },
      { name: "OpenCV", img: devicon("opencv") },
      { name: "Tableau", img: iconifyLogo("tableau-icon") },
      { name: "OpenAI API", img: iconifyLogo("openai-icon"), invert: true },
      { name: "Claude API", img: iconifyLogo("claude-icon") },
      { name: "Groq API", img: lobehub("groq"), invert: true },
    ],
  },
  {
    heading: "Tools",
    items: [
      { name: "Git", img: git },
      { name: "GitHub", img: github, invert: true },
      { name: "Postman", img: postman },
      { name: "VS Code", img: vscode },
      { name: "Jupyter", img: devicon("jupyter") },
      { name: "Nginx", img: devicon("nginx") },
      { name: "Swagger UI", img: devicon("swagger") },
      { name: "MongoDB Compass", img: devicon("mongodb") },
      { name: "Claude Code", img: lobehub("claudecode-color") },
    ],
  },
];

// Enter your Project Details here (image, previewLink and githubLink are optional)
export const projectDetails = [
  {
    title: "Automated Cryptocurrency Trading Bot",
    image: tradingBotImage,
    description: `Senior research project (2024 - 2025). A Binance trading bot with 6 strategies, including a custom RSI + pivot + EMA strategy, backtested on 5 years of SOL/USDT data. A 2-of-3 majority vote cuts false signals.`,
    techstack: "Python, CCXT",
    previewLink: "https://drive.google.com/file/d/17GBJPiuh79tsWXWf0Pr6GEwUfBeUKgCp/view?usp=sharing",
    previewLabel: "Documentation",
    githubLink: "https://github.com/moyu1817/Automated-Cryptocurrency-Trading-Console-Application",
  },
  {
    title: "Image Processing & Human Action Recognition App",
    image: poseAppImage,
    description: `Academic project (2024), built with a classmate. A desktop app replacing a MATLAB workflow for image enhancement and edge detection, with MediaPipe Pose recognizing five poses in real time.`,
    techstack: "Python, Tkinter, OpenCV, MediaPipe",
    githubLink: "https://github.com/moyu1817/Image_Processing_GUI-app",
  },
  {
    title: "Sport Equipment Lending App",
    image: sportAppImage,
    description: `A cross-platform Android/iOS app (2023 - 2024) for borrowing and returning sport equipment, with reservations, borrowing history, and a dashboard. Talks to a REST backend with JWT authentication.`,
    techstack: "Flutter, GetX, REST API, JWT, fl_chart",
    githubLink: "https://github.com/moyu1817/MobileApp",
  },
  {
    title: "Library Room Reservation System",
    image: reservUImage,
    description: `A website university students use to book library rooms (2023 - 2024), which reduced scheduling conflicts. I built both the frontend and the backend, including sessions and real-time availability.`,
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
  availability: "Open to full-time roles and relocation",
};
