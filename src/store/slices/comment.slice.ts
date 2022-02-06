import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IComment} from "../../interfaces";
import {commentService} from "../../services";

const nameSlice: string = 'commentSlice';

interface ICommentState {
    comments: IComment[]
}

const initialState: ICommentState = {
    comments: []
}

export const getAllComments = createAsyncThunk(
    nameSlice + '/getAllComments',
    async (_, {dispatch}) => {
        dispatch(getAll({comments: await commentService.getAll()}))
    }
)

const commentSlice = createSlice({
    name: nameSlice,
    initialState,
    reducers: {
        getAll: (state, action: PayloadAction<{ comments: IComment[] }>) => {
            state.comments = action.payload.comments;
        }
    }
})

const commentReducer = commentSlice.reducer;

export default commentReducer;
export const {getAll} = commentSlice.actions;