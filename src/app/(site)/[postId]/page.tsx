import Link from 'next/link';
import moment from 'moment';

import { Card, CardDescription, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import AuthorProfile from '@/components/AuthorProfile';

export const revalidate = 5;

export const generateStaticParams = () => {
  const posts = getSortedPostsData(); // deduped

  return posts.map((post) => ({
    postId: post.id,
  }));
};

export const generateMetadata = ({
  params,
}: {
  params: { postId: string };
}) => {
  const posts = getSortedPostsData(); // deduped
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: post.id,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
  };
};

const Post = async ({ params }: { params: { postId: string } }) => {
  const posts = getSortedPostsData(); // deduped
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  return (
    <section className='mx-auto my-5 w-full max-w-[900px] px-4'>
      <Button variant={'link'} className='my-2'>
        <Link href='/posts' className='flex gap-2 items-center'>
          <MoveLeft />
          Back to Blog
        </Link>
      </Button>
      <CardDescription>
        {moment(date ? date : '').format('dddd, MMMM Do YYYY')}
      </CardDescription>
      <CardTitle className='py-4'>{title}</CardTitle>
      <hr className='my-2' />
      <article className='prose max-w-[1240px] portableText dark:prose-invert'>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </section>
  );
};
export default Post;
