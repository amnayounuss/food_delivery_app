"use client"
import { CartUpdateContext } from '@/app/_context/CartUpdateContext';
import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

function Checkout() {
  const params = useSearchParams();
  const {user}=useUser();
  const [cart, setCart] = useState([]);
  const { updateCart, setUpdateCart } = useContext(CartUpdateContext);
  const [Subtotal,setSubTotal]=useState(0);
  useEffect(() => {
    console.log(params.get('restaurant'));
    user&&GetUserCart();
  }, [user||updateCart]);
  const GetUserCart = () => {
    GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then((resp) => {
      console.log(resp);
      setCart(resp?.userCarts);
      calculateTotalAmount(resp?.userCarts);
    });
  }; 

  const calculateTotalAmount=(cart_)=>{
    let total=0;
    cart_.forEach((item)=>{
      // total=total+item.price;
      total += parseFloat(item.price);

    })
    setSubTotal(total);
  }
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <h2 className='font-bold text-2xl my-5'>Checkout</h2>
        <div className='p-5 px-5 md:px-10'>
          <h2 className='font-bold text-3xl'>Billing Details</h2>
          <div className='grid grid-cols-2 gap-10 mt-3'>
            <Input placeholder='Name' className='border col-span-1' onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder='Email' className='border col-span-1' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='grid grid-cols-2 gap-10 mt-3'>
            <Input placeholder='Phone' className='border col-span-1' onChange={(e) => setPhone(e.target.value)} />
            <Input placeholder='Zip' className='border col-span-1' onChange={(e) => setZip(e.target.value)} />
          </div>
          <div className='mt-3'>
            <Input placeholder='Address' className='border' onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>
      </div>
      <div className='w-full md:w-[30%] border ml-0 md:ml-80 mt-5 md:mt-20'>
        <h2 className='p-3 bg-gray-200 font-bold text-center'>Total Cart ({cart?.length})</h2>
        <div className='p-4 flex flex-col gap-4'>
          <h2 className='font-bold flex justify-between '>
            Subtotal
            
            <hr className='w-1/2' />
            <span>{Subtotal} $</span>
          </h2>
          <h2 className='flex justify-between'>
            Delivery:
            <span>--</span>
          </h2>
          <h2 className='flex justify-between'>
            Tax (9%):
            <span>--</span>
          </h2>
          <hr className='w-full' />
          <h2 className='font-bold flex justify-between '>
            Total:
            <span>--</span>
            {/* <Button onClick={() => onApprove({ paymentId: 123 })}>Pay</Button> */}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Checkout
