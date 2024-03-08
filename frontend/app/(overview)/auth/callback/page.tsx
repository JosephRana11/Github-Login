'use client'


import axios from "axios";
import { useSearchParams } from "next/navigation";

export default async function Home() {
  
   const searchUrl = useSearchParams()
   const code = searchUrl.get('code')
   console.log(code)
   
   if (code != null){
     const data = await callTokenApi(code)
     console.log(data)
   }
   
   async function callTokenApi(code : string) {
    axios.post('http://127.0.0.1:8000/api/token' , {
      'code' : code
    }).then(
      response => {
        console.log(response)
      }
    )
   }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          You are being Redirected.Please wait a moment&nbsp;
        </p>
        </div>
    </main>
  );
}
