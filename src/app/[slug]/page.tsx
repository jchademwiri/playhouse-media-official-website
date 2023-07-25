import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { PortableText } from '@portabletext/react';
import { MARKS, } from '@contentful/rich-text-types';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { getPost } from '@/lib/sanity/sanity-utils';

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

const PostSlug = async ({ params: { slug } }: Props) => {
  const post = await getPost(slug);

  const options = {
    renderMark: {
      [MARKS.CODE]: (text: ReactNode) => (
        <pre>
          <code>{text}</code>
        </pre>
      ),
    },
  };

  return (
    <section className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <Link href='/blog'>Back to Blog</Link>
      <h1>{post.title}</h1>
      <div className='prose max-w-[1240px] dark:prose-invert'>
        {/* {documentToReactComponents(post.content, options)} */}
        <PortableText value={post.content} />
      </div>
    </section>
  );
};
export default PostSlug;
