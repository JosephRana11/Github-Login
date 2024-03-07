'use client'

import { useEffect } from "react";
import { useParams } from "next/navigation";
import queryString from "query-string";
import { useSearchParams } from "next/navigation";

export default function Page(){

    const router = useSearchParams()
    console.log(router.get('code'))


    return (
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mb-40">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Home Page
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Built Using NextJS - TailWind and FastAPI
            </p>
          </div>
        </div>
      );
}