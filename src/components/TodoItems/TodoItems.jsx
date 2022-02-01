import React from 'react';
import {useSelector} from "react-redux";

import {TodoItem} from "../TodoItem/TodoItem";
import './TodoItems.css'

const TodoItems = () => {
    const {todoItems} = useSelector(state => state['todoReducer']);
    return (
        <div>
            <hr/>
            <div className={'todoItems'}>
                {
                    todoItems.map(value =>
                        <TodoItem key={value.id} {...value}/>)
                }
            </div>
        </div>
    );
};

export {TodoItems};