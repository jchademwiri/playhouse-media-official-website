import ProjectCard from '../ProjectCard';
import { getProjects } from '@/sanity/actions';
import TitleHeader from '../ui/TitleHeader';

// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Projects = async () => {
  const projects: Project[] = await getProjects({
    query: '',
    category: '',
    page: '1',
  });

  return (
    <section
      id='projects'
      className='mx-auto py-10 min-h-screen w-full max-w-[1240px] px-4'
    >
      <div className='items-end justify-between md:flex'>
        <TitleHeader title='Case Study' subTitle='Our Hand Picked Projects' />
      </div>
      <div className='my-5 w-full grid gap-2 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {projects?.length > 0 ? (
          projects
            .slice(0, 3)
            .map((project) => <ProjectCard key={project.id} {...project} />)
        ) : (
          <p>No projects</p>
        )}
      </div>
    </section>
  );
};
export default Projects;
