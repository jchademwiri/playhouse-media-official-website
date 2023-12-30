import Link from 'next/link';

export const metadata = {
  title: 'Not Found',
  description: 'Page not found',
};
export default function NotFound() {
  return (
    <section className='h-full py-28 text-center'>
      <h2 className='text-7xl font-bold py-2'>Page Not Found</h2>
      <p className='py-2 text-xl'>
        Could not find requested blog page, visit our
      </p>
      <p className='py-4 text-xl text-primary'>
        <Link href='/'>Blog Page</Link>
      </p>
    </section>
  );
}
