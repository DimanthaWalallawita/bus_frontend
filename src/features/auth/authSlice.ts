import { createAsyncThunk ,createSlice, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
    id: number;
    fullName: string;
    nic: string;
    email: string;
    phone: string;
    active: boolean;
}

interface RegisterData {
    fullName: string;
    nic: string;
    email: string;
    phone: string;
    password: string;
    active: boolean;
}

interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
}

export const registerUser = createAsyncThunk<
    User,
    RegisterData,
    { rejectValue: string }
    >(
        "auth/register",
        async (userData, { rejectWithValue }) => {
            try {
                const response = await axios.post(
                    "http://localhost:8080/api/v1/user/save",
                    userData
                );

                return response.data;
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    return rejectWithValue(error.response.data.message || "Registration failed");
                }

                return rejectWithValue("An unknown error occurred");
            }
        }
    )

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Registration failed";
        });
    },
});


export default authSlice.reducer;

