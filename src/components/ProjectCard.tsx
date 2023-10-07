import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ url, name, image }: Project) => {
  return (
    <div className='w-full'>
      <Link href={url} target='_blank' rel='noopener noreferrer'>
        <div className='h-52 w-auto'>
          <Image
            src={image}
            alt={name}
            className='max-h-52 w-full rounded-lg object-cover'
            width={311}
            height={208}
            placeholder='blur'
            blurDataURL={`/opengraph-image.png`}
          />
        </div>
        <h3 className='my-3 text-lg font-medium'>{name}</h3>
      </Link>
    </div>
  );
};
export default ProjectCard;
