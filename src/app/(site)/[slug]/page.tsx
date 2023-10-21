import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react';
import Link from 'next/link';
import { Metadata } from 'next';
// import { getPost } from '@/lib/sanity/sanity-utils';
import moment from 'moment';
import { getPost } from '@/sanity/actions';
import { BsArrowLeft } from 'react-icons/bs';
// import { SanityImage } from '@/components/SanityImage';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}
const myPortableTextComponents: Partial<PortableTextReactComponents> = {};

const PostSlug = async ({ params: { slug } }: Props) => {
  const post = await getPost(slug);
  return (
    <section className='mx-auto my-5 w-full max-w-[1240px] px-4'>
      <Link href='/blog' className='text-primary flex gap-2 items-center'>
        <BsArrowLeft /> Back to Blog
      </Link>
      <h1 className='my-4'>{post.title}</h1>
      <p> {post.excerpt} </p>
      <p>{post.author.name}</p>
      <small className='text-slate-400'>
        {moment(post.publishedAt ? post.publishedAt : '').format(
          'dddd, MMMM Do YYYY'
        )}
      </small>
      <div className='prose max-w-[1240px] portableText dark:prose-invert'>
        <PortableText
          value={post.content}
          components={myPortableTextComponents}
        />
      </div>
    </section>
  );
};
export default PostSlug;
