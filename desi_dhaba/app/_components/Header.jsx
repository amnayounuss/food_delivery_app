"use client"
import { UserButton, SignInButton, SignUpButton, useUser } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Button from '@/components/ui/button'; // Adjust the import path as per your project structure

function Header() {
  const { user, isSignedIn } = useUser();
    
  return (
    <div className='flex justify-between items-center p-6 md:px-20 shadow-sm '>
        <Image src="/logo.png" alt='logo' required width={100} height={100}/>

        <div className='flex border p-2 rounded-lg bg-gray-200 w-96 h-10'>
            <input type="text" className='bg-transparent w-full outline-none'/>
            <Search/>
            
        </div>

        {isSignedIn ?
            <UserButton /> :
            <div className='flex gap-5'>
                <SignInButton mode='modal'>
                    <Button>Login</Button>
                </SignInButton>
                <SignUpButton mode='modal'>
                    <Button variant="outline">Sign Up</Button>
                </SignUpButton>
            </div>
        }
    </div>
  )
}

export default Header