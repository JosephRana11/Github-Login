'use client'

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    function redirectLogin(){
      window.location.replace("http://localhost:3000/login")
    }
    redirectLogin()
  } ,[])

  return (
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl p-6 center ">
    <span className="block">
        Redirecting your
        <span className="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
            Request
        </span>
    </span>
</h1>
  );
}
