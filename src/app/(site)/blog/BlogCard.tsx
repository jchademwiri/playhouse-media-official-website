import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ slug, title, author, publishedAt, excerpt }: Post) => {
  return (
    <article className='p-4 rounded-md border-armyGreen border gap-4 flex  justify-between flex-col'>
      <div>
        <div className='flex justify-between items-center pb-4'>
          <small className='text-slate-400'>
            {moment(publishedAt).format('DD MMMM YYYY')}
          </small>
          <div>
            <Image
              src={author.image}
              alt={author.name}
              width={30}
              height={30}
              className='rounded-full'
            />
          </div>
        </div>
        <Link href={slug} prefetch>
          <h2 className='text-lg font-semibold'> {title}</h2>
        </Link>
        <p className='py-4 text-slate-200'>{excerpt}</p>
      </div>

      <Link
        href={slug}
        prefetch
        className='block transition-colors text-center rounded-sm text-slate-300 hover:text-slate-100 py-2 bg-armyGreen/60 hover:bg-armyGreen/80'
      >
        Read More
      </Link>
    </article>
  );
};
export default BlogCard;
