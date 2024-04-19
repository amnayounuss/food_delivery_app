"use client"
import { UserButton, UserProfile } from '@clerk/nextjs'
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import MyOrders from './_components/MyOrders'

function user() {
    return (
        <div className='flex justify-center'>
            <UserProfile>
                <UserButton.UserProfilePage
                    label="My Orders"
                    labelIcon={<ShoppingBag className='h-5 w-5' />}
                    url="my-orders"
                >
                    <MyOrders/>
                </UserButton.UserProfilePage>

                {/* LOGOUT */}
                {/* <UserButton.UserProfilePage
                    label="Logout"
                    labelIcon={<ShoppingBag className='h-5 w-5' />}
                    url="logout"
                >
                    <div>
                        <h1>Custom Terms Page</h1>
                        <p>This is the custom terms page</p>
                    </div>
                </UserButton.UserProfilePage> */}
            </UserProfile>
        </div>
    )
}

export default user
