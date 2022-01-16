import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {carValidator} from "../../validators/car.validator";

const Form = ({setCar, btn, id}) => {


    const createCar = async (data) => {
        const newCar = await carService.create(data)
        setCar(newCar)
    }


    const updateCar = async (data) => {
        const updCar = await carService.updateById(id, data);
        setCar(updCar)
    }


    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: 'onTouched'});


    return (
        <div>
            <form onSubmit={handleSubmit(btn === 'Create Car' ? createCar : updateCar)}>
                <div>Model: <input type="text" defaultValue={''} {...register('model')}/></div>
                {errors.model && <div>{errors.model.message}</div>}
                <div>Year: <input type="number" defaultValue={''} {...register('year')} /></div>
                {errors.year && <div>{errors.year.message}</div>}
                <div>Price: <input type="number" defaultValue={''} {...register('price')} /></div>
                {errors.price && <div>{errors.price.message}</div>}
                <button>{btn}</button>
            </form>
        </div>
    );
};

export default Form;