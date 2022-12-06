import { createSlice } from '@reduxjs/toolkit'
export const socketSlice = createSlice({
    name: 'socket',
    initialState:
    {
        value: null
    },
    reducers:
    {
        make_connection: (state,action)=> 
        {
            state.value=action.payload;
        },
        close_connecton: (state)=> 
        {
            state.value={};
        }
    }
});

export const {make_connection,close_connecton} = socketSlice.actions 
export default socketSlice.reducer