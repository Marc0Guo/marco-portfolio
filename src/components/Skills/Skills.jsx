import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: '⚡',
      skills: [
        'Python (Pandas, NumPy, Scikit-Learn, TensorFlow, PyTorch)',
        'R',
        'MATLAB',
        'Bash/Shell'
      ]
    },
    {
      title: 'Data Engineering',
      icon: '🔧',
      skills: [
        'ETL pipelines',
        'Data Modeling',
        'Data Warehousing',
        'MySQL',
        'MongoDB',
        'NoSQL schema design'
      ]
    },
    {
      title: 'Cloud & AI',
      icon: '☁️',
      skills: [
        'AWS (S3, Redshift, EC2)',
        'Azure (VMs, App Services)',
        'Azure ML Studio',
        'Azure AI Services'
      ]
    },
    {
      title: 'Visualization',
      icon: '📊',
      skills: [
        'Tableau',
        'Power BI',
        'RShiny',
        'Matplotlib',
        'Gephi'
      ]
    }
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.skillsContainer}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.title}>
            <span className={styles.titleAccent}>—</span>
            Skills & Expertise
          </h2>
          <p className={styles.subtitle}>
            Technical proficiencies across data science, engineering, and cloud platforms
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <ul className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className={styles.skillItem}
                    style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                  >
                    <span className={styles.bullet}>→</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
