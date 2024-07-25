"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../constants/Experience";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";

const Experience: React.FC = () => {
  return (
    <motion.div
      id="experience"
      initial="hidden"
      animate="visible"
      variants={slideInFromLeft(0.5)}
    >
      <h2 className="md:text-5xl text-2xl md:underline text-white text-center font-bold mb-4">
        <i>
          Education{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            and
          </span>{" "}
          Certification
        </i>
      </h2>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{
              backgroundColor: "#21D4FD",
              backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
              color: "#fff",
              opacity: 0.7,
            }}
            contentArrowStyle={{ borderRight: "7px solid #4158D0" }}
            key={index}
            iconStyle={{
              backgroundColor: "#4158D0",
              backgroundImage: "linear-gradient(43deg, #4158D0 20%, #C850C0 69%, #FFCC70 100%)",
              color: "#fff",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold italic">{experience.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-xl font-semibold">{experience.location}</h4>
              <p className="text-xl">{experience.date}</p>
              <p>{experience.description}</p>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
};

export default Experience;
