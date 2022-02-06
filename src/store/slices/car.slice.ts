import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../services";


interface ICarState {
    cars: ICar[],
    update: ICar | null,
    error?: string | null
    status: string | null
}

const initialState: ICarState = {
    cars: [],
    update: null,
    error: null,
    status: null
}

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {dispatch}) => {
        try {
            const data = await carService.getAll()
            dispatch(setCars({cars: data}))
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const addCarThunk = createAsyncThunk<void, ICar>(
    'carSlice/addCarThunk',
    async (car, {dispatch}) => {
        try {
            const data = await carService.create(car);
            dispatch(addCar({car: data}))
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const updateCarThunk = createAsyncThunk<void, any>(
    'carSlice/updateCarThunk',
    async ({id, update}, {dispatch}) => {
        try {
            const newCar = await carService.updateById(id, update);
            dispatch(updateCarById({car: newCar}))
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const deleteCarThunk = createAsyncThunk<void, number>(
    'carSlice/deleteCarThunk',
    async (id, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCarById({id}))
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        getFormData: (state, action) => {
            state.update = action.payload.update
        },
        setCars: (state, action: PayloadAction<{ cars: ICar[] }>) => {
            state.cars = action.payload.cars
        },
        addCar: (state, action: PayloadAction<{ car: ICar }>) => {
            state.cars.push(action.payload.car)
        },
        updateCarById: (state, action: PayloadAction<{ car: ICar }>) => {
            state.cars[state.cars.findIndex(value => value.id === action.payload.car.id)] = action.payload.car
        },
        deleteCarById: (state, action: PayloadAction<{ id: number }>) => {
            state.cars = state.cars.filter(value => value.id !== action.payload.id)
        }
    },
});

const carReducer = carSlice.reducer;

export default carReducer;
export const {setCars, addCar, updateCarById, deleteCarById, getFormData} = carSlice.actions;