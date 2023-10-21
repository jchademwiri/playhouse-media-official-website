import SectionTitle from '../SectionTitle';
import Card from '../Card';
import Link from 'next/link';
import { BsArrowDownCircle } from 'react-icons/bs';

const Hero = () => {
  return (
    <section id='home' className='mx-auto my-5 w-full max-w-[1240px] px-4'>
      <h1 className='text-4xl font-semibold md:text-8xl '>
        A creative web development agency.
      </h1>
      <div className='my-10 grid gap-4 md:grid-cols-2 md:place-items-center'>
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
        <div className='grid gap-2 lg:grid-cols-2'>
          <Card
            subTitle='Featured Project'
            title='Sithembe Transportation & Projects'
            description="
            We recently revamped the appearance and user experience of Sithembe
        Transportation & Projects through a cutting-edge redesign. By incorporating new technologies, we significantly enhanced the website 's performance, mobile responsiveness, and SEO capabilities.
            "
            href='https://www.sithembe.co.za'
          />

          <Card
            subTitle='Featured Project'
            title='King Tax Accounting Services'
            description='
            We recently developed a brand new website for King Tax Accounting Services, aimed at reaching a broader online target audience. Our team implemented robust on-page SEO strategies and established quality backlinks to ensure exceptional search engine optimization.
            '
            href='https://www.kingtaxaccounting.co.za'
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
