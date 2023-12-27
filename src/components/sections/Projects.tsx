import TitleHeader from '../ui/TitleHeader';
import ProjectSlider from '../ProjectSlider';

const Projects = async () => {
  return (
    <section id='projects' className='mx-auto my-10 w-full max-w-[1240px] px-2'>
      <div className='items-end justify-between md:flex'>
        <TitleHeader title='Case Study' subTitle='Our Hand Picked Projects' />
      </div>
      <ProjectSlider />
    </section>
  );
};
export default Projects;
