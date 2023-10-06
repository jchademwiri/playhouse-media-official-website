import Faqs from '@/components/Faqs';
import { FAQs } from '@/data';
import Link from 'next/link';
import uuid from 'react-uuid';
import { AccentLine, WhiteLine } from '../SmallLine';

const Hosting = () => {
  return (
    <section className='mx-auto my-10 grid w-full max-w-[1240px] gap-4 px-4 py-10 md:grid-cols-2'>
      {/* <div className=''> */}
      <article>
        <h2 className='py-2 text-3xl font-semibold'>
          Playhouse Media Group
          <WhiteLine />
        </h2>
        <h3 className='py-1 font-medium text-accent'>
          Affordable Web Design Solutions Tailored to Your Needs.
        </h3>
        <p className='py-1'>
          At our technology company, we prioritize reducing the cost of website
          ownership and enabling organizations to secure their domain name.
          Whether you&apos;re a small business or an individual, we believe web
          design should be accessible to all. That&apos;s why we offer a
          selection of professional and budget-friendly web design packages
          designed to suit a wide range of website budgets. Count on us to make
          quality web design affordable and within your reach.
        </p>
        <button className='my-6'>
          <Link
            href={`/`}
            className='block bg-armyGreen px-6 py-4 font-medium uppercase text-accent'
          >
            GET STATRTED NOW
          </Link>
        </button>
      </article>
      <article className=''>
        <h2 className='py-2 text-3xl font-semibold'>
          Frequently Asked Questions
          <AccentLine />
        </h2>

        {FAQs.map((item) => {
          const { question, answer } = item;
          return (
            <div className='my-4' key={uuid()}>
              {/* passing two props to this component */}
              <Faqs question={question} answer={answer}></Faqs>
            </div>
          );
        })}
      </article>
      {/* </div> */}
    </section>
  );
};
export default Hosting;
