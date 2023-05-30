interface Card {
  subTitle?: string;
  title: string;
  description: string;
}

const Card = ({ subTitle, title, description }: Card) => {
  return (
    <div className='rounded-sm bg-armyGreen px-7 py-8 '>
      <header>
        {subTitle && (
          <h3 className='py-2 text-lg font-medium text-accent'>{subTitle} </h3>
        )}

        <h4 className='py-2 text-xs font-medium'>{title}</h4>
      </header>
      <p className='py-2 text-sm'>{description}</p>
    </div>
  );
};
export default Card;
