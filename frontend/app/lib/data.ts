'use client'


import {client_id} from '@/github-key'
import queryString from 'query-string';

import { useRouter } from 'next/router';

import { useSearchParams } from 'next/navigation';

export async function requestUserAuth(){
 console.log("Requesting User Authorization")
 
 const link = `https://github.com/login/oauth/authorize?client_id=${client_id}&response_type=code`;
 window.location.assign(link);

}

export async function sendAuthCode(code : string) {
    console.log(`Sending code to server : ${code}`)
}

