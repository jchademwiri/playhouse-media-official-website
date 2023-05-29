interface Card {
  subTitle?: string;
  title: string;
  description: string;
}

const Card = ({ subTitle, title, description }: Card) => {
  return (
    <div className='px-7 py-8 bg-armyGreen rounded-sm '>
      <header>
        {subTitle && (
          <h3 className='font-medium text-lg text-accent py-2'>
            {subTitle} 👉{' '}
          </h3>
        )}

        <h4 className='text-xs py-2 font-medium'>{title}</h4>
      </header>
      <p className='text-sm py-2'>{description}</p>
    </div>
  );
};
export default Card;
