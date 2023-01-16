import { createSlice } from "@reduxjs/toolkit";


// initialize userToken from local storage
// const userName = localStorage.getItem('name')
//   ? localStorage.getItem('name')
//   : null



export const loginstate = createSlice({
  name: "islogin",
  initialState: {
    value: false,
    // loginName:{}
  },
  reducers: {
    login: (state) => {
      state.value = true;
      // state.loginName=action.payload.userName;
    },
    logout: (state) => {
      state.value = false;
    },
  },
});
 

export const { login, logout } = loginstate.actions;
export default loginstate.reducer;
