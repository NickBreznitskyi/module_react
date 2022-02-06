import React, {FC} from 'react';

import {ICar} from "../../interfaces";
import './Car.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {deleteCarThunk, updateCarThunk} from "../../store";

const Car: FC<{ car: ICar }> = ({car}) => {

    const {id, model, price, year} = car;
    const {update} = useAppSelector(state => state.carReducer);

    const dispatch = useAppDispatch();
    return (
        <div className={"car"}>
            <div>
                <div>Id: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() => dispatch(updateCarThunk({id, update}))}>Update</button>
            <button onClick={() => dispatch(deleteCarThunk(id as number))}>Delete</button>
        </div>
    );
};

export {Car};