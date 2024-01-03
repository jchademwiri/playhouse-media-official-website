import PostCard from '@/components/PostCard';
import { getPostsMeta } from '@/lib/posts';

import Link from 'next/link';

// export const revalidate = 86400;
export const revalidate = 5;

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta(); //deduped!

  if (!posts)
    return <p className='mt-10 text-center'>Sorry, no posts available.</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className='text-center'>
        <p className='mt-10'>Sorry, no posts for that keyword.</p>
        <Link href='/'>Back to Home</Link>
      </div>
    );
  }

  return (
    <section className='mx-auto my-10 w-full max-w-[1240px] px-4'>
      <h1 className=' text-2xl font-semibold md:font-bold md:text-4xl my-8'>
        Results for: #{tag}
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
}
