import React from 'react'

const AccountSecurity = () => {
  return (
    <div>
    <h2 className='text-xl font-semibold mb-4'>Account Security</h2>
    {/* Security settings form */}
    <form>
      <label className='block mb-2'>Change Password:</label>
      <input type='password' placeholder='Current Password' className='border p-2 w-full mb-4' />
      <input type='password' placeholder='New Password' className='border p-2 w-full mb-4' />
      <input type='password' placeholder='Confirm New Password' className='border p-2 w-full mb-4' />
      <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Change Password</button>
    </form>
    <button className='bg-gray-300 text-black p-2 rounded mt-4'>Enable Two-Factor Authentication</button>
  </div>
  )
}

export default AccountSecurity