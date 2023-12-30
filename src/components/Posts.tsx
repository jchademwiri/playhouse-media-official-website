import { getSortedPostsData } from '@/lib/posts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import Link from 'next/link';
import moment from 'moment';

const Posts = () => {
  const posts = getSortedPostsData();

  return (
    <section>
      <div className='w-full grid sm:grid-cols-2 lg:grid-cols-3  gap-4'>
        {posts.map(({ id, date, title }: BlogPost) => (
          <Card className='bg-secondary' key={id}>
            <CardHeader>
              <Link href={`/posts/${id}`}>
                <CardTitle>{title}</CardTitle>
              </Link>
            </CardHeader>
            <CardContent>
              <CardDescription className='text-sm'>
                {moment(date).format('DD MMMM YYYY')}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Posts;
