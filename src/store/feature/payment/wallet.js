import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


import baseUrl from "../../baseUrl";

const token = localStorage.getItem("accessToken")

export const getWallet = createAsyncThunk(
    "payment/wallet/", async (thunkApi) => {
        try {
            const response = await axios.get(
                baseUrl + "payment/wallet",
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

const getWalletSlice = createSlice({
    name: "getWallet",
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(getWallet.pending, (state) => {
            state.loading = true
        })
        .addCase(getWallet.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null

            console.log(action.payload)
        })
        .addCase(getWallet.rejected, (state, action) => {
            state.loading = false
            state.error = action
        })
    }
})


export default getWalletSlice
