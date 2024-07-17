"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../constants/Experience";

const Experience: React.FC = () => {
  return (
    <div id="experience" >
      <h2 className="text-4xl text-white text-center font-bold mb-4"><i>Education and Qualification</i></h2>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            key={index}
            date={experience.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<div>{experience.icon}</div>}
          >
            <h3>{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
