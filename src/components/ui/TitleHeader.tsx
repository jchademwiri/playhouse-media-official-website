type TitleHeader = {
  title: string;
  subTitle: string;
};

const TitleHeader = ({ title, subTitle }: TitleHeader) => {
  return (
    <div className='items-end justify-between md:flex'>
      <div>
        <h2 className='text-4xl font-semibold md:text-6xl'>{title}</h2>
        <div className='flex items-center gap-2 py-4'>
          <span className='h-1 w-20 rounded-full  bg-primary'></span>
          <h2 className='text-2xl font-medium text-primary'>{subTitle}</h2>
        </div>
      </div>
    </div>
  );
};
export default TitleHeader;
