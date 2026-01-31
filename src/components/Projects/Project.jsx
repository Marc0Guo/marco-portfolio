// src/components/Projects/Project.jsx
'use client';

import React, { useState } from 'react';
import styles from './Project.module.css';
import { projects as allProjects, tags } from '../../constants/projectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredProjects =
    selectedTag === 'All'
      ? allProjects
      : allProjects.filter((project) => project.tag === selectedTag);

  return (
    <section className={styles.projectSection}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.tagsWrapper}>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`${styles.tag} ${
              selectedTag === tag ? styles.activeTag : ''
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.techStack && (
                <div className={styles.techStack}>
                  {project.techStack.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className={styles.linkIcons}>
                  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Repository"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  )}
  {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="External Link"
    >
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </a>
  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
