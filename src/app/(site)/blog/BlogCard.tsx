import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ slug, title, author, publishedAt, excerpt }: Post) => {
  return (
    <Card className='p-4 bg-transparent rounded-md border-secondary border gap-4 flex  justify-between flex-col'>
      <CardContent>
        <div className='flex justify-between items-center pb-4'>
          <CardDescription>
            {moment(publishedAt).format('DD MMMM YYYY')}
          </CardDescription>
          <div className=''>
            <Image
              src={author.image}
              alt={author.name}
              width={30}
              height={30}
              className='rounded-full border-2 border-primary'
            />
          </div>
        </div>
        <Link href={slug} prefetch>
          <CardTitle className='hover:underline'>
            {/* <h2 className='text-lg font-semibold hover:underline'>  */}
            {title}
            {/* </h2> */}
          </CardTitle>
        </Link>
        <p className='py-4'>{excerpt}</p>
      </CardContent>
      <Button variant={'secondary'} className='hover:bg-secondary'>
        <Link href={slug} prefetch>
          Read More
        </Link>
      </Button>
    </Card>
  );
};
export default BlogCard;
