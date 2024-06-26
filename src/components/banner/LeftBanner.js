import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub, FaMedium } from "react-icons/fa";
import { SiJavascript, SiDjango, SiPython } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developer.", "UI Designer.", "Software Engineer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full  flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        {/* <h4 className=" text-lg text-center font-normal pt-5">WELCOME to my place</h4> */}
        <h1 className="text-6xl text-center font-bold text-white pt-10">
          Hi, I'm <span className="text-designColor capitalize" style={{color:'rgb(0, 200, 235)'}}>Aima Arif</span>
        </h1>
        <h2 className="text-4xl font-bold text-white text-center">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="rgb(0, 200, 235)"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-center">
        <div class="mx-50 max-w-xl mx-auto text-center">I specialize in building websites and e-commerce solutions for small and medium-sized businesses. I manage projects from start to finish, ensuring timely delivery and high standards with clear, open communication. Whether you need a website, an online store, or a digital strategy, I'm here to help. </div>
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me here
          </h2>
          <div className="flex gap-4">
           <a href="https://www.linkedin.com/in/aima-arif" target="_blank" rel="noopener noreferrer" className="bannerIcon">
           <FaLinkedinIn />
           </a>
           <a href="https://www.github.com/aimaarif" target="_blank" rel="noopener noreferrer" className="bannerIcon">
           <FaGithub />
           </a>
           <a href="https://www.medium.com/@aima-arif" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaMedium />
            </a>
            </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
           MY BEST SKILLS
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiDjango/>
            </span>
            <span className="bannerIcon">
               <SiPython />
              
            </span>
            <span className="bannerIcon">
            <SiJavascript/>
            </span>
            <span className="bannerIcon">
             <FaReact />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner