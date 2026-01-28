// src/App.js
import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/Hero/HeroSection';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import AchievementTimeline from './components/Timeline/Timeline';
import ProjectCarousel from './components/Projects/Project';

function App() {
  return (
    <div className="App flex min-h-screen flex-col">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <Skills />
      <div id="achievements">
        <AchievementTimeline />
      </div>
      <div id="projects">
        <ProjectCarousel />
      </div>
    </div>
  );
}

export default App;
