import { getPosts, getProjects } from '@/lib/contentful';
import Link from 'next/link';

const Blog = async () => {
  const posts = await getPosts();
  const projects = await getProjects();

  return (
    <section className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <div>
        <p className='text-2xl font-bold'>Blog Posts</p>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <div>
        <p className='text-2xl font-bold'>Blog Projects 👇</p>
        <ul>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={project.slug}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  );
};
export default Blog;
