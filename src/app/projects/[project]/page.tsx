import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <section className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <header className='flex items-center justify-between'>
        <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent drop-shadow'>
          {project.name}
        </h1>
        <Link
          href={project.url}
          title='View Project'
          target='_blank'
          rel='noopener noreferrer'
          className='whitespace-nowrap rounded-lg bg-gray-100 px-4 py-3 font-bold text-gray-500 transition hover:bg-pink-500 hover:text-pink-100'
        >
          View Project
        </Link>
      </header>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className='mt-10 h-80 w-full rounded-xl border-2 border-gray-700 object-cover'
      />
      <div className='mt-5 text-lg'>
        <PortableText value={project.content} />
      </div>
    </section>
  );
};
export default Project;
