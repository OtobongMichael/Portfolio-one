import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import projectOne1 from "../assets/images/projects/ProjectOne.jpg"; 
import ProjectTwo2 from "../assets/images/projects/ProjectTwo.jpeg";
import ProjectThree3 from "../assets/images/projects/ProjectThree.png";
import ProjectFour4 from "../assets/images/projects/ProjectFour.png"; 
import ProjectFive5 from "../assets/images/projects/ProjectFive.jpg";
import ProjectSix6 from "../assets/images/projects/ProjectSix.png"; 





import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" Created Sign-up/Sign-in users Authentication and Authorization which allows the 
            user to register and log in using email/password, and potentially 
            third-party authentication (OAuth with Google, Facebook, etc.)."
            src={projectOne1}
          />
          <ProjectsCard
            title="Go Green E-commerce Website"
            des=" Creating and design the layout of Go Green online shopping plant website using
             tools which were Figma, Sketch and Adobe XD!"
            src={ProjectTwo2}
          />
          <ProjectsCard
            title="Food Delivery App"
            des="Designing a food delivery app using MERN stack involves creating a comprehensive
             system that includes user interfaces for customers,  delivery drivers, and restaurant
             owners, along with a backend to handle orders, payments, and data management. 
."
            src={ProjectThree3}
          />
          <ProjectsCard
            title="Karepal Health Care AI Tool"
            des=" Karepal is a robust healthcare guide aiding in precise diagnosis,
             neonatal care, and elderly care all powered by smart technology. "
            src={ProjectFour4}
          />
          <ProjectsCard
            title="Table Data Website"
            des="  Created a component to structure my table. The component
            i used include a header, body, and optional features like sorting and pagination."
            src={ProjectFive5}
          />
          <ProjectsCard
            title="Car Showcase App"
            des=" Build a car showcase app using MongoDB, Express, React, and Node.js. Where
            users can view and interact with a gallery of cars, see car details, and filter
            or search through various options  
           ."
            src={ProjectSix6}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
