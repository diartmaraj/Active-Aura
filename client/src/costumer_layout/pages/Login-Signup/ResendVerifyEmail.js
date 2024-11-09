import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import Button1 from '../../components/buttons/Button1';
import { useSelector } from 'react-redux';
import Background from "../../../assets/images/BackgroundImg.avif";

const ResendVerifyEmail = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { isLoading, error } = useSelector((state) => state.auth);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/resend-verification-email', { email });
          setMessage(response.data.message);
        } catch (error) {
          setMessage(error.response.data.message || 'Something went wrong. Please try again.');
        }
      };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full  max-w-md p-8 rounded z-10 max-lg:rounded-lg shadow-lg border border-black bg-black bg-opacity-30">
        <h2 className="mb-6 text-2xl font-bold text-center text-white">Resend Verification Email</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-field">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email:</label>
            <InputText
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 rounded text-white bg-transparent border border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary_2"
              required
            />
          </div>
          <div className='flex justify-center items-center'>
          <Button1 type="submit" label={isLoading ? 'Sending...' : 'Send'} extraStyle="w-full h-12" disabled={isLoading} />
          </div>
         
        </form>
        {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
      </div>
      <div className="absolute inset-0">
        <img
          src={Background}
          alt="background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </div>
  )
}

export default ResendVerifyEmail