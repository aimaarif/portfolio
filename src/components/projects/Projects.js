import React from 'react'
import Title from '../layouts/Title'
import { book, ecom, a4 } from "../../assets/index";
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
          title="A4 Studio"
          des="This art gallery platform, built with Django, offers a curated collection of images organized into various themes. Users can browse, explore, and download images, add them to their wishlist, and leave reviews. The platform also allows users to upload their own artwork, view details about each image, and mark other users as favorites.
          "
          src={a4}
          githubLink="https://www.github.com/aimaarif/A4-STUDIO"
          liveLink="https://arthub.up.railway.app/"
        />
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
      </div>
    </section>
  );
}

export default Projects