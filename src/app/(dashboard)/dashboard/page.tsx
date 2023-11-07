import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (session?.user) {
    return (
      <section>
        <>
          <span className='font-bold text-4xl'>
            Welcome {session?.user.fullname}
          </span>

          <div className='border-dashed border border-secondary w-full h-12 rounded-lg'></div>
          <div className='border-dashed border border-secondary w-full h-64 rounded-lg'></div>
        </>
      </section>
    );
  }

  return (
    <div>
      <span className='font-bold text-4xl'>Please Login to access</span>
    </div>
  );
};
export default Dashboard;
