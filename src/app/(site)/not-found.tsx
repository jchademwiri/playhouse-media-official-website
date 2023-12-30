import { CardDescription } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: 'Not Found',
  description: 'Page not found',
};
export default function NotFound() {
  return (
    <section className='h-full py-28 text-center'>
      <h2 className='text-7xl font-bold py-2'>Page Not Found</h2>
      <p className='py-2 text-xl'>Could not find requested page, visit our</p>
      <div className='py-4 text-xl text-primary flex mx-auto gap-2 items-center place-content-center'>
        <Link href='/'>Home</Link>
        <CardDescription>|</CardDescription>
        <Link href='/blog'>Blog</Link>
      </div>
    </section>
  );
}
