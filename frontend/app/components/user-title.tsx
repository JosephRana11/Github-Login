import React from 'react';
import { deleteToken } from '../(overview)/auth/callback/data';

const MyComponent = () => {


  async function logoutUser(){
    await deleteToken()
    window.location.replace("http://localhost:3000/login")
  }

  return (
    <>
    <div className='flex items-center space-between justify-between px-10 py-5'>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">General Github Profile</h1>  
      <a onClick={logoutUser} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Logout  
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
    </>
  );
};

export default MyComponent;
