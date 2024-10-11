import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">KNOW HOW</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-3 lgl:mt-6 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Python Developer"
            subTitle="Codsoft (Remote)"
            result="Apr-May 2024"
            des="Completed a hands-on Python Development Internship, where I developed practical applications, including a To-Do List manager, a password generator, and a rock-paper-scissors game. Gained experience in building user-friendly interfaces, secure tools, and efficient algorithms while enhancing problem-solving and coding skills."
          />
          <ResumeCard
            title="Python Developer"
            subTitle="CognoRise Info Tech (Remote)"
            result="Mar-Apr 2024"
            des="Developed multiple Python applications featuring user input handling, random data generation, and dynamic user interfaces. Implemented functionalities including secure password generation, and game logic algorithms. Managed state updates, data validation, and graphical user interfaces using libraries such as Tkinter. Enhanced problem-solving skills through practical application development and effective task management."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Nexus Info (Remote)"
            result="Feb-Mar 2024"
            des="Developed responsive web pages with login and signup functionalities, incorporating attractive UI designs using gradient backgrounds and CSS decorations. Implemented form validation to enhance user experience and connected front-end forms to backend systems for user authentication. Created and deployed a professional website featuring social media integration, SEO optimization, and interactive elements like hover effects and animations. Managed project versions and hosted projects on GitHub and free web hosting platforms."
          />
        </div>
      </div>
        
    </motion.div>
  );
};

export default Experience;
