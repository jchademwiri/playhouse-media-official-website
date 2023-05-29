import { rocket } from '@/data/images';
import Image from 'next/image';

const Moto = () => {
  return (
    <section className='bg-armyGreen '>
      <div className='py-20 max-w-[1240px] w-full mx-auto px-4 md:px-0  '>
        <header className='flex py-4 gap-2 items-center '>
          <Image src={rocket} alt='flying rocket' className='h-[50px]' />
          <h2 className='text-accent font-medium  md:font-semibold text-xl md:text-3xl'>
            Unbeatable Premium Hosting Services
          </h2>
        </header>
        <p className='md:w-4/5 py-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse
          earum minus accusamus ut obcaecati ducimus voluptatibus commodi
          praesentium ullam? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Exercitationem nostrum magnam sed, veniam rem perferendis in
          molestias optio quasi amet ipsum libero odio.
        </p>
      </div>
    </section>
  );
};
export default Moto;
