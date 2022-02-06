import {configureStore, combineReducers} from "@reduxjs/toolkit";

import carReducer from "./slices/car.slice";
import postReducer from "./slices/post.slice";
import userReducer from "./slices/user.slice";
import commentReducer from "./slices/comment.slice";


const rootReducer = combineReducers({
    carReducer,
    userReducer,
    postReducer,
    commentReducer
})
export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']