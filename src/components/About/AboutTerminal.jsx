import React, { useEffect, useState } from 'react';
import styles from './AboutTerminal.module.css';

const AboutTerminal = () => {
  const fullCommand = '$ npm create marco';
  const [typedCommand, setTypedCommand] = useState('');
  const [displayedLines, setDisplayedLines] = useState([]);
  const [showLines, setShowLines] = useState(false);

  const lines = [
  '✓ Writing code that matters',
  '✓ Building side projects',
  '✓ Learning new technologies',
  '✓ Collaborating with others',
  '✓ Documenting my journey',
  'i  Details:',
  '💡 UW CS + INFO Student',
  '🌍 Based in Seattle',
  '👾 Loves hackathons',
  '✓ Success! Marco Created',
  '🚀 Check out my work below',
  ];

  // Typing animation
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullCommand.length) {
        setTypedCommand((prev) => prev + fullCommand.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowLines(true), 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Show all lines at once
  useEffect(() => {
    if (showLines) {
      setDisplayedLines(lines);
    }
  }, [showLines]);

  return (
    <div className={styles.terminalSection}>
      <div className={styles.terminalBox}>
        <div className={styles.terminalHeader}>
          <span className={styles.red}></span>
          <span className={styles.yellow}></span>
          <span className={styles.green}></span>
          <span className={styles.title}>terminal@marco:~</span>
        </div>
        <div className={styles.terminalBody}>
          <p className={styles.command}>
            {typedCommand}
            {typedCommand.length < fullCommand.length && (
              <span className={styles.cursor}>|</span>
            )}
          </p>
          {displayedLines.map((line, i) => (
            <p
              key={i}
              className={`
                ${styles.line}
                ${line.startsWith('✓') ? styles.greenText : ''}
                ${line.startsWith('i') ? styles.blueText : ''}
                ${line.startsWith('💰') ? styles.yellowText : ''}
              `}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTerminal;
