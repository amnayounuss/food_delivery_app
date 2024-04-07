import React from 'react'

const MenuSection = ({restaurant}) => {
  return (
    <div>
      <div className='grid grid-cols-4 mt-2'>
        <div className='hidden md:flex'>
            Category
        </div>
        <div className='col-span-3'>
            Menu List
        </div>
      </div>
    </div>
  )
}

export default MenuSection
