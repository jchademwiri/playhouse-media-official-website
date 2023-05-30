import SectionTitle from '../SectionTitle';
import { WhiteLine } from '../SmallLine';

const Services = () => {
  return (
    <section id='services' className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <h2 className='text-4xl font-semibold md:text-6xl'>
        Quality & Expertise
      </h2>
      <SectionTitle title='Our Services' />
      <div className='grid gap-4 md:grid-cols-2'>
        <div className=''>
          <p className='py-2'>
            We offer a comprehensive range of{' '}
            {/* <span className='text-accent'> */}
            web design and development services
            {/* </span>{' '} */}, placing special emphasis on mobile
            optimization. Our expertise extends beyond that, as we provide
            all-encompassing solutions for your brand&apos;s digital marketing
            needs as well.
          </p>
          <p className='py-2'>
            Discover the diverse array of services we offer to fuel the growth
            of your brand. Whether it&apos;s SEO, SEM, or the technical aspects
            of digital marketing, we excel in all areas. Count on us to be your
            trusted partner, adept at {/* <span className='text-accent'> */}
            maximizing your online presence and driving results.
            {/* </span> */}
          </p>
          <p className='py-2'>
            Elevate your brand&apos;s visibility with our unrivaled graphic
            design expertise. Our talented team crafts captivating logos,
            visually stunning website graphics,{' '}
            {/* <span className='text-accent'> */}
            custom company profiles, letterheads, and email signatures{' '}
            {/* </span>{' '} */}
            that make a lasting impression. Let us bring your brand to life
            through visually striking designs that set you apart from the
            competition.
          </p>
        </div>
        <div>
          <article className='py-2'>
            <header className='pb-2 text-xl font-medium text-accent'>
              Custom Web Design & Development
              <WhiteLine />
            </header>
            <p>
              Our agency excels in creating visually appealing and user-friendly
              custom websites. Using the latest technologies, we ensure your
              website is up-to-date and secure. Trust us to build your
              captivating online presence.
            </p>
          </article>
          {/* <article className='py-2'>
            <header className='text-accent font-medium text-xl'>
              E-Commerce Solutions
            </header>
            <p>
              We enhance your website's ranking in search engine results pages
              (SERPs), utilizing proven techniques to boost visibility to
              potential customers. Trust us to optimize your website and drive
              organic traffic, connecting you with your target audience.
            </p>
          </article> */}
          <article className='py-2'>
            <header className='pb-2 text-xl font-medium text-accent'>
              Search Engine Optimization
              <WhiteLine />
            </header>
            <p>
              We enhance your website&apos;s ranking in search engine results
              pages (SERPs), utilizing proven techniques to boost visibility to
              potential customers. Trust us to optimize your website and drive
              organic traffic, connecting you with your target audience.
            </p>
          </article>
          <article className='py-2'>
            <header className='pb-2 text-xl font-medium text-accent'>
              High-Quality Graphics & Branding
              <WhiteLine />
            </header>
            <p>
              Our team excels in producing top-notch graphics for diverse
              applications, including web design, print, and marketing
              materials. Trust us to create visually compelling designs that
              enhance your brand&apos;s presence.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Services;
