import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const ROLES = ["Software Engineer", "Data Scientist", "AI Enthusiast"];
const TYPE_DELAY = 120;
const DELETE_DELAY = 80;
const PAUSE_AFTER_TYPING = 1800;
const PAUSE_AFTER_DELETING = 400;

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.5 },
  },
};

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
      <motion.div
        className={styles.heroContent}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={fadeUp}>
          <span className={styles.helloText}>Hello, I'm </span>
          <span className={styles.nameText}>Marco</span>
        </motion.h1>
        <motion.h2
          className={styles.roleText}
          aria-live="polite"
          variants={fadeUp}
        >
          {displayedText}
          <span className={styles.typewriterCursor} aria-hidden="true" />
        </motion.h2>
        <motion.p className={styles.introText} variants={fadeUp}>
          As a full-stack developer, I am dedicated to turning ideas into
          innovative web applications. Explore my latest projects, showcasing my
          expertise in software development.
        </motion.p>
        <motion.a
          href={`${process.env.PUBLIC_URL}/assets/Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
          variants={fadeUp}
        >
          Resume ↗
        </motion.a>
      </motion.div>
      <motion.div
        className={styles.heroAvatar}
        variants={fadeScale}
        initial="hidden"
        animate="visible"
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/Marco.png`}
          alt="Marco Avatar"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
