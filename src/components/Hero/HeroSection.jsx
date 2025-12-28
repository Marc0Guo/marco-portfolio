// src/components/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>
          <span className={styles.helloText}>Hello, I'm </span>
          <span className={styles.nameText}>Marco</span>
        </h1>
        <h2 className={styles.roleText}>Software Engineer</h2>
        <p className={styles.introText}>
          As a full-stack developer, I am dedicated to turning ideas into innovative web applications.
          Explore my latest projects, showcasing my expertise in software development.
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
        <img src={`${process.env.PUBLIC_URL}/assets/images/Marco.png`} alt="Marco Avatar" />
      </div>
    </div>
  );
};

export default HeroSection;
