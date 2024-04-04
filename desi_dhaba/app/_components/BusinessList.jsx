"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';

function BusinessList() {
    const params=useSearchParams();
    const [category,setCategory]=useState();
    const [businessList,setBusinessList]=useState([]);

    useEffect(()=>{

        params&&setCategory(params.get("category"))
        params&&getBusinessList(params.get("category"))
    },[params]);
    

    const getBusinessList=(category_)=>{
      GlobalApi.GetBusiness(category_).then(resp=>{
        setBusinessList(resp?.restaurant)
      })
    }
  return (
    <div>
      <h2>Popular {category} Restaurants</h2>
    </div>
  )
}

export default BusinessList
