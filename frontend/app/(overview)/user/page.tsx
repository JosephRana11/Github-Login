'use client'

import { useSearchParams } from "next/navigation";

import { sendAuthCode } from "../../lib/data";
import { useEffect } from "react";
import axios from "axios";
import { retrieveToken } from "../auth/callback/data";

export default function Page(){

    useEffect(()=>{
     async function run(){
      const userData = await fetchUserData()
      console.log(userData)
      console.log(userData.status)
     }

     run()

    }, [])

    async function fetchUserData(){
      try {
        const cookie_token = await retrieveToken()
        const token = cookie_token?.value
        const response = await axios.post('http://127.0.0.1:8000/api/user' ,{ token })
        return response.data
      } catch(error) {
        console.log(error)
      }
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mb-40">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              User Profile Page
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              You are now Sucessfully Logged in!
            </p>
          </div>
        </div>
      );
}