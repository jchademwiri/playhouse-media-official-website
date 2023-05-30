import Link from 'next/link';

export const CallToAction = () => {
  return (
    <div className='bg-armyGreen py-12'>
      <div className='mx-auto w-full max-w-[1240px] justify-between gap-4 px-4 lg:flex lg:grid-cols-2 lg:items-center '>
        <div className='py-3'>
          <p>
            Let's Build Your Website Together and Claim Your{' '}
            <span className='text-accent'>Free .co.za</span> Domain.
          </p>
        </div>
        <div className='grid gap-4 md:flex'>
          <Link
            href='tel:+27740491433'
            className='rounded bg-dark/20 px-6 py-2 hover:bg-dark/50'
          >
            <h3 className='py-1 text-lg font-medium text-accent'>
              Call Us Now
            </h3>
            <span>074 049 1433</span>
          </Link>
          <Link
            href='mailto:info@playhousemedia.net'
            className='rounded bg-dark/20 px-6 py-2 hover:bg-dark/50'
          >
            <h3 className='py-1 text-lg font-medium text-accent'>
              Email Us Now
            </h3>
            <span>info@playhousemedia.net</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
