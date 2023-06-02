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
      {/* <Hero />
      <Services />
      <Moto />
      <Hosting /> */}
      {/* @ts-expect-error Async Server Component */}
      <Projects />
      <CallToAction />
      <Contact />
    </main>
  );
}
