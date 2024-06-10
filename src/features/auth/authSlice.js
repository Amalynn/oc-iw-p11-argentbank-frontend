import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authActions';

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Login user
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userToken = payload.data.body.token;
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export default authSlice.reducer;
