'use client'


import {client_id} from '@/github-key'
import queryString from 'query-string';

import { useRouter } from 'next/router';

import { useSearchParams } from 'next/navigation';


export async function sendAuthCode(code : string) {
    console.log(`Sending code to server : ${code}`)
}

