import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SocialLogin = () => {
  return (
    <div className='mt-6 flex flex-col justify-center items-center z-10'>
        <p className='text-center text-sm font-semibold mb-4 text-white lg:text-black'>or use your account</p>
        <div className='flex justify-center mt-4 gap-16'>
            <Link to="https://www.facebook.com"><FaFacebook  className='h-10 w-10 text-white lg:text-neutral_2'/></Link>
            <Link to='https://www.google.com'><FaGoogle  className='h-10 w-10 text-white lg:text-neutral_2'/></Link>
            <Link to='https://www.linkedin.com'><FaLinkedin  className='h-10 w-10 text-white lg:text-neutral_2'/></Link>
        </div>
    </div>
  )
}

export default SocialLogin;