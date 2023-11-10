import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import Category from './Category/Category'
import Price from "./Price/Price"
import Color from './Color/Color'
const SideBar = () => {
  return (
    <div className=' w-[15%] fixed h-[100%] flex flex-col z-[3] border-r-2 border-solid border-#e5e5e5-300 items-center overflow-scroll'>
        <div className='mb-[10px] mt-6'>
            <h1><AiOutlineShoppingCart size={30} /></h1>
            
        </div>
        <Category/>
        <Price/>
        <Color/>
    </div> 
  )
}

export default SideBar
