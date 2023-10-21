import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ slug, title, author, publishedAt, excerpt }: Post) => {
  return (
    <Card className='bg-transparent rounded-md border-secondary border gap-4 flex  justify-between flex-col'>
      <CardContent>
        <div className='flex justify-between items-center py-4'>
          <CardDescription>
            {moment(publishedAt).format('DD MMMM YYYY')}
          </CardDescription>
          <Image
            src={author.image}
            alt={author.name}
            width={30}
            height={30}
            className='rounded-full'
          />
        </div>
        <Link href={slug} prefetch>
          <CardTitle className='hover:underline'>{title}</CardTitle>
        </Link>
        <p className='py-4'>{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button variant={'secondary'} className='hover:bg-secondary w-full'>
          <Link href={slug} prefetch>
            Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default BlogCard;
