import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AccountSecurity from './sections/AccountSecurity'
import PersonalInformation from './sections/PersonalInformation'

const AccountSettings = () => {
    return (
        <section className='min-h-screen flex flex-row'>
          {/* Sidebar */}
          <aside className='w-1/4 bg-gray-200 p-4'>
            <div className='mb-4 flex items-center'>
              <span className='text-xl font-semibold mr-2'>Settings</span>
              <FaSearch className='text-gray-600' />
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/settings/personal-information" className='block py-2 px-4 hover:bg-gray-300'>
                    Personal Information
                  </Link>
                </li>
                <li>
                  <Link to="/settings/account-security" className='block py-2 px-4 hover:bg-gray-300'>
                    Account Security
                  </Link>
                </li>
                <li>
                  <Link to="/settings/privacy-settings" className='block py-2 px-4 hover:bg-gray-300'>
                    Privacy Settings
                  </Link>
                </li>
                <li>
                  <Link to="/settingsnotifications" className='block py-2 px-4 hover:bg-gray-300'>
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link to="/settings/account-management" className='block py-2 px-4 hover:bg-gray-300'>
                    Account Management
                  </Link>
                </li>
                <li>
                  <Link to="/settings/connected-accounts" className='block py-2 px-4 hover:bg-gray-300'>
                    Connected Accounts
                  </Link>
                </li>
                <li>
                  <Link to="/security-settings" className='block py-2 px-4 hover:bg-gray-300'>
                    Security Settings
                  </Link>
                </li>
                <li>
                  <Link to="/deactivation-deletion" className='block py-2 px-4 hover:bg-gray-300'>
                    Deactivation and Deletion
                  </Link>
                </li>
                <li>
                  <Link to="/preferences" className='block py-2 px-4 hover:bg-gray-300'>
                    Preferences
                  </Link>
                </li>
                <li>
                  <Link to="/support-help" className='block py-2 px-4 hover:bg-gray-300'>
                    Contact Support & Help
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
    
          {/* Main Content */}
          <div className='flex-1 p-4'>
            <div className='mb-4 flex justify-end'>
              <FaXmark className='text-2xl cursor-pointer' />
            </div>
            <div>
              <Routes>
                <Route path="/personal-information" element={<PersonalInformation />} />
                <Route path="/account-security" element={<AccountSecurity />} />
                {/* Add routes for other settings pages here */}
              </Routes>
            </div>
          </div>
        </section>
      );
}

export default AccountSettings