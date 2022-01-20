import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        isLogin:false,
        id:0,
        name:'',
        role:'',
        token:''
    },
    reducers:{
        loginUser:(state,action) => {
            state.isLogin = true,
            state.id = action.payload.id,
            state.name = action.payload.name,
            state.role = action.payload.role,
            state.token = action.payload.token
        },
        logoutUser:(state) => {
            state.isLogin = false,
            state.id = 0,
            state.name = '',
            state.role = '',
            state.token = ''
        }
    }
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer