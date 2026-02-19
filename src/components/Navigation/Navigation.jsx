import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Navigation.module.css";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorTop, setIndicatorTop] = useState(0);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".App-content");
      if (!container) return;

      const scrollPosition = container.scrollLeft + container.clientWidth / 2;
      const sections = ["home", "skills", "achievements", "projects"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetLeft, offsetWidth } = element;
          if (
            scrollPosition >= offsetLeft &&
            scrollPosition < offsetLeft + offsetWidth
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const container = document.querySelector(".App-content");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Trigger once on mount
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const el = navLinksRef.current?.querySelector(
      `[data-section="${activeSection}"]`,
    );
    if (el) {
      const linkTop = el.offsetTop;
      const linkHeight = el.offsetHeight;
      const indicatorHeight = 28;
      setIndicatorTop(linkTop + linkHeight / 2 - indicatorHeight / 2);
    }
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const container = document.querySelector(".App-content");
    if (element && container) {
      container.scrollTo({
        left: element.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`${styles.navigation} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        <button onClick={() => scrollToSection("home")} className={styles.logo}>
          <span className={styles.logoMark}>◆</span>
          <span className={styles.logoText}>Marco Guo</span>
        </button>

        <div className={styles.navLinks} ref={navLinksRef}>
          <div
            className={styles.slidingIndicator}
            style={{ top: indicatorTop }}
            aria-hidden="true"
          />
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              data-section={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${styles.navLink} ${
                activeSection === item.id ? styles.active : ""
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
