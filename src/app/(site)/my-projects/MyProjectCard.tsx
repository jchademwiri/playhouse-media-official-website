'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

interface MyProject {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
}

const MyProjectCard = ({
  i,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
}: MyProject) => {
  const cardContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardContainer}
      className='h-screen sticky top-0 flex place-items-center justify-center'
    >
      <motion.div
        style={{
          scale: cardScale,
          backgroundColor: color,
          top: `calc(-1% + ${i * 25}px)`,
        }}
        className='max-w-screen-lg w-full min-h-[500px] mx-auto rounded-3xl p-4 relative top-[-1%] grid place-items-center'
      >
        <h2 className='text-center text-xl md:text-3xl font-bold'>{title}</h2>
        <div className='grid md:grid-cols-2 place-items-center'>
          <div className='py-4'>
            <p>{description}</p>
            <p className='py-2'>
              <Link href={link} target='_blank' rel='noreferrer'>
                Read More
              </Link>
            </p>
          </div>
          <div className='relative w-full h-full rounded-3xl overflow-hidden'>
            <motion.div style={{ scale: imageScale }} className='w-full h-full'>
              <Image
                src={src}
                alt='Project image'
                width={1920}
                height={1080}
                className='object-cover'
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default MyProjectCard;
