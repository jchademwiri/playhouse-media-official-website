
import { RegisterUser } from './RegisterUser';

export const metadata = {
  title: 'PMG Register',
  description: 'PMG Data Register',
};

const Register = () => {
  return (
    <section className='grid place-items-center h-screen'>
      <RegisterUser />
    </section>
  );
};
export default Register;
