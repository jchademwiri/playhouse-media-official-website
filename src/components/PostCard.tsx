import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ slug, title, mainImage }: Post) => {

  return (
    <div className=''>
      {/* <Link href={`/${slug}`} rel='noopener noreferrer'> */}
      <Link href={slug} rel='noopener noreferrer' prefetch>
        <Image
          src={mainImage}
          alt={title}
          className='rounded-lg object-cover h-52'
          width={1920}
          height={1080}
          placeholder='blur'
          blurDataURL={`/opengraph-image.png`}
        />
        <h3 className='my-3 text-lg font-medium'>{title}</h3>
      </Link>
    </div>
  );
};
export default PostCard;
