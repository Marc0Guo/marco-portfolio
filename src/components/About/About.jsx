import React from 'react';
import styles from './About.module.css';


const AboutPage = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h1 className={styles.title}>About Me</h1>

        <div className={styles.content}>
          <div className={styles.intro}>
            <p>Hello, I'm Marco.</p>
            <p>A Computer Science & Information student at the University of Washington.</p>
          </div>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.icon}>📍</span>
              <span>Based in Seattle, WA</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.icon}>💻</span>
              <span>Passionate about building meaningful projects</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.icon}>🚀</span>
              <span>Enthusiastic hackathon participant</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.icon}>📚</span>
              <span>Constantly learning new technologies</span>
            </div>
          </div>

          <div className={styles.cta}>
            <p>Check out my work below ↓</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;