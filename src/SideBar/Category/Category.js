import React,{useState} from 'react'
import "../Category/Category.css"
import Input from '../../Components/Input'
import { useDispatch,useSelector } from 'react-redux'
import { changeData } from '../../Redux/appSlice'


const Category = () => {
  const dispatch=useDispatch();
  const odata=useSelector((store)=>store.appSlice.orginalData);
 
  const handleChange=(e)=>{
    const nvalue=e.target.value;
    if(nvalue.toString()==="All"){
      dispatch(changeData(odata));
    }
    const filteredData = odata.filter((d) => d.category.toString().toLowerCase().includes(nvalue.toString().toLowerCase()));
  

  }
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div className='flex flex-col'>
      
        <Input
         
          value="All"
          title="All"
          name="test"
        />
        <Input
         
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
         
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
         
          value="heels"
          title="Heels"
          name="test"
        />
        </div>
      </div>
    
  )
}

export default Category
