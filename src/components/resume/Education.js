import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-5 lgl:gap-10"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[4px]">LEARNING</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-3 lgl:mt-6 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-5">
          <ResumeCard
            title="BS (Software Engineering)"
            subTitle="University of Agriculture Faisalabad"
            result="2021-2025"
            des="Currently pursuing a comprehensive curriculum including courses in Web Development, Object-Oriented Programming, Operating Systems, Data Structures and Algorithms, and Machine Learning. Developed a strong foundation in software design, database systems, and network communication. Enhanced analytical skills through courses like Linear Algebra and Differential Equations."
          />
          <ResumeCard
            title="FSC-Pre Engineering"
            subTitle="Bise Dg Khan"
            result="2019-2021"
            des="It is a two-year program that begins after matriculation and is often attended by aspirants who studied courses in matriculation and intend to pursue a career as an engineer. Pre-engineering also equips individuals to initiate startups or develop innovative solutions."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
