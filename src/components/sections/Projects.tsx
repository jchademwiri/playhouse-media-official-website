import { getProjects } from '@/sanity/sanity-utils';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import Link from 'next/link';

const Projects = async () => {
  const projects = await getProjects();
  return (
    <section id='services' className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <h2 className='text-4xl font-semibold md:text-6xl'>Case Study</h2>
      <SectionTitle title='Our Selected Projects' />
      <div className='my-5 grid gap-4  sm:grid-cols-2 md:grid-cols-3'>
        {projects.map(({ id, name, image, content, slug }) => (
          <div key={id} className=''>
            <Link href={`/projects/${slug}`}>
              <Image
                src={image}
                alt={name}
                className='rounded-lg border border-gray-500 object-cover'
                width={1920}
                height={1080}
                placeholder='blur'
                blurDataURL={image}
              />
              <h3 className='my-3 text-lg font-medium'>{name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
