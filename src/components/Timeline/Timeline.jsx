import React from "react";
import "./Timeline.css";
import achievements from "../../constants/achivements";

const AchievementTimeline = () => {
  return (
    <section id="cd-timeline" className="cd-container">
      {achievements.map((item, index) => (
        <div key={index} className="cd-timeline-block">
          <div className={`cd-timeline-img ${item.iconType}`}></div>
          <div className="cd-timeline-content">
            <h2>{item.title}</h2>

            <h2>{item.location}</h2>

            <p>{item.description}</p>
            <span className="cd-date">{item.date}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AchievementTimeline;
