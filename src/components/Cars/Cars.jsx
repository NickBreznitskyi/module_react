import {useEffect, useState} from "react";

import Car from "../Car/Car";
import {carService} from "../../services/car.service";

const Cars = ({car, setCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars(value))
    }, [car])

    return (
        <div>
            {cars.map(value => <Car key={value.id}
                                    car={value}
                                    setCar={setCar}/>)}
        </div>
    );
};

export default Cars;