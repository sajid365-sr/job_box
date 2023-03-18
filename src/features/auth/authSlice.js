
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    role: "",
    isLoading: true,
    isError: false,
    error: "",
};


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
});


export default authSlice.reducer;