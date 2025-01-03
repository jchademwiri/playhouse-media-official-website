import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

import ProjectCards from "../my-projects/ProjectCards";
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Projects = async () => {
  return (
    <section id="projects" className="mx-auto my-20 w-full max-w-[1240px] px-4">
      <div className="items-end justify-between md:flex">
        <div>
          <h2 className="text-4xl font-semibold md:text-6xl">Case Study</h2>
          <SectionTitle title="Our Selected Projects" />
        </div>
      </div>

      <div className="my-5 w-full place-content-center grid gap-2 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <p>No projects</p>
      </div>
      <ProjectCards />
    </section>
  );
};
export default Projects;
