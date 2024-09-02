import React from 'react'
import { InputText } from 'primereact/inputtext';

import { Link } from 'react-router-dom';
import Button1 from '../../../components/buttons/Button1';

const SignupForm = () => {
  return (
    <form onSubmit="" className="flex flex-col justify-center items-center w-full p-6  border-gray-200 z-10">
            <h1 className='text-2xl font-semibold mb-6 text-white lg:text-black'>Sign up</h1>
          <div className='flex flex-col gap-2 justify-center items-center mb-6'>
            <div className='flex justify-center items-center gap-2'>
             <InputText
               type="text"
               id="firstName"
               placeholder="First Name"
               className="block pl-2.5 pr-5  py-3 w-full text-sm max-sm:text-[12px] text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
             />
             <InputText
             type="text"
             id="lastName"
             placeholder="Last Name"
             className="block pl-2.5 pr-5 py-3 w-full text-sm max-sm:text-[12px] text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
           />
           </div>
            <InputText
               type="email"
               id="email"
               placeholder="Email"
               className="block pl-2.5 pr-20  py-3  w-full text-sm max-sm:text-[12px] text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
             />
             <InputText
               type="password"
               id="password"
               placeholder="Password"
               className="block pl-2.5 pr-28  py-3 w-full text-sm max-sm:text-[12px] text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
             />
            <InputText
               type="password"
               id="confirmPassword"
               placeholder="Confirm password"
               className="block pl-2.5 pr-20 py-3 mb-2 w-full text-sm max-sm:text-[12px] text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
             />
             
             <Button1 label="Sign Up"  extraStyle="w-full h-12" />
              <Link to="/logIn">
                <p className='text-white lg:hidden mt-2 max-sm:text-sm'>Already have an account?</p>
              </Link>
             </div>
    </form>
  )
}

export default SignupForm;