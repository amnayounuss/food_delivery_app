import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import { Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { CartUpdateContext } from '../_context/CartUpdateContext';
import GlobalApi from '../_utils/GlobalApi';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Cart from './Cart';


function Header() {

    const { user, isSignedIn } = useUser();
    const { updateCart,setUpdateCart } = useContext(CartUpdateContext);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log("Execute Me!");
        user && GetUserCart(); // Ensure both user and updateCart are truthy
    }, [updateCart, user]); // Corrected dependency array syntax

    const GetUserCart = () => {
        GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then((resp) => {
            console.log(resp);
            setCart(resp?.userCarts);
        });
    }; 

    return (
        <div className='flex justify-between items-center p-6 md:px-20 shadow-sm'>
            <Image src="/logo.png" alt='logo' required width={200} height={100} className='-ml-20' />
            <div className='flex border p-2 rounded-lg bg-gray-200 w-96 h-10'>
                <input type="text" className='bg-transparent w-full outline-none' />
                <Search />
            </div>
            {isSignedIn ? (
                <div className='flex gap-x-2 items-center'>

                    <Popover>
                        <PopoverTrigger asChild>                    
                        <div className='flex gap-x-2 items-center cursor-pointer'>
                            <ShoppingCart />
                            <label className='p-1 px-3 rounded-full bg-slate-200'>
                                {cart?.length}
                            </label>
                        </div>
                        </PopoverTrigger>
                        <PopoverContent className='w-full'>
                            <Cart cart={cart} />
                        </PopoverContent>
                    </Popover>

                    <UserButton />
                </div>
            ) : (
                <div className='flex gap-5'>
                    <SignInButton mode='modal'>
                        <Button>Login</Button>
                    </SignInButton>
                    <SignUpButton mode='modal'>
                        <Button variant="outline">Sign Up</Button>
                    </SignUpButton>
                </div>
            )}
        </div>
    );
}

export default Header;
