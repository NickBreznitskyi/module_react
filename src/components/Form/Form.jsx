import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions, createCar} from "../../store";
import style from './Form.module.css'

const Form = () => {

    const {data} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    const submit = (e, data) => {
        e.preventDefault();
        dispatch(createCar({data}))
        e.target.reset();
    }

    const formHandel = (e) => {
        dispatch(carActions.getFormData({data: {...data, [e.target.name]: e.target.value}}))
    }

    return (
        <div>
            <form onSubmit={(e) => submit(e, data)} className={style.form}>
                <div><label>Model: <input type="text" name={'model'} onChange={formHandel}/></label></div>
                <div><label>Price: <input type="text" name={'price'} onChange={formHandel}/></label></div>
                <div><label>Year: <input type="text" name={'year'} onChange={formHandel}/></label></div>
                <button>Save</button>
            </form>
        </div>
    );
}

export {Form};