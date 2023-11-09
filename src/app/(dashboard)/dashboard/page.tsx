
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  return (
    <section>
      <>
        <span className='font-bold text-4xl'>
          Welcome <span className='text-primary'>{session?.user.fullname}</span>
        </span>

        <div className='border-dashed p-2 border border-secondary w-full rounded-lg'>
          <h2>Server Session User Details:</h2>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      </>
    </section>
  );
};
export default Dashboard;
