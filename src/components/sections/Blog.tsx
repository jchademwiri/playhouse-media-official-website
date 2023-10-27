import { getPosts } from '@/sanity/actions';
import SectionTitle from '../SectionTitle';
import BlogCard from '@/app/(site)/blog/BlogCard';

const Blog = async () => {
  const posts: Post[] = await getPosts({
    query: '',
    category: '',
    page: '1',
  });
  return (
    <section id='blog' className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <div className='items-end justify-between md:flex'>
        <div>
          <h2 className='text-4xl font-semibold md:text-6xl'>Blog</h2>
          <SectionTitle title='Let us Learn Something New together' />
        </div>
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
