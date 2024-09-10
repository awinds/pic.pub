'use client';
import { signOut } from "next-auth/react"

export default function SignOutButton(){
    return <button onClick={() => signOut()}>
        退&nbsp;&nbsp;&nbsp;&nbsp;出
    </button>
}