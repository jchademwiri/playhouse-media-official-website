import Link from "next/link";

interface Card {
  subTitle?: string;
  title: string;
  description: string;
  href: string;
}

const Card = ({ subTitle, title, description, href }: Card) => {
  return (
    <div className='rounded-sm bg-armyGreen px-7 py-8 text-white'>
      <header>
        {subTitle && (
          <h3 className='py-2 text-lg font-medium text-accent'>{subTitle} </h3>
        )}

        <h4 className='py-2 text-xs font-semibold'>{title}</h4>
      </header>
      <p className='py-2 my-2 text-sm'>{description}</p>
      <Link href={href} className="py-3 px-4 my-4 bg-accent/10 shadow-md hover:bg-accent/20" >View Project</Link>
    </div>
  );
};
export default Card;
