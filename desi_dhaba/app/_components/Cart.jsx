import React from 'react';
import Image from 'next/image';
import { X } from "lucide-react";
import { Button } from '@/components/ui/button';
import GlobalApi from '../_utils/GlobalApi';
import { toast } from '@/components/ui/use-toast';


function Cart({ cart }) {
  const calculateCartAmount =()=>{
    let total = 0;
    cart.forEach((item) => {
      // total =total+item.price;
      total += parseFloat(item.price);
    })
    return total.toFixed(2);
  }

  const RemoveItemFromCart=(id)=>{
    GlobalApi.DisconnectRestroFromUserCartItem(id).then(resp=>{
      console.log(resp);
      if(resp)
      {
        GlobalApi.DeleteItemFromCart(id).then(resp=>{
          console.log(resp);
          toast('Item Removed!')
        })
      }
    })
  }


  return (
    <div>
      <h2 className='text-lg font-bold'>{cart[0]?.restaurant?.name}</h2>
      <div>
        <h2 className='font-bold'>My Order</h2>
        {cart && cart.map((item, index) => (
          <div key={index} className='flex justify-between gap-8 items-center'>
            <div className='flex gap-2 items-center mt-3'>
            <Image
              src={item.productImage}
              alt={item.productName}
              width={40}
              height={40}
              className='h-[40px] w-[40px] rounded-lg object-cover'
            />
            <h2>{item.productName}</h2>
            </div>
            <h2 className='font-bold mt-3 flex gap-2'>${item.price}
            <X className='h-4 w-4 text-red-500'
            onClick={()=>RemoveItemFromCart(item.id)} />
            </h2>
          </div>
        ))}
        <Button className='w-full mt-4'> ${calculateCartAmount()} Checkout  Now</Button>
      </div>
    </div>
  );
}

export default Cart;
