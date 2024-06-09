import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


import baseUrl from "../../baseUrl";

export const logIn = createAsyncThunk(
    "users/register/", async (data, thunkApi) => {
        try {
            const response = await axios.post(
                baseUrl + "auth/log_in/", data
            )
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data)
        }
    }
)

const logInSlice = createSlice({
    name: "logIn",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(logIn.pending, (state) => {
            state.loading = true
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null

            console.log(action.payload)

            localStorage.setItem("accessToken", action.payload.token.access)
            window.location.href = "/dashboard"

        })
        .addCase(logIn.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})


export default logInSlice
