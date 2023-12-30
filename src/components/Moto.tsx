'use client';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Moto = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className='bg-secondary  '
    >
      <div className='mx-auto w-full max-w-[1240px] px-4 py-20'>
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className='flex items-center text-primary gap-2 py-4 '
        >
          <Rocket size={50} className='' />
          <h2 className='text-xl font-medium md:text-3xl md:font-semibold'>
            Unbeatable Premium Hosting Services.
          </h2>
        </motion.header>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className='py-2 md:w-4/5'
        >
          At Playhouse Media, our website designers handle the entire design
          process effortlessly. Just provide us with your preferred styles,
          colors, desired functions, your business niche, and target market, and
          we&apos;ll craft a one-of-a-kind design for your website. With us,
          achieving your dream website is as simple as that!
        </motion.p>
      </div>
    </motion.section>
  );
};
export default Moto;
