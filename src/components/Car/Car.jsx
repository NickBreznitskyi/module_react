import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {deleteCar, updateCar} from "../../store";
import style from './Car.module.css'

const Car = ({id, model, price, year}) => {

    const {data} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    return (
        <div className={style.car}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() => dispatch(updateCar({data, id}))}>Update</button>
            <button onClick={() => dispatch(deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};