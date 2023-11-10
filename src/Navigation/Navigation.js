import React,{useState} from 'react'
import {BsCart} from "react-icons/bs"
import {CgProfile, CgSidebar} from "react-icons/cg";
import SideBar from '../SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { changeData } from '../Redux/appSlice';

const Navigation = () => {
  const [text,setText]=useState("");
  const dispatch=useDispatch();
  const odata=useSelector((store)=>store.appSlice.orginalData);
  const tdata=odata.filter((d)=>d.title.toString().toLowerCase().includes(text.toString().toLowerCase()));
  dispatch(changeData(tdata));
  const handleChange=(e)=>{
    setText(e.target.value);

  }
  return (
    <div className='flex justify-around items-center ml-[10rem] my-2'>
        {/* <div className='col-span-4'>
            <SideBar/>
        </div> */}
      <div className='col-span-8'>
        <input type="text" name="" id="" value={text} placeholder='Search your Fav Shoes' className='w-[600px] p-2 m-2 border border-black-900 rounded-lg' onChange={handleChange}/>

      </div>
      <div className='col-span-4 flex'>
        <div className='p-2'><BsCart size={20}/></div>
        <div className='p-2'><CgProfile size={20}/></div>
        
      </div>
    </div>
  )
}

export default Navigation
