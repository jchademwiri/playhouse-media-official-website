import { CallToAction } from "@/components/CallToAction";

import {
  Projects,
  Contact,
  Hero,
  Hosting,
  Services,
  Blog,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Blog />
      {/* <Projects /> */}
      <Hosting />
      <CallToAction />

      <Contact />
    </main>
  );
}
