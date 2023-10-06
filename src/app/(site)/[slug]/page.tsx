import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react';
import Link from 'next/link';
import { Metadata } from 'next';
import { getPost } from '@/sanity/sanity-utils';
import moment from 'moment';
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
  };
}
const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  // types: {
  //   image: ({ value }) => {
  //     return <SanityImage {...value} />
  //   },
  // },
};

const PostSlug = async ({ params: { slug } }: Props) => {
  const post = await getPost(slug);
  return (
    <section className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <Link href='/blog'>Back to Blog</Link>
      <h1 className='my-4'>{post.title}</h1>
      <p>{post.author.name}</p>
      <small>
        {moment(post.publishedAt ? post.publishedAt : '').format('DD MMM YYYY')}
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
