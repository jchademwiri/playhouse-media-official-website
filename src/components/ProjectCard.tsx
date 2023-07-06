import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ url, name, image }: Project) => {
  return (
    <div className=''>
      <Link href={url} target='_blank' rel='noopener noreferrer'>
        <Image
          src={image}
          alt={name}
          className='rounded-lg object-cover '
          width={1920}
          height={1080}
          placeholder='blur'
          blurDataURL={`/opengraph-image.png`}
        />
        <h3 className='my-3 text-lg font-medium'>{name}</h3>
      </Link>
    </div>
  );
};
export default ProjectCard;
