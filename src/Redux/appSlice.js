import {createSlice} from "@reduxjs/toolkit"
import data from "../db/data"
const appSlice=createSlice({
    name:"appSlice",
    initialState:{
        orginalData:data,
        tempData:data
    },
    reducers:{
        changeData:(state,action)=>{
            state.tempData=action.payload;
        }
    }
});

export default appSlice.reducer;
export const{changeData}=appSlice.actions;