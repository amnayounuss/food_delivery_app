import React from 'react';
import Image from 'next/image';

function Cart({ cart }) {
  return (
    <div>
      <h2 className='text-lg font-bold'>{cart[0]?.restaurant?.name}</h2>
      <div>
        <h2 className='font-bold'>My Order</h2>
        {cart && cart.map((item, index) => (
          <div key={index}>
            <Image
              src={item.productImage}
              alt={item.productName}
              width={40}
              height={40}
              className='h-[40px] w-[40px] rounded-lg object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
