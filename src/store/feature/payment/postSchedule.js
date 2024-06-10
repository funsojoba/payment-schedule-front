import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";


import baseUrl from "../../baseUrl";

const token = localStorage.getItem("accessToken")

export const postSchedule = createAsyncThunk(
    "payment/schedule_payment", async (data, thunkApi) => {
        try {
            const response = await axios.post(
                baseUrl + "payment/schedule_payment/", data,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data)
        }
    }
)

const postScheduleSlice = createSlice({
    name: "postSchedule",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(postSchedule.pending, (state) => {
            state.loading = true
        })
        .addCase(postSchedule.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null

            window.location.reload()
        })
        .addCase(postSchedule.rejected, (state, action) => {
            state.loading = false
            state.error = action

            console.log("ERROR: ", action.payload)

            if (action.payload) {
                if (typeof action.payload === 'object') {
                  for (const key in action.payload) {
                    if (Array.isArray(action.payload[key])) {
                      action.payload[key].forEach((message) => toast.error(message));
                    } else if (typeof action.payload[key] === 'string') {
                      toast.error(action.payload[key]);
                    }
                  }
                } else {
                  toast.error("An unknown error occurred");
                }
              } else {
                toast.error("An unknown error occurred");
              }
        })
    }
})


export default postScheduleSlice
