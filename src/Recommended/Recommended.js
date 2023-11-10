import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeData } from '../Redux/appSlice';

const Recommended = () => {
    const style="px-[10px] py-[5px] mr-[6px]  border-[0.5px] border-solid border-slate-300 rounded-md cursor-pointer";
    const oData=useSelector((store)=>store.appSlice.orginalData);
    const dispatch=useDispatch();
    const handleChange=()=>{

      const filterData=oData.filter((item)=>item.title.toString().toLowerCase().includes(""));
      
    }
  return (
    <div className='ml-[13rem]'>
        <h2 className='text-xl p-1'>Recommendation</h2>
        
            <button className={style} onClick={()=>{
      const filterData=oData.filter((item)=>item.title.toString().toLowerCase().includes(""));
      dispatch(changeData(filterData));
      
      
    }}>All Products</button>
            <button className={style} onClick={()=>{
               const filterData=oData.filter((item)=>item.title.toString().toLowerCase().includes("nike"));
               dispatch(changeData(filterData));
               

            }}>Nike</button>
            <button className={style} onClick={()=>{
               const filterData=oData.filter((item)=>item.title.toString().toLowerCase().includes("adidas"));
               dispatch(changeData(filterData));

            }}>Adidas</button>
            <button className={style} onClick={()=>{
               const filterData=oData.filter((item)=>item.title.toString().toLowerCase().includes("puma"));
               dispatch(changeData(filterData));
            }}>Puma </button>
            <button className={style} onClick={()=>{
               const filterData=oData.filter((item)=>item.title.toString().toLowerCase().includes("Vans"));
               dispatch(changeData(filterData));
            }}>Vans</button>
        
    </div>
  )
}

export default Recommended
