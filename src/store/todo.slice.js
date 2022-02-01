import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoItems: [],
    todoItemsDoneList: []
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoItems.push({id: new Date().getTime(), ...action.payload.data});
        },
        deleteTodo: (state, action) => {
            state.todoItems = state.todoItems.filter(value => value.id !== action.payload.id)
        },
        addDoneTodo: (state, action) => {
            state.todoItemsDoneList.push({id: action.payload.id, ...action.payload.data})
        },
        deleteDoneTodo: (state, action) => {
            state.todoItemsDoneList = state.todoItemsDoneList.filter(value => value.id !== action.payload.id)
        }
    }
})

const todoReducer = todoSlice.reducer;
const {addTodo, deleteTodo, addDoneTodo, deleteDoneTodo} = todoSlice.actions;

export default todoReducer;
export const todoActions = {
    addTodo,
    deleteTodo,
    addDoneTodo,
    deleteDoneTodo
}