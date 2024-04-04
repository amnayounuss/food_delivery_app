"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';

function BusinessList() {
    const params=useSearchParams();
    const [category,setCategory]=useState();

    useEffect(()=>{

        params&&setCategory(params.get("category"))
        params&&getBusinessList(params.get("category"))
    },[params]);
    

    const getBusinessList=(category_)=>{
      GlobalApi.GetBusiness(category_).then(resp=>{
        console.log(resp);
      })
    }
  return (
    <div>
      Business
    </div>
  )
}

export default BusinessList
