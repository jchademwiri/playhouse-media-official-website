import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ id, name, image, content, slug }: Project) => {
  return (
    <div key={id} className=''>
      {/* <Link href={`/projects/${slug}`}> */}
      <Link href={`#projects`}>
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
      {/* <p>
        <PortableText value={content} />
      </p> */}
    </div>
  );
};
export default ProjectCard;
