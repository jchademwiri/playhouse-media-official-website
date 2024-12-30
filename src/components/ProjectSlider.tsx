import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { ProjectliderCard } from './ProjectliderCard';
import { getProjects } from '@/sanity/actions';

const ProjectSlider = async () => {
  const projects: Project[] = await getProjects({
    query: '',
    category: '',
    page: '1',
  });
  return (
    <div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full'
      >
        <CarouselContent>
          {projects?.length > 0 ? (
            projects
              // .slice(0, 3)
              .map((project) => (
                <ProjectliderCard key={project.id} {...project} />
              ))
          ) : (
            <p>No projects</p>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default ProjectSlider;
