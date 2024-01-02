import PostCard from '@/components/PostCard';
import { getSortedPostsData } from '@/lib/posts';

export const revalidate = 10;
// export const revalidate = 86400;

const posts = () => {
  const posts = getSortedPostsData();
  return (
    <section className='mx-auto my-10 w-full max-w-[1240px] px-4'>
      <h1 className=' text-2xl font-semibold md:font-bold md:text-4xl my-8'>
        The latest Web development news
      </h1>
      {/* <section className='grid sm:grid-cols-2 gap-4 lg:grid-cols-3'> */}
      <section className='grid gap-4'>
        <section className='w-full grid sm:grid-cols-2 lg:grid-cols-3  gap-4'>
          {posts.map((post: BlogPost) => (
            <PostCard key={post.id} {...post} />
          ))}
        </section>
      </section>
    </section>
  );
};
export default posts;
