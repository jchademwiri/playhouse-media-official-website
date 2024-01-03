import { CallToAction } from '@/components/CallToAction';

import {
  Projects,
  Contact,
  Hero,
  Hosting,
  Services,
  Blog,
} from '@/components/sections';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Services />
      <Projects />
      <Hosting />
      <CallToAction />
      <Blog />
      <Contact />
    </main>
  );
}
