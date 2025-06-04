"use client";

import { ProjectShowcase } from '../components/ui/ProjectShowcase';

const projectsData = [
  {
  title: "Timley",
  description: "Timely is a secure time-limited link generator with a Spring Boot backend and MySQL, featuring JWT authentication, expiry-time validation, and automatic redirection to a custom error page via a lightweight static frontend. .",
  image: "/timely.png",
  technologies: [
    "Java",
    "Spring Boot",
    "MongoDB",
    "JWT",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  liveLink: "https://timely.raniasmit.me/",
  githubLink: "https://github.com/RaniAsmit/Timely"
  },
  {
    title: "SheSOS",
    description: "SheSOS is an innovative mobile application designed to provide immediate assistance to women in emergency situations. Developed using Flutter, the app ensures rapid and reliable access to essential emergency services, enhancing user safety and security.",
    image: "/shesos.avif",
    technologies: ["Flutter", "Dart", "C++","HTML","XML"],
    githubLink: "https://github.com/RaniAsmit/SheSOS"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js 14, featuring dark mode, smooth animations, and responsive design. Showcases my projects and professional experience.",
    image: "/logo.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://raniasmit.me",
    githubLink: "https://github.com/RaniAsmit/Portfolio"
  },
  {
  title: "Spot Saver",
  description: "A Flutter-based real-time parking space sharing app that helps users find and share available parking spots. Designed to reduce parking congestion with efficient data handling, structured logging, and responsive UI.",
  image: "/spot.png",
  technologies: ["Flutter", "Dart", "C++", "XML", "Firebase", "Real-time Sync"],
  //liveLink: "", // Leave empty if not hosted
  githubLink: "https://github.com/RaniAsmit/Spot-Saver"
}
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16 px-4 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-neutral-900 dark:text-white">
          My Projects
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my featured projects that showcase my skills and experience in web development and software engineering.
        </p>
        <ProjectShowcase projects={projectsData} />
      </div>
    </div>
  );
}