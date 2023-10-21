import Link from 'next/link';

export const CallToAction = () => {
  return (
    <div className='bg-secondary py-12 '>
      <div className='mx-auto w-full max-w-[1240px] justify-between gap-4 px-4 lg:flex lg:grid-cols-2 lg:items-center '>
        <div className='py-3'>
          <p>
            Let&apos;s Build Your Website Together and Claim Your{' '}
            <span className='text-primary'>Free .co.za</span> Domain.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-2'>
          <Link
            href='tel:+27740491433'
            className='rounded bg-background px-6 py-2 hover:bg-background'
          >
            <p className='py-1 text-lg font-medium text-primary'>Call Us Now</p>
            <span>074 049 1433</span>
          </Link>
          <Link
            href='mailto:info@playhousemedia.net'
            className='rounded bg-background px-6 py-2 hover:bg-background'
          >
            <p className='py-1 text-lg font-medium text-primary'>
              Email Us Now
            </p>
            <span>info@playhousemedia.net</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
