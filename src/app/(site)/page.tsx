import { CallToAction } from '@/components/CallToAction';
export const revalidate = 5;
import {
  Blog,
  Projects,
  Contact,
  Hero,
  Hosting,
  Services,
} from '@/components/sections';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Services />
      <Projects />
      <Hosting />
      <CallToAction />
      {/* <Blog /> */}
      <Contact />
    </main>
  );
}
