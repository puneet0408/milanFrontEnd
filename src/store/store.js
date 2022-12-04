import { configureStore } from '@reduxjs/toolkit'
import loginreducer from "../store/login/login"
import socketreducer from "../store/socket/socket"
export default configureStore({
    reducer: 
    {
        login:loginreducer,
        socket:socketreducer,
    },
  })