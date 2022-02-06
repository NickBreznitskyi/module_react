import {axiosServiceForCars} from "./axios.service";
import {ICar} from "../interfaces";
import {carUrls} from "../constants";

export const carService = {
    getAll: () => axiosServiceForCars.get<ICar[]>(carUrls.cars).then(value => value.data),
    create: (newCar: ICar) => axiosServiceForCars.post<ICar>(carUrls.cars, newCar).then(value => value.data),
    updateById: (id: number, data: ICar) => axiosServiceForCars.patch<ICar>(`${carUrls.cars}/${id}`, data).then(value => value.data),
    deleteById: (id: number) => axiosServiceForCars.delete<void>(`${carUrls.cars}/${id}`)
}