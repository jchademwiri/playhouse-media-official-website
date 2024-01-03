import PostCard from '@/components/PostCard';
import { getPostsMeta } from '@/lib/posts';

export const revalidate = 10;
// export const revalidate = 86400;

const Posts = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available</p>;
  }

  return (
    <section className='mx-auto my-10 w-full max-w-[1240px] px-4'>
      <h1 className=' text-2xl font-semibold md:font-bold md:text-4xl my-8'>
        The latest Web development news
      </h1>
      <section className='grid gap-4'>
        <section className='w-full grid sm:grid-cols-2 lg:grid-cols-3  gap-4'>
          {posts.map((post: Meta) => (
            <PostCard key={post.id} {...post} />
          ))}
        </section>
      </section>
    </section>
  );
};
export default Posts;
