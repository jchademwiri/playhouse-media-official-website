// import { getProject } from '@/sanity/sanity-utils';
import { Button } from '@/components/ui/button';
import { getProject } from '@/sanity/actions';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// export const metadata = {
//   title: 'Project name',
// };

type ProjectProps = {
  params: { project: string };
};

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const slug = params.project;
  const project = await getProject(slug);
  return {
    title: project.name,
  };
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {};

const Project = async ({ params }: ProjectProps) => {
  const slug = params.project;
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
      </header>
      <section className='gap-4 grid sm:grid-cols-2 '>
        <div className='flex flex-col justify-between'>
          <div className='prose max-w-[1240px] portableText dark:prose-invert'>
            <PortableText
              value={project.content}
              components={myPortableTextComponents}
            />
          </div>
          <Button>
            <Link
              href={project.url}
              title='View Project'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </Link>
          </Button>
        </div>
        <div>
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
      </section>
    </section>
  );
};
export default Project;
