import { createAsyncThunk } from '@reduxjs/toolkit';

//const baseURL = 'localhost:3001/api/v1';

export const loginUser = createAsyncThunk(
    'auth/login',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await fetch('localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Connexion failed');
            }
            const data = await response.json();
            localStorage.setItem('userToken', data.token);
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    },
);
