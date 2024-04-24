import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function BusinessItem({ business }) {
  const calculateRating = () => {
    let total = 0;
    let count = 0;  
    business?.review.forEach(item => {
      total = total + item.star;
      count++;
    });
    const result = count > 0 ? total / count : 0; // Avoid division by zero
    return result?result.toFixed(1):5;
  };

  return (
    <>
      <Link
        href={`/restaurants/${business?.slug}`}
        className='p-3 hover:border rounded-xl hover:border-primary transition-all hover:bg-orange-300 cursor-pointer'
      >
        <Image
          src={business.banner?.url}
          alt={business.name}
          width={500}
          height={130}
          className='h-[130px] rounded-xl object-cover'
        />
        <div className='mt-2'>
          <h2 className='font-bold text-lg'>{business.name}</h2>
          <div>
            <div className='flex gap-2 items-center'>
              <Image src="/star.png" alt='star' width={14} height={14} />
              <label className='text-gray-400 text-sm'>{calculateRating()}</label>
              <h2 className='text-gray-400 text-sm'>{business?.restoType[0]}</h2>
            </div>
            <h2>{business.categories?.[0]?.name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BusinessItem;
