import Posts from '@/components/Posts';
import { Card, CardContent } from '@/components/ui/card';

const posts = () => {
  return (
    <section className='mx-auto my-10 w-full max-w-[1240px] px-4'>
      <h1 className='whitespace-nowrap text-2xl font-semibold md:text-4xl mb-8'>
        I&apos;m <span className='font-bold'>Jacob.</span>
      </h1>
      {/* <section className='grid sm:grid-cols-2 gap-4 lg:grid-cols-3'> */}
      <section className='grid gap-4'>
        <Posts />
      </section>
    </section>
  );
};
export default posts;
