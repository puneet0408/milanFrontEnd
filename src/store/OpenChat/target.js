import { createSlice } from '@reduxjs/toolkit'
import { socketSlice } from '../socket/socket';
let initialState = 
{
    id:"0",
    chatid:"0"
}
export const targetSlice = createSlice(
{
    name:'target',
    initialState,
    reducers:
    {
        clearTarget: (state) => 
        {
            let obj = {
                id:"0",
                chatid:"0"
            }
            state.value=obj;
        },
        setTarget: (state,action) => 
        {
            console.log(action.payload);
            console.log("hlo")
            state.value=action.payload;
        }
    }
});

export const {setTarget,clearTarget} = targetSlice.actions
export default targetSlice.reducer