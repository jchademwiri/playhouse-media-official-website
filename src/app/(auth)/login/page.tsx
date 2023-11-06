import { LoginUser } from './LoginUser';

export const metadata = {
  title: 'PMG Login',
  description: 'PMG Data Login',
};

const Login = () => {
  return (
    <section className='grid place-items-center h-screen'>
      <LoginUser />
    </section>
  );
};
export default Login;
