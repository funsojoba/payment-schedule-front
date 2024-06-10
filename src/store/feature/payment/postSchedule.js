import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


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
        })
    }
})


export default postScheduleSlice
