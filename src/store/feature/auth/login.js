import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


import baseUrl from "../../baseUrl";

export const logIn = createAsyncThunk(
    "users/login/", async (data, thunkApi) => {
        try {
            const response = await axios.post(
                baseUrl + "auth/log_in/", data
            )
            return response.data
        } catch (error) {
            console.log("LOGIN ERROR: ",)
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

            if (action.payload) {
                for (const key in action.payload) {
                  if (Array.isArray(action.payload[key])) {
                    action.payload[key].forEach((message) => toast.error(key + " : " + message));
                  }
                }
              } else {
                toast.error("An unknown error occurred");
              }
        })
    }
})


export default logInSlice
