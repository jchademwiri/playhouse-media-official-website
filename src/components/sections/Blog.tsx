import { getPosts } from '@/sanity/actions';
import BlogCard from '@/app/(site)/blog/BlogCard';
import TitleHeader from '../ui/TitleHeader';
import { revalidatePath } from 'next/cache';

export const revalidate = 5;

const Blog = async () => {
  const posts: Post[] = await getPosts({
    query: '',
    category: '',
    page: '1',
  });
  // revalidatePath('/');
  return (
    <section id='blog' className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <div className='items-end justify-between md:flex'>
        <TitleHeader
          title='Blog'
          subTitle='Let us Learn Something New together'
        />
      </div>
      <div className='my-5 grid gap-4  sm:grid-cols-2 md:grid-cols-3'>
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
};
export default Blog;
