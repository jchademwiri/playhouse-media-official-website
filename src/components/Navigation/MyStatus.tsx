import { getServerSession } from 'next-auth';
import { Button, buttonVariants } from '../ui/button';
import { authOptions } from '@/lib/auth';
import { LogIn, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
const MyStatus = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session?.user ? (
        <Button
          variant={'destructive'}
          size={'icon'}
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: `${window.location.origin}/login`,
            })
          }
        >
          <LogOut />
        </Button>
      ) : (
        <Link className={buttonVariants()} href='/login'>
          <LogIn />
        </Link>
      )}
    </>
  );
};
export default MyStatus;
