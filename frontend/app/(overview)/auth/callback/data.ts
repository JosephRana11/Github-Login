'use server'

import {cookies} from 'next/headers'


export async function setTokenCookie(token:string){
    if (cookies().has('token')){
        cookies().delete('token')
    }
    cookies().set('token',token)
}