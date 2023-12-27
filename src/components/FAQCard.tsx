import { FAQAccordion } from './FAQAccordion';
import { FAQs } from '@/data';
import { v4 as uuid } from 'uuid';

const FAQCard = () => {
  return (
    <>
      {FAQs.map((item) => {
        const { question, answer } = item;
        return (
          <div className='my-4' key={uuid()}>
            <FAQAccordion question={question} answer={answer} />
          </div>
        );
      })}
    </>
  );
};
export default FAQCard;
