import Faqs from '@/components/Faqs';
import { FAQs } from '@/data';
import uuid from 'react-uuid';

const Hosting = () => {
  return (
    <section className='max-w-[1240px] w-full mx-auto px-4 md:px-0'>
      <div className='grid md:grid-cols-2 py-10 my-10'>
        <div>
          <h2 className='text-3xl'>Playhouse Media Group</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellat
          deserunt repudiandae nobis vel consequuntur similique doloremque vero
          ratione dolorum.
        </div>
        <div className='w-full mx-auto grid gap-4'>
          {FAQs.map((item) => {
            // destruct
            const { question, answer } = item;
            return (
              <div className='bg-darkcolor my-4 rounded-md' key={uuid()}>
                {/* passing two props to this component */}
                <Faqs question={question} answer={answer}></Faqs>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Hosting;
