import { Button } from '@/components/ui/button'
import React from 'react'

const MenuSection = ({restaurant}) => {
    const FilterMenu= ({category})=>{
        const result = restaurant?.menu?.filter((item)=>item.category==category)
        console.log(result)
    }
  return (
      <div className='grid grid-cols-4 mt-2'>
        <div className='hidden md:flex flex-col mr-10 g-2'>
            {restaurant?.menu?.map((item,index)=>(
                <Button 
                className="flex justify-start"
                onClick={()=>FilterMenu(item.category)}
                variant="ghost" 
                key={index}>{item.category}</Button>
            ))}
        </div>
        <div className='col-span-3'>
            Menu List
        </div>
      </div>
  )
}

export default MenuSection
