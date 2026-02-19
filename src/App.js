// src/App.js
import React from "react";
import "./App.css";
import InteractiveBackground from "./components/InteractiveBackground/InteractiveBackground";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/Hero/HeroSection";
import Skills from "./components/Skills/Skills";
import AchievementTimeline from "./components/Timeline/Timeline";
import ProjectCarousel from "./components/Projects/Project";

function App() {
  return (
    <div className="App flex min-h-screen flex-col">
      <InteractiveBackground />
      <div className="App-content">
        <Navigation />
        <div id="home">
          <HeroSection />
        </div>
        <Skills />
        <div id="achievements">
          <AchievementTimeline />
        </div>
        <div id="projects">
          <ProjectCarousel />
        </div>
      </div>
    </div>
  );
}

export default App;
