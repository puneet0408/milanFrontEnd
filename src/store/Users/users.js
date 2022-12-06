import { createSlice } from "@reduxjs/toolkit";
export const usersSlice = createSlice
({
    name:'users',
    initialState:[],
    reducers:
    {
        set_contacts: (state,action) => 
        {
            let arr=action.payload;
            console.log(arr);
            //This is Not Working Some Debuing Reqired
            // state.value=arr;
        },
        clear_contacts: (state) => 
        {
            state.value=[]
        }
    }
});

export const {set_contacts,clear_contacts} = usersSlice.actions
export default usersSlice.reducer