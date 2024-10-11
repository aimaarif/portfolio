import React from 'react'
import { FaMedium
  , FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contact2} from "../../assets/index";
import Title from '../layouts/Title';

const ContactLeft = () => {
  return (
    <section
    id="contact"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <div className="flex justify-center items-center text-center">
      <Title title="CONTACT" des="Contact With Me" />
    </div>
    <div className="w-full lgl:w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-80 object-cover rounded-lg mb-2"
        src={contact2}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Aima Arif</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Let's connect to bring your project to life with expert web development and e-commerce solutions tailored specifically to your business needs. Whether you're looking to create a new website from scratch, redesign an existing site, or develop a robust e-commerce platform, I have the skills and experience to make it happen. By leveraging the latest technologies and best practices, I ensure that your online presence is not only visually appealing but also highly functional and optimized for success. Contact me today to start your journey towards a stronger digital presence and take the first step towards achieving your business goals in the digital landscape!</p>
        {/* <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">Punjab, Pakistan</span>
        </p> */}
        <p className="text-base text-gray-400 flex items-center ">
          Email: <span className="text-lightText"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=aimaarif567@gmail.com">aimaarif567@gmail.com</a></span>
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-base uppercase font-titleFont mb-4">You can also contact here:</h2>
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
    </div>
    </section>
  );
}

export default ContactLeft