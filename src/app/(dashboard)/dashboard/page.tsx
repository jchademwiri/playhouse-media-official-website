import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <>
        <span className='font-bold text-4xl'>Home</span>
        <div className='border-dashed border border-secondary w-full h-12 rounded-lg'></div>
        <div className='border-dashed border border-secondary w-full h-64 rounded-lg'></div>
      </>
    </div>
  );
};
export default Dashboard;
