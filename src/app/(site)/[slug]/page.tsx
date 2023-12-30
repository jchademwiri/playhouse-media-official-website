import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react';
import Link from 'next/link';
import { Metadata } from 'next';
// import { getPost } from '@/lib/sanity/sanity-utils';
import moment from 'moment';
import { getPost } from '@/sanity/actions';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export const revalidate = 5;
// import { SanityImage } from '@/components/SanityImage';

type PostProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: PostProps): Promise<Metadata> {
  const post = await getPost(slug);
  if (!post) {
    return {
      title: 'Post not found',
      description: 'Post not found',
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}
const myPortableTextComponents: Partial<PortableTextReactComponents> = {};

const Post = async ({ params: { slug } }: PostProps) => {
  const post: Post = await getPost(slug);

  if (!post) return notFound();

  return (
    <section className='mx-auto my-5 w-full max-w-[1240px] px-4'>
      <Button variant={'link'} className='my-2'>
        <Link href='/blog' className='flex gap-2 items-center'>
          <MoveLeft />
          Back to Blog
        </Link>
      </Button>
      <CardDescription>
        {moment(post.publishedAt ? post.publishedAt : '').format(
          'dddd, MMMM Do YYYY'
        )}
      </CardDescription>

      <div className='flex items-center'>
        <div>
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={50}
            height={50}
            className='rounded-full border-2 border-primary'
          />
        </div>
        <CardHeader>
          <CardDescription>
            Posted by <br />
            {post.author.name}
          </CardDescription>
        </CardHeader>
      </div>

      <CardTitle>{post.title}</CardTitle>
      <div className='prose max-w-[1240px] portableText dark:prose-invert'>
        <PortableText
          value={post.content}
          components={myPortableTextComponents}
        />
      </div>
    </section>
  );
};
export default Post;
