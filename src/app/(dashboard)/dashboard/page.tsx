import User from '@/components/User';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  return (
    <section>
      <>
        <span className='font-bold text-4xl'>
          Welcome {session?.user.fullname}
        </span>

        <div className='border-dashed border border-secondary w-full rounded-lg'>
          <h2>Client Session:</h2>
          <User />
        </div>
        <div className='border-dashed border border-secondary w-full rounded-lg'>
          <h2>Server Session:</h2>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      </>
    </section>
  );
};
export default Dashboard;
