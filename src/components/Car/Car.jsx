import React from 'react';

import styles from './Car.module.css'
import {carService} from "../../services/car.service";
import Form from "../Form/Form";

const Car = ({car: {id, model, price, year}, setCar}) => {


    const deleteCar = async (id) => {
        const delCar = await carService.deleteById(id);
        setCar(delCar)
    }

    return (
        <div className={styles.car}>
            <p>Id: {id};</p>
            <p>Model: {model};</p>
            <p>Price: {price};</p>
            <p>Year: {year};</p>
            <Form btn={'Update Car'} setCar={setCar} id={id}/>
            <button onClick={() => deleteCar(id)}>Delete Car</button>
        </div>
    );
};

export default Car;