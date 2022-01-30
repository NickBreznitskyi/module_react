import {axiosServiceForCars} from "./axios.service";
import {carUrls} from "../constants";


export const carService = {
    getAll: () => axiosServiceForCars.get(carUrls.cars).then(value => value.data),
    create: (newCar) => axiosServiceForCars.post(carUrls.cars, newCar).then(value => value.data),
    updateById: (id, data) => axiosServiceForCars.patch(`${carUrls.cars}/${id}`, data).then(value => value.data),
    deleteById: (id) => axiosServiceForCars.delete(`${carUrls.cars}/${id}`)
}