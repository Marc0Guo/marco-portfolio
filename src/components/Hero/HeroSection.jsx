// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

const ROLES = ["Software Engineer", "Data Scientist", "AI Enthusiast"];
const TYPE_DELAY = 120;
const DELETE_DELAY = 80;
const PAUSE_AFTER_TYPING = 1800;
const PAUSE_AFTER_DELETING = 400;

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIndex];

    if (displayedText === role && !isDeleting) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
      return () => clearTimeout(t);
    }
    if (displayedText === "" && isDeleting) {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, PAUSE_AFTER_DELETING);
      return () => clearTimeout(t);
    }

    const delay = isDeleting ? DELETE_DELAY : TYPE_DELAY;
    const t = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText(role.slice(0, displayedText.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [roleIndex, displayedText, isDeleting]);

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>
          <span className={styles.helloText}>Hello, I'm </span>
          <span className={styles.nameText}>Marco</span>
        </h1>
        <h2 className={styles.roleText} aria-live="polite">
          {displayedText}
          <span className={styles.typewriterCursor} aria-hidden="true" />
        </h2>
        <p className={styles.introText}>
          As a full-stack developer, I am dedicated to turning ideas into
          innovative web applications. Explore my latest projects, showcasing my
          expertise in software development.
        </p>
        <a
          href={`${process.env.PUBLIC_URL}/assets/Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          Resume ↗
        </a>
      </div>
      <div className={styles.heroAvatar}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/Marco.png`}
          alt="Marco Avatar"
        />
      </div>
    </div>
  );
};

export default HeroSection;
