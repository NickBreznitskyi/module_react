import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {getAllCars} from "../../store";
import style from './Cars.module.css'

const Cars = () => {

    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    return (
        <div>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2 className={style.error}>{error}</h2>}
            <div className={style.cars}>{cars.map(value => <Car key={value.id} {...value}/>)}</div>
        </div>
    );
};

export {Cars};