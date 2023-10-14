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
      <header className='flex my-4 gap-4 items-center justify-between'>
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
      <section className='gap-4 grid sm:grid-cols-2 '>
        <div>
          {/* h-full w-auto */}
          <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            placeholder='blur'
            blurDataURL={project.image}
            className='rounded-t-xl object-cover'
          />
        </div>
        <div className='justify-between'>
          <h2 className='my-2 text-xl font-semibold text-white drop-shadow md:text-3xl md:font-extrabold'>
            {project.name}
          </h2>
          <p className='pb-6'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            modi enim dolore rem doloremque distinctio, nobis cum error iste qui
            accusamus in! Temporibus voluptatum dolorum aut pariatur dolorem sit
            saepe itaque, libero aliquam natus. Id reiciendis vero voluptatum
            dignissimos, amet perferendis dolorum quod dolor, earum facere ad
            nulla, natus officiis!
          </p>
          <Link
            href={project.url}
            title='View Project'
            target='_blank'
            rel='noopener noreferrer'
            className='whitespace-nowrap rounded-lg bg-gray-100 px-4 py-3 font-bold text-dark transition hover:bg-armyGreen hover:text-accent'
          >
            View Project
          </Link>
        </div>
      </section>
    </section>
  );
};
export default Project;
