import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {todoActions} from "../../store";
import './TodoItem.css';

const TodoItem = ({id, todo}) => {

    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(todoActions.deleteTodo({id}));
        dispatch(todoActions.deleteDoneTodo({id}));
    }

    const complete = (e) => {
        if (e.target.checked) {
            dispatch(todoActions.addDoneTodo({id, data: todo}));
            setIsChecked(true);
        } else {
            dispatch(todoActions.deleteDoneTodo({id}));
            setIsChecked(false);
        }
    }

    return (
        <div className={'todoItem'}>
            <input onClick={(e) => complete(e, id, todo)} type="checkbox" id={'check'}/>
            <div className={isChecked ? 'checkedToDo' : null}>{todo}</div>
            <button onClick={() => deleteItem()}>Delete</button>
        </div>
    );
};

export {TodoItem};