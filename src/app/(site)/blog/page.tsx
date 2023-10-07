import { getPosts } from '@/sanity/actions';
import moment from 'moment';
import Link from 'next/link';

const Blog = async () => {
  const posts = await getPosts({
    query: '',
    category: '',
    page: '1',
  });

  // console.log(posts)
  return (
    <section className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <div>
        <p className='text-2xl font-bold'>Blog Posts</p>
        <ul>
          {posts.map((post: Post) => (
            <li key={post.slug} className='grid my-2 gap-4'>
              <Link
                href={post.slug}
                prefetch
                className='rounded flex justify-between hover:bg-armyGreen/80  bg-armyGreen p-2'
              >
                <div>
                  {post.title}
                  <span className='text-accent'>
                    {' - '}
                    {post.author.name}
                  </span>
                </div>
                <small> {moment(post.publishedAt).format('DD MMM YYYY')}</small>
              </Link>
              {/* <p className='py-1'>{post.excerpt}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Blog;
