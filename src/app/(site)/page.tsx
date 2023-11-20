import { CallToAction } from '@/components/CallToAction';
import {
  // Blog,
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
