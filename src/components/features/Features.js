import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"  
    >  
    
      <Title title="Features" des="My Expertise" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        <Card
          title="Backend Development"
          des="Specialized in server-side software ensuring the website performs correctly, focusing on databases,
           back-end logic, application programming interface (APIs), architecture, and servers."
         
        />
        <Card
          title="Frontend Development"
          des="Capable of creating designs and collabration with designers, optimize applications, 
          develop features, and maintain brand consistency by building user-interactive interfaces"
          icon={<AiFillAppstore />}
        />
        <Card
          title="DataBase Management"
          des="I've the ability to design, develop, and administer complex databases using tools such as MySQL & MongoDB, ensuring that data is organized, secure, and readily accessible."
          icon={<SiProgress />}
        />
        
        <Card
          title="Version Control"
          des="Possess strong version control skills, with proficiency in tools such as Git. I effectively manage code repositories, track changes, and maintain a clean and organized codebase, ensuring smooth integration of new features, efficient bug fixes, and a robust development workflow"
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Skilled in hosting websites, ensuring reliable and efficient deployment and maintenance of web applications.
           My expertise includes setting up and configuring web servers, managing DNS settings, optimizing performance, 
          and ensuring security."
          icon={<FaGlobe />}
        />
        <Card
          title="Problem Solving & Communication"
          des="I excel in problem-solving, adeptly analyzing issues and implementing effective solutions. My strong communication skills enable clear and
           efficient collaboration with team members, ensuring smooth project execution."
          icon={<FaMobile />}
        />
      </div>
    </section>
  );
}

export default Features