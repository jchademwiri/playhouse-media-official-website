import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from './ui/card';
import moment from 'moment';
import AuthorProfile from './AuthorProfile';
import { Button } from './ui/button';

const PostCard = ({ id, date, title, excerpt, tags }: Meta) => {
  return (
    <Card className='bg-transparent rounded-md border-secondary border gap-4 flex  justify-between flex-col hover:border-primary '>
      <CardContent>
        <div className='flex justify-between items-center py-4'>
          <CardDescription>
            {moment(date).format('DD MMMM YYYY')}
          </CardDescription>
          <AuthorProfile />
        </div>
        {/* <small className='text-muted-foreground'>
          {tags.map((tag) => (
            <Link href={`/tags/${tag}`} key={tag} prefetch>
              <span className='hover:text-primary pr-1'>{tag}</span>
            </Link>
          ))}
        </small> */}
        {/* <Link href={`/posts/${id}`} prefetch> */}
        <Link href={id} prefetch>
          <CardTitle className='hover:underline'>{title}</CardTitle>
        </Link>
        <CardDescription className='py-4'>{excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant={'secondary'} className='hover:bg-secondary w-full'>
          <Link href={id} prefetch>
            Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default PostCard;
