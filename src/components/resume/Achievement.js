import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-10"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">ACHIEVEMENT</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-3 lgl:mt-6 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-5">
          <ResumeCard
            title="The Full Stack"
            subTitle="Meta"
            result="Jan, 2024"
            des="I learned how to build a Django app, use the full stack, configure an environment. Skills that I gain through it Django (Web Framework), HTML, Production environments, JavaScript, Cascading Style Sheets (CSS)"
          />
         
        </div>
      </div>
      
        
    </motion.div>
  );
};

export default Achievement;
