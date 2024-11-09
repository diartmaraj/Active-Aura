import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../store/features/auth/authSlice';
import Button1 from '../../../components/buttons/Button1';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })).then((action) => {
      if (action.meta.requestStatus === 'fulfilled') {
        navigate('/'); // Redirect to dashboard or other authenticated page
      }
    });
  };

  const handleResendEmail = ()=>{

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full p-6 border-gray-200 max-lg:px-10 lg:w-3/4 2xl:w-4/6">
      <h1 className='text-2xl text-center font-semibold mb-6 text-white lg:text-black'>Log in to your account</h1>
      <div className='flex flex-col gap-2 justify-center items-center mb-6 w-full'>
        <InputText
          type="email"
          id="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block pl-2.5 pr-28 py-3 w-full text-sm text-white lg:text-black bg-none placeholder:text-gray-300 max-sm:placeholder:text-[12px] bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
        />
        <InputText
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block pl-2.5 pr-28 py-3 w-full text-sm text-white lg:text-black bg-none placeholder:text-gray-300 max-sm:placeholder:text-[12px] bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2 peer z-[1111]"
        />
        {error && 
        <div className='flex justify-center items-center gap-4 '>
          <p className="text-red-500 text-sm">{error}</p>
          <Link to='/send-verification-email'> 
            <p className='text-md hover:text-primary hover:underline cursor-pointer' >Resend vericication email</p>
          </Link>
        </div>
        }
        <Button1 type="submit" label={isLoading ? 'Logging in...' : 'Log In'} extraStyle="w-full h-12" disabled={isLoading} />
        <Link to="/forgotPassword">
          <p className="text-white lg:hidden mt-2 max-sm:text-sm">Forgot your password?</p>
        </Link>
          <p className="text-white lg:hidden mt-2 max-sm:text-sm">Dont have an account? <Link to="/signup" className='hover:text-primary underline'>Sign up</Link> </p>
  
      </div>
    </form>
  );
};

export default LoginForm;
