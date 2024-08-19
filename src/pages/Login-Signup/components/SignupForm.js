import React from 'react'
import { InputText } from 'primereact/inputtext';

import { Link } from 'react-router-dom';
import Button2 from '../../../components/Button2';

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
               class="block pl-2.5 pr-5  py-3 w-full text-sm text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
             />
             <InputText
             type="text"
             id="lastName"
             placeholder="Last Name"
             class="block pl-2.5 pr-5 py-3 w-full text-sm text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
           />
           </div>
            <InputText
               type="email"
               id="email"
               placeholder="Email"
               class="block pl-2.5 pr-20  py-3  w-full text-sm text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
             />
             <InputText
               type="password"
               id="password"
               placeholder="Password"
               class="block pl-2.5 pr-28  py-3 w-full text-sm text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
             />
            <InputText
               type="password"
               id="confirmPassword"
               placeholder="Confirm password"
               class="block pl-2.5 pr-20 py-3 mb-2 w-full text-sm text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
             />
             
             <Button2 label="Sign Up" color="bg-primary" type="submit" extraStyle="w-full" />
              <Link to="/logIn">
                <p className='text-white mt-2'>Already have an account?</p>
              </Link>
             </div>
    </form>
  )
}

export default SignupForm;