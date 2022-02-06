import React, {FC, FormEvent} from 'react';

import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addCarThunk, getFormData} from "../../store";
import './Form.css'

const Form: FC = () => {

    const {update} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    const submit = (e: FormEvent, data: ICar | null): void => {
        e.preventDefault();
        if (data) {
            dispatch(addCarThunk(data))
        }
    }

    const formHandel = (e: FormEvent<HTMLInputElement>): void => {
        dispatch(getFormData({update: {...update, [e.currentTarget.name]: e.currentTarget.value}}))
    }

    return (
        <form onSubmit={(e) => submit(e, update)} className={'form'}>
            <div><label>Model: <input type="text" name={'model'} onChange={formHandel}/></label></div>
            <div><label>Price: <input type="text" name={'price'} onChange={formHandel}/></label></div>
            <div><label>Year: <input type="text" name={'year'} onChange={formHandel}/></label></div>
            <button>Save</button>
        </form>

    );
}

export {Form};