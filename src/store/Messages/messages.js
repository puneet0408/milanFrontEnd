import { createSlice,current } from '@reduxjs/toolkit'
import socket from '../socket/socket';
export const messagesSlice = createSlice
({
    name:'messages',
    initialState:
    {
        value: []
    },
    reducers:
    {
        clear_messages: (state)=> 
        {
            state.value=[];
        },
        insert_new_messages: (state,action) => 
        {
            let arr =action.payload;
            state.value=arr;
        },
        add_new_message: (state,action) => 
        {
            let msg = action.payload;
            console.log(current(state.value[state.value.length-1]));
            console.log(msg);
            if(msg===current(state.value[state.value.length-1]))
            {
                //Do Nothing
                console.log("Do Nothing..");
            }
            else
            {
                state.value=[...state.value,msg];
            }
            // state.value=[...state.value,msg];
        }
    }
});

export const {clear_messages,insert_new_messages,add_new_message} = messagesSlice.actions;
export default messagesSlice.reducer