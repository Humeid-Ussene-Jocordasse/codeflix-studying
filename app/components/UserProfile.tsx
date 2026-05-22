import Image from 'next/image';

export const UserProfile = () => (
  <div className='flex items-center space-x-4'>
    <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
    {/* <Link href='/account'> */}
    <Image
      src='/profile.png'
      alt='profile'
      className='cursor-pointer rounded'
      width={40}
      height={40}
    />
  </div>
);
