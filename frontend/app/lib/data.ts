'use client'


import {client_id} from '@/github-key'
import queryString from 'query-string';

import { useRouter } from 'next/router';


export async function requestUserAuth(){
 console.log("Requesting User Authorization")
 
 const link = `https://github.com/login/oauth/authorize?client_id=${client_id}&response_type=code`;
 window.location.assign(link);

}


