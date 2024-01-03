'use client';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { PrimaryLine } from '../SmallLine';
import { Button } from '../ui/button';
import Moto from '../Moto';
import FAQCard from '../FAQCard';

const Hosting = () => {
  return (
    <section id='about'>
      <Moto />
      <section className='mx-auto my-10 grid w-full max-w-[1240px] gap-4 px-4 py-10 md:grid-cols-2'>
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 className='py-2 text-3xl font-semibold'>
            Playhouse Media Group
            <PrimaryLine />
          </h2>
          <h3 className='py-1 font-medium text-primary'>
            Affordable Web Design Solutions Tailored to Your Needs.
          </h3>
          <p className='py-1'>
            At our technology company, we prioritize reducing the cost of
            website ownership and enabling organizations to secure their domain
            name. Whether you&apos;re a small business or an individual, we
            believe web design should be accessible to all. That&apos;s why we
            offer a selection of professional and budget-friendly web design
            packages designed to suit a wide range of website budgets. Count on
            us to make quality web design affordable and within your reach.
          </p>
          <Button size={'lg'} className='my-6'>
            <Link href={`/`}>GET STATRTED NOW</Link>
          </Button>
        </motion.article>
        <article className=''>
          <h2 className='py-2 text-3xl font-semibold'>
            Frequently Asked Questions
            <PrimaryLine />
          </h2>

          <FAQCard />
        </article>
      </section>
    </section>
  );
};
export default Hosting;
