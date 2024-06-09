import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    isLoggedIn: false,
    userInfo: {},
    userToken: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

export default authSlice.reducer;
