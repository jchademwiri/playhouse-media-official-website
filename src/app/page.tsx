import { CallToAction } from '@/components/CallToAction';
import Moto from '@/components/Moto';
import { Contact, Hero, Hosting, Services } from '@/components/sections';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Services />
      <Moto />
      <Hosting />
      <CallToAction />
      <Contact />
    </main>
  );
}
