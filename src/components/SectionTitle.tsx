const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className='flex gap-2 items-center py-4'>
      <span className='h-1 rounded-full w-20  bg-accent'></span>
      <h2 className='text-2xl text-accent font-medium'>{title}</h2>
    </div>
  );
};
export default SectionTitle;
