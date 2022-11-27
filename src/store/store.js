import { configureStore } from '@reduxjs/toolkit'
import loginreducer from "../store/login/login"
export default configureStore({
    reducer: 
    {
        login:loginreducer
    },
  })