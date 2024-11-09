import React from 'react';
import SignupForm from './components/SignupForm';
import SocialLogin from './components/SocialLogin';
import Background from '../../../assets/images/BackgroundImg.avif';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Button2 from '../../components/buttons/Button2';


const Signup = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-center items-center  h-screen w-full '>
      <div className='hidden lg:flex lg:flex-col lg:w-1/2  lg:justify-center lg:items-center lg:z-10 lg:h-full'>
        <h1 className='text-4xl text-white mb-4 px-6 text-wrap text-center '>Already have an account?</h1>
          <p className='text-base text-center px-10 text-white mb-10 '>Welcome back! Log in to access your account and continue your journey to wellness.</p>
          <Button2 label="Log in"  color="bg-white" extraStyle="bg-opacity-20 w-1/2 h-12" path="/logIn"/>
        </div>
      <div className='lg:bg-white pb-10 z-10 lg:h-full flex flex-col items-center justify-center lg: w-1/2 max-sm:w-3/4 max-lg:rounded-lg shadow-lg border bg-black bg-opacity-30'>
      <Link to="/" className='absolute top-4 left-3 z-10 flex justify-center items-center text-white '> 
        <IoIosArrowBack className='mr-2 '/>
        <p className=''>Back to Home Page</p>
      </Link>
      <SignupForm/>
      <SocialLogin/>
      </div>
      <div className="absolute inset-0">
        <img src={Background} alt="background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-30">
        </div>
      </div>
      </section>
  )
}

export default Signup