//Integration par
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    errorDispatch: null,
    loading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.errorDispatch = null
        },
        signInFailure: (state, action) => {
            state.errorDispatch = action.payload
            state.loading = false
        }
    }
})

export const {signInFailure, signInStart, signInSuccess} = userSlice.actions

export default userSlice.reducer