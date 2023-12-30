import Image from 'next/image';
import profilePic from '/public/images/jacobc.jpg';

const AuthorProfile = () => {
  return (
    <Image
      src={profilePic}
      alt='Jacob Chademwiri'
      width={30}
      height={30}
      className='rounded-full'
    />
  );
};
export default AuthorProfile;
