import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


import baseUrl from "../../baseUrl";

export const signUp = createAsyncThunk(
    "users/signup/", async (data, thunkApi) => {
        try {
            const response = await axios.post(
                baseUrl + "auth/sign_up/", data
            )
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data)
        }
    }
)

const signUpSlice = createSlice({
    name: "signUp",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(signUp.pending, (state) => {
            state.loading = true
        })
        .addCase(signUp.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
            toast.success("Sign up successful")
            window.location.href = "/"

        })
        .addCase(signUp.rejected, (state, action) => {
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


export default signUpSlice
