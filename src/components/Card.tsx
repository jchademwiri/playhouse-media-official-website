import Link from 'next/link';
import { CardTitle } from './ui/card';
import { Button } from './ui/button';

interface Card {
  subTitle?: string;
  title: string;
  description: string;
  href: string;
}

const Card = ({ subTitle, title, description, href }: Card) => {
  return (
    <div className='rounded-sm bg-secondary px-4 py-4 '>
      <header>
        {subTitle && (
          <h3 className='py-2 text-lg font-medium text-primary'>{subTitle} </h3>
        )}
        <CardTitle className='text-sm'>{title}</CardTitle>
      </header>
      <p className='py-2 my-2 text-sm'>{description}</p>
      <Button size={'lg'}>
        <Link href={href}>View Project</Link>
      </Button>
    </div>
  );
};
export default Card;
