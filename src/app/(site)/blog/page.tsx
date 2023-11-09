import { getPosts } from '@/sanity/actions';
import BlogCard from './BlogCard';

const Blog = async () => {
  const posts = await getPosts({
    query: '',
    category: '',
    page: '1',
  });

  return (
    <section className='mx-auto my-10 w-full max-w-[1240px] px-4'>
      <h1 className='text-2xl font-semibold md:text-4xl mb-8 md:font-bold'>
        The latest web development blog
      </h1>
      <section className='grid sm:grid-cols-2 gap-4 lg:grid-cols-3'>
        {posts.map((post: Post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </section>
    </section>
  );
};
export default Blog;
