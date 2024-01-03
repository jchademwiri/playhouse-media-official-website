import { getPostsMeta } from '@/lib/posts';
import TitleHeader from '../ui/TitleHeader';
import PostCard from '../PostCard';
import Link from 'next/link';

const Blog = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available</p>;
  }
  return (
    <section id='blog' className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <div className='items-end justify-between md:flex'>
        <Link href='/blog'>
          <TitleHeader
            title='Blog'
            subTitle='Let us Learn Something New together'
          />
        </Link>
      </div>
      <div className='my-5 grid gap-4  sm:grid-cols-2 md:grid-cols-3'>
        {posts.slice(0, 3).map((post: Meta) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};
export default Blog;
