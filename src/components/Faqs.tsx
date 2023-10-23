'use client';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
// import { Faq } from '../../types';

const Faqs = ({ question, answer }: Faq) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <>
      {/* question section */}
      <div
        onClick={handleToggle}
        className='flex cursor-pointer justify-between bg-secondary p-2 '
      >
        <h2 className='text-xl font-semibold '>{question}</h2>
        <BiChevronDown
          className={`text-3xl transition-all duration-500 ${
            active ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* answer section */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className='overflow-clip'
          >
            <p className='bg-secondary/50 p-2 text-sm  md:text-base '>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div></div>
    </>
  );
};

export default Faqs;
