import { CallToAction } from '@/components/CallToAction';
import Moto from '@/components/Moto';
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
      <Moto />
      <Hosting />
      <CallToAction />
      <Blog />
      <Contact />
    </main>
  );
}
