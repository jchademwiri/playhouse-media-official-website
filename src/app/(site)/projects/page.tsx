import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { getProjects } from '@/sanity/actions';
import { revalidatePath } from 'next/cache';
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Projects = async () => {
  const projects: Project[] = await getProjects({
    query: '',
    category: '',
    page: '1',
  });

  return (
    <section id='projects' className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <div className='items-end justify-between md:flex'>
        <div>
          <h2 className='text-4xl font-semibold md:text-6xl'>Case Study</h2>
          <SectionTitle title='Our Selected Projects' />
        </div>
        {/* <div className='flex place-content-end gap-2'>
          <BsArrowLeft className='cursor-pointer rounded-full bg-secondary p-2 text-3xl text-primary hover:' />
          <BsArrowRight className='cursor-pointer rounded-full bg-secondary p-2 text-3xl text-primary hover:' />
        </div> */}
      </div>
      <div className='my-5 w-full place-content-center grid gap-2 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3'>
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
