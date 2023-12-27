import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { CarouselItem } from './ui/carousel';

export const ProjectliderCard = ({ url, name, image, categories }: Project) => {
  return (
    <CarouselItem className='sm:basis-1/2 md:basis-1/3'>
      <div className=''>
        <CardContent className='aspect-auto'>
          <Link href={url} target='_blank' rel='noopener noreferrer'>
            <h3 className='my-3 text-lg font-medium hover:text-primary'>
              {name}
            </h3>
            <div className='h-52 w-auto'>
              <Image
                src={image}
                alt={name}
                className='max-h-52 w-full rounded-lg object-cover border border-secondary hover:border-primary'
                width={311}
                height={208}
                placeholder='blur'
                blurDataURL={`/opengraph-image.png`}
              />
            </div>
          </Link>
          <p className='text-primary text-sm py-2 italic'>{categories}</p>
        </CardContent>
      </div>
    </CarouselItem>
  );
};
