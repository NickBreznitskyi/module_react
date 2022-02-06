import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IUser} from "../../interfaces";
import {userService} from "../../services";

interface IUserState {
    users: IUser[]
}

const initialState: IUserState = {
    users: []
}

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllThunk',
    async (_, {dispatch}) => {
        dispatch(setUsers({users: await userService.getAll()}))
    }
)

const userSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<{ users: IUser[] }>) => {
            state.users = action.payload.users
        }
    }
})

const userReducer = userSlice.reducer;

export default userReducer;
export const {setUsers} = userSlice.actions;