import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-5xl underline font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/bg3.png"
          title="Fitness Website(Advance Project)"
          description="Technologies used: React js, Redux Toolkit, Tailwind CSS, Component land, Firebase Authentication, Fitness API
Functionality: User can perform CRUD Operation on the blog section, add items to cart , Protected Routing,User data saves to firebase , API perform operations like:Fetch nutrition data, exercise dataTechnologies "
          link="https://vocal-horse-bd4d1d.netlify.app/"
        />
        <ProjectCard
          src="/bg.png"
          title="Real-Estate Website(Intermediate Project)"
          description="


        I have created this Static Real-Estate website using React js and Tailwind css
        I also used Auth0 library for authentication "
          link="https://static-web21.netlify.app/"
        />
        <ProjectCard
          src="/bg1.png"
          title="Starbucks Landing Page(Basic Project)"
          description="I have created a Starbucks landing page using HTML, CSS for enhancing my HTML,CSS skills."
          link="https://cool-lebkuchen-6b78fd.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
