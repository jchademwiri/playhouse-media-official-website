// import { getProject } from '@/sanity/sanity-utils';
import { getProject } from '@/sanity/actions';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 5;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const project = await getProject(slug);
  return {
    title: project.title,
    description: project.excerpt,
  };
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {};

const Project = async ({ params: { slug } }: Props) => {
  const project: Project = await getProject(slug);

  return (
    <section className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <header className='flex my-4 gap-4 items-center justify-between'>
        <div>
          <h1 className='my-2 text-2xl font-semibold  drop-shadow md:text-5xl md:font-extrabold'>
            {project.name}
          </h1>
          <small className='text-green-300 italic'>{project.categories}</small>
        </div>

        <Link
          href={project.url}
          title='View Project'
          target='_blank'
          rel='noopener noreferrer'
          className='whitespace-nowrap rounded-lg bg-gray-100 px-4 py-3 font-bold text-dark transition hover:bg-secondary hover:text-primary'
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
            blurDataURL={`/opengraph-image.png`}
            className='rounded-t-xl object-cover'
          />
        </div>
        <div className='justify-between'>
          <h2 className='my-2 text-xl font-semibold  drop-shadow md:text-3xl md:font-extrabold'>
            {project.name}
          </h2>
          <div className='prose max-w-[1240px] portableText dark:prose-invert'>
            <PortableText
              value={project.content}
              components={myPortableTextComponents}
            />
          </div>
          <Link
            href={project.url}
            title='View Project'
            target='_blank'
            rel='noopener noreferrer'
            className='whitespace-nowrap rounded-lg bg-gray-100 px-4 py-3 font-bold text-dark transition hover:bg-secondary hover:text-primary'
          >
            View Project
          </Link>
        </div>
      </section>
    </section>
  );
};
export default Project;
