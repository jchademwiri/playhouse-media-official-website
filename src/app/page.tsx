import { CallToAction } from '@/components/CallToAction';
import { About, Contact, Hero, Hosting, Services } from '@/components/sections';

export default function Home() {
  return (
    <main className=''>
      <h1 className='text-3xl'>Playhouse Media Group Official Website.</h1>
      <Hero />
      <Services />
      <Hosting />
      <CallToAction />
      <About />
      <Contact />
    </main>
  );
}
