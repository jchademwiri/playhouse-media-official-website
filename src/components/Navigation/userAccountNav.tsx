import { getServerSession } from 'next-auth';
import { Button } from '../ui/button';
import { authOptions } from '@/lib/auth';

const UserAccountNav = async () => {
  const session = await getServerSession(authOptions);
  return <div>{session?.user ? <div>SO</div> : <div>SI</div>}</div>;
};
export default UserAccountNav;
