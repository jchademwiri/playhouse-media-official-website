import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import HeroCard from '../HeroCard';
import Link from 'next/link';
import { BsArrowDownCircle } from 'react-icons/bs';
import Image from 'next/image';
import { topWebLogo } from '@/data/images';

const Hero = () => {
  return (
    <section
      id='home'
      className='mx-auto py-10 min-h-screen w-full max-w-[1240px] px-4'
    >
      <h1 className='text-4xl font-semibold md:text-8xl '>
        A creative web development agency.
      </h1>
      <div className='my-10 grid gap-4 md:grid-cols-2 lg:place-items-center'>
        <div>
          <SectionTitle title='About Us' />
          <p className='py-5'>
            Welcome to Playhouse Media Group, your premier digital agency
            specializing in SEO-driven web design and development. Our team is
            dedicated to creating captivating websites that not only catch the
            eye but also rank high on search engine results. We understand the
            importance of visibility and organic traffic, which is why we
            optimize your website to maximize its online presence.
          </p>
          <Link href='#services'>
            <BsArrowDownCircle className='my-2 animate-bounce text-3xl text-primary opacity-60 hover:opacity-100' />
          </Link>
        </div>
        <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
          <HeroCard
            subTitle='Featured Project'
            title='Sithembe Transportation & Projects'
            description="
            We recently revamped the appearance and user experience of Sithembe
        Transportation & Projects through a cutting-edge redesign. By incorporating new technologies, we significantly enhanced the website 's performance, mobile responsiveness, and SEO capabilities.
            "
            href='https://www.sithembe.co.za'
          />

          <Link
            href='https://www.designrush.com/agency/web-development-companies'
            target='_blank'
            rel='noopener noreferrer'
            className='border rounded-sm border-secondary hover:border-primary/50 p-4  grid place-items-center'
          >
            <Image src={topWebLogo} alt='top-web-development-companies' />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
