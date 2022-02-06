import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IPost} from "../../interfaces";
import {postService} from "../../services";

interface IPostState {
    posts: IPost[]
}

const initialState: IPostState = {
    posts: []
}

export const getAllPost = createAsyncThunk(
    'postSlice/setPostThunk',
    async (_, {dispatch}) => {
        dispatch(getAll({posts: await postService.getAll()}))
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        getAll: (state, action: PayloadAction<{ posts: IPost[] }>) => {
            state.posts = action.payload.posts;
        }
    }
})

const postReducer = postSlice.reducer;

export default postReducer;
export const {getAll} = postSlice.actions;