import { downArrow } from '@/data/images';
import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import Card from '../Card';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id='home'
      className='max-w-[1240px] w-full my-5 mx-auto px-4 md:px-0'
    >
      <h1 className='md:text-8xl font-semibold text-4xl '>
        A creative web development agency.
      </h1>
      <div className='grid md:grid-cols-2 gap-4 my-10 md:place-items-center'>
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
            <Image
              src={downArrow}
              alt='down arrow'
              className='opacity-60 animate-bounce hover:opacity-100'
            />
          </Link>
        </div>
        <div className='grid gap-2 lg:grid-cols-2'>
          <Card
            subTitle='Featured Project'
            title='Sithembe Transportation & Projects'
            description="
            We recently revamped the appearance and user experience of Sithembe
        Transportation & Projects through a cutting-edge redesign. By incorporating new technologies, we significantly enhanced the website 's performance, mobile responsiveness, and SEO capabilities.
            "
          />

          <Card
            subTitle='Featured Project'
            title='King Tax Accounting Services'
            description='
            We recently developed a brand new website for King Tax Accounting Services, aimed at reaching a broader online target audience. Our team implemented robust on-page SEO strategies and established quality backlinks to ensure exceptional search engine optimization.
            '
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
