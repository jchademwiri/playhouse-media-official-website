import { Rocket } from 'lucide-react';

const Moto = () => {
  return (
    <section id='about' className='bg-secondary  '>
      <div className='mx-auto w-full max-w-[1240px] px-4 py-20'>
        <header className='flex items-center text-primary gap-2 py-4 '>
          <Rocket size={50} className='' />
          <h2 className='text-xl font-medium md:text-3xl md:font-semibold'>
            Unbeatable Premium Hosting Services.
          </h2>
        </header>
        <p className='py-2 md:w-4/5'>
          At Playhouse Media, our website designers handle the entire design
          process effortlessly. Just provide us with your preferred styles,
          colors, desired functions, your business niche, and target market, and
          we&apos;ll craft a one-of-a-kind design for your website. With us,
          achieving your dream website is as simple as that!
        </p>
      </div>
    </section>
  );
};
export default Moto;
