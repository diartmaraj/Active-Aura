import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../../../store/features/auth/authSlice';
import Button1 from '../../../components/buttons/Button1';
import { Link, useNavigate } from 'react-router-dom';
import PasswordStrengthMeter from './PasswordStrengthMeter';

const SignupForm = () => {
  const [form, setForm] = useState({ email: '', password: '', firstName: '' , lastName: '', confirmPassword: ''});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup(form)).then((action) => {
      if (action.meta.requestStatus === 'fulfilled') {
        navigate('/verify-email'); // Redirect to login page after successful signup
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full p-6  border-gray-200 z-10">
      <h1 className='text-2xl font-semibold mb-6 text-white lg:text-black'>Create an account</h1>
      <div className='flex flex-col gap-2 justify-center items-center '>
      <div className='flex justify-center items-center gap-2'>
        <InputText
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="block pl-2.5 pr-5  py-3 w-full text-sm max-sm:text-[12px] text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
        />
        <InputText
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="block pl-2.5 pr-5  py-3 w-full text-sm max-sm:text-[12px] text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
        />
        </div>
        <InputText
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="block pl-2.5 pr-20 py-3 w-full text-sm max-sm:text-[12px] text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
        />
        <InputText
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="block pl-2.5 pr-20 py-3 w-full text-sm max-sm:text-[12px] text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
        />
         <InputText
               type="password"
               id="confirmPassword"
               name='confirmPassword'
               placeholder="Confirm password"
               value={form.confirmPassword}
               onChange={handleChange}
               className="block pl-2.5 pr-20 py-3 mb-2 w-full text-sm max-sm:text-[12px] text-white lg:text-black bg-none placeholder:text-gray-300 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
             />
             <PasswordStrengthMeter password={form.password} />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button1 type="submit" label={isLoading ? 'Signing up...' : 'Sign Up'} extraStyle="w-full h-12" disabled={isLoading} />
        <Link to="/login">
          <p className="text-white lg:hidden mt-2 max-sm:text-sm">Already have an account?</p>
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;




