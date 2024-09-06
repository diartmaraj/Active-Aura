import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const PersonalInformation = ({ userId }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    console.log('User from Redux:', user);
  }, [user]);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user._id) {
        console.error('User data is not available');
        return;
      }
  
    const data = new FormData();
    data.append('userId', user._id);
    data.append('profileImage', profileImage);
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('phoneNumber', formData.phoneNumber);
  
    try {
      const response = await axios.post('http://localhost:3001/api/profile/update', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Profile updated:', response.data);
      // Update the user data in the frontend state or context as needed
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className='max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg'>
      <h2 className='text-2xl font-semibold mb-6 text-gray-800'>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-6'>
          <label className='block mb-2 text-gray-600'>Profile Image:</label>
          <div className='flex items-center'>
            <div className='w-24 h-24 rounded-full overflow-hidden bg-gray-200'>
              {previewImage ? (
                <img src={previewImage} alt='Profile Preview' className='w-full h-full object-cover' />
              ) : (
                <span className='flex items-center justify-center h-full text-gray-400'>No image</span>
              )}
            </div>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='ml-4 p-2 border border-gray-300 rounded-md'
            />
          </div>
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-gray-600'>First Name:</label>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-gray-600'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-gray-600'>Email Address:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-gray-600'>Phone Number:</label>
          <input
            type='tel'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <button type='submit' className='w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300'>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
