import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {todoActions} from "../../store";
import './Form.css'
import {formValidator} from "../../validators/form.validator";

const Form = () => {

    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(formValidator),
        mode: 'onSubmit'
    });
    const {todoItems, todoItemsDoneList} = useSelector(state => state['todoReducer']);
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(todoActions.addTodo({data}));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={'form'}>
            <h2>All: {todoItems.length} Completed: {todoItemsDoneList.length}</h2>
            <div>
                <label>
                    <input type="text" {...register('todo')} placeholder={'todo'}/>
                </label>
                <button>Save</button>
            </div>
            {errors.todo && <div className={'error'}>{errors.todo.message}</div>}
        </form>
    );
};

export {Form};