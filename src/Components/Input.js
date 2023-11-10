import { useDispatch, useSelector } from "react-redux";
import { changeData } from "../Redux/appSlice";

const Input = ({ value, title, name, color }) => {
  const dispatch=useDispatch();
  const odata=useSelector((store)=>store.appSlice.orginalData);
  const ndata=odata;


  const handleChange=(e)=>{
    let nvalue=e.target.value;
    console.log(nvalue);
    if(nvalue.toString()==="All"){
      nvalue=""
    }
    if(name=="test"){
      const filteredData = odata.filter((d) => d.category.toString().toLowerCase().includes(nvalue.toString().toLowerCase()));
    dispatch(changeData(filteredData));


    }
   if(name==="test1"){
    const filteredData = odata.filter((d) => d.color.toString().toLowerCase().includes(nvalue.toString().toLowerCase()));
    dispatch(changeData(filteredData));
  }
  if(name==="test2"){
    const upperLimit=parseInt(nvalue);
    const lowerLimit=upperLimit/2;
    console.log(upperLimit);
    console.log(lowerLimit);
    const filteredData=odata.filter((item)=>
    {
      const newPrice=parseInt(item.newPrice);
      return newPrice>=lowerLimit&&newPrice<=upperLimit;

    })
    dispatch(changeData(filteredData));

  }

  }
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;