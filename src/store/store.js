import { configureStore } from '@reduxjs/toolkit'
import loginreducer from "../store/login/login"
import socketreducer from "../store/socket/socket"
import messagesreducer from "../store/Messages/messages"
import usersreducers from "../store/Users/users"
import targetreduceres from "../store/OpenChat/target"
export default configureStore({
    reducer: 
    {
        login:loginreducer,
        socket:socketreducer,
        messages:messagesreducer,
        users:usersreducers,
        target:targetreduceres
    },
  })