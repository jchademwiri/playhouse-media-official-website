// import { getProject } from '@/sanity/sanity-utils';
import { getProject } from '@/sanity/actions';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

// export const metadata = {
//   title: 'Project name',
// };

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <section className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <header className='flex flex-col items-center justify-between'>
        <h1 className='my-2 text-2xl font-semibold text-white drop-shadow md:text-5xl md:font-extrabold'>
          {project.name}
        </h1>
        <Link
          href={project.url}
          title='View Project'
          target='_blank'
          rel='noopener noreferrer'
          className='whitespace-nowrap rounded-lg bg-gray-100 px-4 py-3 font-bold text-dark transition hover:bg-armyGreen hover:text-accent'
        >
          View Project
        </Link>
      </header>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        placeholder='blur'
        blurDataURL={project.image}
        className='mt-10 max-h-80 w-full rounded-t-xl object-cover'
      />
    </section>
  );
};
export default Project;
