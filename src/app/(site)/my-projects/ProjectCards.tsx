'use client';
import { useScroll } from 'framer-motion';
import MyProjectCard from './MyProjectCard';
import { useRef } from 'react';

import { projects } from '@/data/projects';

const ProjectCards = () => {
  const mainContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainContainer,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={mainContainer} className='relative mb-10'>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <MyProjectCard
            key={i}
            i={i}
            {...project}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
};
export default ProjectCards;
