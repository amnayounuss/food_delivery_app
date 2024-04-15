"use client"
import { CartUpdateContext } from '@/app/_context/CartUpdateContext';
import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { useSearchParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner';


function Checkout() {
  const params = useSearchParams();
  const { user } = useUser();
  const { updateCart, setUpdateCart } = useContext(CartUpdateContext);
  const [cart, setCart] = useState([]);
  const [deliveryAmount, setDeliveryAmount] = useState(5);
  const [subtotal, setSubTotal] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    user && GetUserCart();
  }, [user, updateCart]);

  const GetUserCart = () => {
    GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress)
      .then((resp) => {
        console.log(resp);
        setCart(resp?.userCarts);
        calculateTotalAmount(resp?.userCarts);
      })
      .catch((error) => {
        console.error('Error fetching user cart:', error);
      });
  };

  const calculateTotalAmount = (cart_) => {
    let total = 0;
    let sum = 0;
    cart_.forEach((item) => {
      total += parseFloat(item.price);
    });
    setSubTotal(total.toFixed(2));
    setTaxAmount(total * 0.09);
    sum = (total + total * 0.09 + deliveryAmount).toFixed(2);
    setTotal(sum);
  };

  const addToOrder = () => {
    setLoading(true);
    const data = {
      email: user.primaryEmailAddress.emailAddress,
      orderAmount: total,
      restaurantName: params.get('restaurant'),
      userName: name,
      phone: phone,
      address: address,
      zipCode: zip,
    };
    GlobalApi.CreateNewOrder(data)
      .then((resp) => {
        const resultID = resp?.createOrder?.id;
        if (resultID) {
          Promise.all(
            cart.map((item) =>
              GlobalApi.UpdateOrderToAddOrderItems(
                item.productName,
                user?.primaryEmailAddress.emailAddress,
                item.price,
                resultID
              )
            )
          )
            .then((results) => {
              console.log(results);
              toast('Order Created Successfully!!!');
              setUpdateCart(!updateCart);
            })
            .catch((error) => {
              console.error('Error updating order with order items:', error);
              toast.error('Error creating order. Please try again later.');
            })
            .finally(() => {
              setLoading(false);
            });
        }
      })
      .catch((error) => {
        console.error('Error creating order:', error);
        toast.error('Error creating order. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <h2 className='font-bold text-2xl my-5'>Checkout</h2>
        <div className='p-5 px-5 md:px-10'>
          <h2 className='font-bold text-3xl'>Billing Details</h2>
          <div className='grid grid-cols-2 gap-10 mt-3'>
            <Input
              placeholder='Name'
              className='border col-span-1'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder='Phone'
              className='border col-span-1'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='grid grid-cols-2 gap-10 mt-3'>
            <Input
              placeholder='Zip'
              className='border col-span-1'
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <Input
              placeholder='Address'
              className='border col-span-1'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='w-full md:w-[30%] border ml-0 md:ml-80 mt-5 md:mt-20'>
        <h2 className='p-3 bg-gray-200 font-bold text-center'>Total Cart ({cart?.length})</h2>
        <div className='p-4 flex flex-col gap-4'>
          <h2 className='font-bold flex justify-between'>
            Subtotal
            <span> ${subtotal} </span>
          </h2>
          <h2 className='flex justify-between'>
            Delivery:
            <span>${deliveryAmount}</span>
          </h2>
          <h2 className='flex justify-between'>
            Tax (9%):
            <span>${taxAmount.toFixed(2)}</span>
          </h2>
          <hr className='w-full' />
          <h2 className='font-bold flex justify-between'>
            Total:
            <span>${total}</span>
          </h2>
          <Button onClick={() => addToOrder()}>
            {loading ? <Loader className='animate-spin' /> : 'Make Payment'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;