import React from 'react'
import Title from '../layouts/Title'
import { book, ecom, techy } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="View My Projects And Give Feedback"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des="Built a ecommerce website using Django equipped with all necessary features and functionalities which are 
login, logout, view & search products, add to cart, cart persistence on logout/login, update user/shipping/ 
cart info, billing methods, cash on delivery & online payment.
"
          src={ecom}
          githubLink="https://www.github.com/aimaarif/Django-Ecommerce"
          liveLink="https://arthub.up.railway.app/"
        />
        <ProjectsCard
          title="Book Reommendation  system"
          des="Built a recommendation system by utilizing machine learning approaches like embedding matrix and term 
frequency to get auto recommendations. Users just simply need to rate some books and will start getting 
the recommendations."
          src={book}
          githubLink="https://www.github.com/aimaarif/Books-Recommendation-system"
          liveLink="https://arthub.up.railway.app/"
        />
        <ProjectsCard
          title="Website for a software company"
          des="Developed this Django project by emphasizing interactive UI design, form validation, user authentication, 
SEO, and database management. It provides the information about the products,company and takes feedback from user."
          src={techy}
          githubLink="https://www.github.com/aimaarif/Website-for-a-software-company "
          liveLink="https://arthub.up.railway.app/"
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          // src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          // src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          // src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects