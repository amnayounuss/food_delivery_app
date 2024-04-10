"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Intro from '../_components/Intro';
import RestroTabs from '../_components/RestroTabs';

function RestaurantDetails() {

  const param = usePathname(); //show current path name
  const [restaurant, setRestaurant] = useState([])
  useEffect(() => {
    GetRestaurantDetail(param.split("/")[2])
  }, [])
  const GetRestaurantDetail = (restroSlug) => {
    GlobalApi.GetBusinessDetail(restroSlug).then(resp => {
      console.log(resp)
      setRestaurant(resp.restaurant);
    })
  }


  return (
    <div>
<<<<<<< HEAD
    <Intro restaurant={restaurant}/>
    <RestroTabs restaurant={restaurant}/>
=======
      <Intro restaurant={restaurant} />
      <RestroTabs restaurant={restaurant} />
>>>>>>> be0aaf183b40ec329ea35f9d8df38fb66e438ec1
    </div>
  )
}

export default RestaurantDetails
