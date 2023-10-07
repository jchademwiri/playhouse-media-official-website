import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ slug, title, mainImage, excerpt }: Post) => {
  return (
    <div className=''>
      {/* <Link href={`/${slug}`} rel='noopener noreferrer'> */}
      <Link href={slug} rel='noopener noreferrer' prefetch>
        <div className='h-52 w-auto'>
          <Image
            src={mainImage}
            alt={title}
            className='h-52 w-full rounded-lg object-cover'
            width={311}
            height={208}
            placeholder='blur'
            blurDataURL={`/opengraph-image.png`}
          />
        </div>
        <h3 className='my-3 text-lg font-medium'>{title}</h3>
        <p> {excerpt} </p>
      </Link>
    </div>
  );
};
export default PostCard;
