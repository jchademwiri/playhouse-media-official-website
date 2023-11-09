import { RegisterUser } from '@/components/forms/RegisterUser';
export const metadata = {
  title: 'PMG Register',
  description: 'PMG Data Register',
};
const AddUser = () => {
  return (
    <section className='grid place-items-center h-screen'>
      <RegisterUser />
    </section>
  );
};
export default AddUser;
