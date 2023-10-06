import { getPosts } from '@/sanity/sanity-utils';
import PostCard from '../PostCard';
import SectionTitle from '../SectionTitle';

const Blog = async () => {
  const posts = await getPosts();
  // console.log(posts)
  return (
    <section id='projects' className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <div className='items-end justify-between md:flex'>
        <div>
          <h2 className='text-4xl font-semibold md:text-6xl'>Blog</h2>
          <SectionTitle title='Let us Learn together' />
        </div>
      </div>
      <div className='my-5 grid gap-4  sm:grid-cols-2 md:grid-cols-3'>
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
};
export default Blog;
