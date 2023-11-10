import React from 'react'
import Product from './Product'
import data from '../db/data'
import { useSelector } from 'react-redux'
const Products = () => {
  const tData=useSelector((store)=>store.appSlice.tempData);
  return (
    <div className=' ml-[13rem] flex flex-wrap'>
      {
       tData.map((d)=><Product data={d}/>)
}
    </div>
  )
}

export default Products
