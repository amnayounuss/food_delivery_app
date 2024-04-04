"use client"

import { useEffect, useState } from "react"
import GlobalApi from "../_utils/GlobalApi"




function CategoryList() {


  const[categoryList,setCategoryList]=useState([]);
  useEffect(() => {

    getCategoryList()
  }, [])

  // for getting category list
  const getCategoryList = () => {
    GlobalApi.GetCategory().then((res) => {
      console.log(res.categories);
      setCategoryList(res.categories);
    })


  }
  return (
    <div>
      <div>
        {categoryList&&categoryList.map((Category,index)=>{
          <div key={index}>
            <Image src={Category.icon?.url} alt={Category.name}
            width={40}
            height={40} ></Image>
          </div>
        })}
      </div>

    </div>
  )
}

export default CategoryList
