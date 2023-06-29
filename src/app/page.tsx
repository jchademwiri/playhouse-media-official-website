import { CallToAction } from '@/components/CallToAction';
import Moto from '@/components/Moto';
import {
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
      <Projects />
      <Moto />
      <Hosting />
      <CallToAction />
      <Contact />
    </main>
  );
}
