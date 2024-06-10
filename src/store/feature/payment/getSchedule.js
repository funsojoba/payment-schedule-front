import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


import baseUrl from "../../baseUrl";

const token = localStorage.getItem("accessToken")

export const getSchedule = createAsyncThunk(
    "payment/scheduled_payments", async (thunkApi) => {
        try {
            const response = await axios.get(
                baseUrl + "payment/scheduled_payments",
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

const getScheduleSlice = createSlice({
    name: "getSchedule",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(getSchedule.pending, (state) => {
            state.loading = true
        })
        .addCase(getSchedule.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null

            console.log(action.payload)
        })
        .addCase(getSchedule.rejected, (state, action) => {
            state.loading = false
            state.error = action
        })
    }
})


export default getScheduleSlice
