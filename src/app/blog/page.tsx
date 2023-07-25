
import { getPosts } from '@/lib/sanity/sanity-utils';
import Link from 'next/link';

const Blog = async () => {
  const posts = await getPosts();
  // console.log(posts)
  return (
    <section className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <div>
        <p className='text-2xl font-bold'>Blog Posts</p>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={post.slug} prefetch>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Blog;
