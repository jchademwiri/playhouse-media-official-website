import Link from 'next/link';
import moment from 'moment';
import { CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getPostsMeta, getPostByName } from '@/lib/posts';
import 'highlight.js/styles/github-dark.css';

export const revalidate = 0;

type Props = {
  params: {
    postId: string;
  };
};

// export const generateStaticParams = async () => {
//   const posts = await getPostsMeta(); // deduped

//   if (!posts) return [];

//   return posts.map((post) => ({
//     postId: post.id,
//   }));
// };

export const generateMetadata = async ({ params: { postId } }: Props) => {
  const post = await getPostByName(`${postId}.mdx`); // deduped

  if (!post) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    alternates: {
      canonical: post.meta.id,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
    },
    twitter: {
      title: post.meta.title,
      description: post.meta.excerpt,
    },
  };
};

const Post = async ({ params: { postId } }: Props) => {
  const post = await getPostByName(`${postId}.mdx`); // deduped

  if (!post) notFound();

  const { meta, content } = post;

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`} className='mr-2'>
      {tag}
    </Link>
  ));

  return (
    <section className='mx-auto my-5 w-full max-w-[900px] px-4'>
      <Button variant={'link'} className='my-2'>
        <Link href='/blog' className='flex gap-2 items-center'>
          <MoveLeft />
          Back to Blog
        </Link>
      </Button>
      <CardDescription>
        {moment(meta.date ? meta.date : '').format('dddd, MMMM Do YYYY')}
      </CardDescription>
      <CardTitle className='py-4'>{meta.title}</CardTitle>
      <hr className='my-2' />
      <section className='prose dark:prose-invert max-w-[1240px] '>
        <article>{content}</article>
        <section>{tags}</section>
      </section>
    </section>
  );
};
export default Post;
