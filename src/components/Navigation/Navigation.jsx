import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'achievements', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav className={`${styles.navigation} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <button
          onClick={() => scrollToSection('home')}
          className={styles.logo}
        >
          <span className={styles.logoMark}>◆</span>
          <span className={styles.logoText}>Marco Guo</span>
        </button>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${styles.navLink} ${
                activeSection === item.id ? styles.active : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="https://linkedin.com/in/guojiawei-1161612b6"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedinButton}
          aria-label="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>Connect</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
