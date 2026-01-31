import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Typography, Paper } from "@mui/material";
import "./Timeline.css";
import achievements from "../../constants/achivements";

const AchievementTimeline = () => {
  const isLastItem = (index) => index === achievements.length - 1;

  return (
    <section className="achievements-section">
      <h2 className="achievements-title">Experience</h2>
      <div className="timeline-container">
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
              textAlign: 'right',
              paddingRight: '24px',
              margin: 'auto 0',
            },
            [`& .MuiTimelineItem-root`]: {
              minHeight: 'auto',
              alignItems: 'center',
              '&:before': {
                flex: 0,
                padding: 0,
              },
            },
            [`& .MuiTimelineContent-root`]: {
              paddingLeft: '24px',
              margin: 'auto 0',
            },
            [`& .MuiTimelineDot-root`]: {
              margin: 0,
            },
          }}
        >
          {achievements.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent 
                color="textSecondary" 
                className="timeline-date"
                sx={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ visibility: index === 0 ? 'hidden' : 'visible' }} />
                <TimelineDot 
                sx={{ 
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '8px',
                  boxShadow: 'none'
                }}
              >
                  <div className="timeline-dot-icon"></div>
                </TimelineDot>
                <TimelineConnector sx={{ visibility: isLastItem(index) ? 'hidden' : 'visible' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={0} className="timeline-paper" sx={{ boxShadow: 'none' }}>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    className="timeline-title"
                    sx={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="subtitle2" 
                    className="timeline-location"
                    sx={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.location}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    className="timeline-description"
                    sx={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default AchievementTimeline;
