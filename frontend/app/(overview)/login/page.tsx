'use client'
import GithubButton from '@/app/components/github-button'
import { useEffect } from 'react';
import { retrieveToken } from '../auth/callback/data';

export default function page() {
  
  useEffect(()=>{

    async function checKCookie(){
      const token = await retrieveToken()
      if (token != undefined){
           window.location.replace('http://localhost:3000/user')
      }
    }
    checKCookie()
  }, [])


  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-40">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Login with GitHub to get Started!
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Built Using NextJS - TailWind - FastAPI - SQLAlchemy  
        </p>
        <GithubButton/>
      </div>
    </div>
  );
}
