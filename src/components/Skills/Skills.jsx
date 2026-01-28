import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: ' SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
        { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg' },
        { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg' },
        { name: 'Lua', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg' },
        { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' }
      ]
    },
    {
      title: 'Web & Frontend',
      skills: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' }
      ]
    },
    {
      title: 'Cloud, DevOps & Databases',
      skills: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
        { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' }
      ]
    },
    {
      title: 'Tools & Productivity',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg' },
        { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
        { name: 'LaTeX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg' }
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

        <div className={styles.categoriesWrapper}>
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={styles.category}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.iconsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={styles.iconWrapper}
                    style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
