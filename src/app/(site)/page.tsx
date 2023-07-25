import { CallToAction } from '@/components/CallToAction';
import Moto from '@/components/Moto';
import {
  Blog,
  Contact,
  Hero,
  Hosting,
  Projects,
  Services,
} from '@/components/sections';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Services />
      {/* <Blog /> */}
      <Projects />
      <Moto />
      <Hosting />
      <CallToAction />
      <Contact />
    </main>
  );
}
