// app/page.tsx
"use client";

import { useState } from "react";
import styles from "./page.module.css";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import About from "../components/About/About";
import {AccountCircle, Memory, Book, Message } from "@mui/icons-material";
// import ProjectsSection from "../components/ProjectsSection";
// import BlogSection from "../components/BlogSection";
// import ContactSection from "../components/ContactSection";

const SECTIONS = [
  { id: "about", label: "ABOUT", icon: AccountCircle },
  { id: "projects", label: "PROJECTS", icon: Memory },
  { id: "blog", label: "BLOG", icon: Book },
  { id: "contact", label: "CONTACT", icon: Message },
];

// Change this to your actual resume URL
const RESUME_URL = "/resume.pdf"; // or "https://drive.google.com/..."

export default function HomePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`${styles.appRoot} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
>
      <Sidebar
        sections={SECTIONS}
        onNavClick={scrollToSection}
        resumeUrl={RESUME_URL}
      />

      <div className={styles.main}>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />

        <SectionContainer>
          <About resumeUrl={RESUME_URL} />
          {/* <ProjectsSection />
          <BlogSection />
          <ContactSection /> */}
        </SectionContainer>
      </div>
    </div>
  );
}
