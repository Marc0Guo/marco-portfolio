// src/App.js
import React from 'react';
import './App.css';
import HeroSection from './components/Hero/HeroSection';
import About from './components/About/About';
import AchievementTimeline from './components/Timeline/Timeline';
import ProjectCarousel from './components/Projects/Project';

function App() {
  return (
    <div className="App flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <About />
      <AchievementTimeline />
      <ProjectCarousel />
    </div>
  );
}

export default App;
