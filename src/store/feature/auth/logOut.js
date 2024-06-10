import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


import baseUrl from "../../baseUrl";

export const logOut = createAsyncThunk(
    "users/logOut/", async (thunkApi) => {
        try {
            const response = await axios.post(
                baseUrl + "auth/log_out/",
            )
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data)
        }
    }
)

const logOutSlice = createSlice({
    name: "logOut",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(logOut.pending, (state) => {
            state.loading = true
        })
        .addCase(logOut.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
            window.location.href = "/"

        })
        .addCase(logOut.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})


export default logOutSlice
