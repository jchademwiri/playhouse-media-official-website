import Faqs from '@/components/Faqs';
import { FAQs } from '@/data';
import Link from 'next/link';
import uuid from 'react-uuid';
import { PrimaryLine } from '../SmallLine';
import { Button } from '../ui/button';
import { FAQAccordion } from '../FAQAccordion';
import Moto from '../Moto';

const Hosting = () => {
  return (
    <section id='about'>
      <Moto />
      <section className='mx-auto my-10 min-h-screen grid w-full max-w-[1240px] gap-4 px-4 py-10 md:grid-cols-2'>
        <article>
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
        </article>
        <article className=''>
          <h2 className='py-2 text-3xl font-semibold'>
            Frequently Asked Questions
            <PrimaryLine />
          </h2>

          {FAQs.map((item) => {
            const { question, answer } = item;
            return (
              <div className='my-4' key={uuid()}>
                {/* passing two props to this component */}
                {/* <Faqs question={question} answer={answer}></Faqs> */}
                <FAQAccordion question={question} answer={answer} />
              </div>
            );
          })}
        </article>
      </section>
    </section>
  );
};
export default Hosting;
