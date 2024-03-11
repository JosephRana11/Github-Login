'use client'

import { useSearchParams } from "next/navigation";

import { sendAuthCode } from "../../lib/data";
import { useEffect } from "react";
import axios from "axios";
import { retrieveToken } from "../auth/callback/data";
import { useState } from "react";
import Card from "@/app/components/profile-card";
import { userInfo } from "os";
import LogoutBtn from "@/app/components/logout-button";
import MyComponent from "@/app/components/user-title";

export default function Page(){

  const [ data , updateData ] = useState({"username" : null , "name" : null, "avatar_url" : null , "following":null , "followers" : null , "public_repos" :null})

    useEffect(()=>{
     async function run(){
      const userData = await fetchUserData()
      console.log(userData)
      console.log(userData.status)

      updateData({
       username : userData['username'],
       name : userData['name'],
       avatar_url : userData['avatar_url'],
       following : userData['following'],
       followers : userData['followers'],
       public_repos : userData["public_repos"]
      })


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
      <div>
        <MyComponent />
        <Card  data={data} />
      </div>
      )
}