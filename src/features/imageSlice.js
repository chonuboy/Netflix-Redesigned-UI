import { createSlice } from "@reduxjs/toolkit";
import userimg from "../assets/user.png"
const initialState = {
    image : userimg
}


export const imageSlice=createSlice({
    name:'image',
    initialState,
    reducers : {
        changeImg : (state,action)=>{
            state.image = action.payload;
        },
    }
})

export const {changeImg} = imageSlice.actions;

export const selectImage = (state) => state.image.image;

console.log(selectImage);

export default imageSlice.reducer;