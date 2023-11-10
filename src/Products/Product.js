import React from 'react'
import {AiFillStar} from "react-icons/ai"


const Product = ({data}) => {
  console.log(data);
   const {img,title,prevPrice,newPrice,company,color}=data;
  return (
    <div className='w-[238px] shadow-md rounded m-2 p-2'>
        <img className="w-[190px] rounded-md p-2"src={img} alt="" />
        <h3>{title}</h3>
        <h4 className='flex items-center'><AiFillStar/><AiFillStar/> <AiFillStar/><AiFillStar/> 4</h4>
        <del>₹{prevPrice}</del> ₹{newPrice}
        <h4>{company}</h4>
        <h5>{color}</h5>
      
    </div>
  )
}

export default Product
