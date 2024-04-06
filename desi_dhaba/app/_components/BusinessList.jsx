"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../_utils/GlobalApi';
import BusinessItem from './BusinessItem';

function BusinessList() {
  const params = useSearchParams();
  const [category, setCategory] = useState('all');
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    if (params) {
      const categoryParam = params.get("category");
      categoryParam && setCategory(categoryParam);
      categoryParam && getBusinessList(categoryParam);
    }
  }, [params]);

  const getBusinessList = (category) => {
    GlobalApi.GetBusiness(category).then(resp => {
      console.log(resp);
      setBusinessList(resp?.restaurants || []);
    });
  }

  return (
    <div className='mt-5'>
      <h2 className='font-bold text-2xl '>Popular {category} Restaurants</h2>
      <h2 className='font-bold text-primary'>{businessList.length} Results</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3'>
        {businessList && businessList.map((restaurant, index) => (
          <BusinessItem key={index} business={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default BusinessList;
