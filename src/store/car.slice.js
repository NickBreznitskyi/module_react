import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {rejectWithValue, dispatch}) => {
        try {
            const newCar = await carService.create(data)
            dispatch(addCar({data: newCar}))
        } catch (e) {
            const errorKey = Object.keys(e.response.data)[0]
            const errorList = Object.values(e.response.data)[0]

            return rejectWithValue(`${errorKey}: ${errorList}`)
        }
    }
)

export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({data, id}, {rejectWithValue, dispatch}) => {
        try {
            await carService.updateById(id, data);
            dispatch(updateCarById({id}))
        } catch (e) {
            const errorKey = Object.keys(e.response.data)[0]
            const errorList = Object.values(e.response.data)[0]

            return rejectWithValue(`${errorKey}: ${errorList}`)
        }
    }
)

export const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCarById({id}))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        data: {
            model: '',
            price: '',
            year: ''
        },
        status: null,
        error: null
    },
    reducers: {
        getFormData: (state, action) => {
            state.data = action.payload.data
        },
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        updateCarById: (state, action) => {
            state.cars[state.cars.findIndex(value => value.id === action.payload.id)] = state.data
        },
        deleteCarById: (state, action) => {
            state.cars = state.cars.filter(value => value.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending'
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [createCar.pending]: (state) => {
            state.status = 'pending'
        },
        [createCar.fulfilled]: (state) => {
            state.status = 'fulfilled'
        },
        [createCar.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [updateCar.pending]: (state) => {
            state.status = 'pending'
        },
        [updateCar.fulfilled]: (state) => {
            state.status = 'fulfilled'
        },
        [updateCar.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [deleteCar.pending]: (state) => {
            state.status = 'pending'
        },
        [deleteCar.fulfilled]: (state) => {
            state.status = 'fulfilled'
        },
        [deleteCar.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }

    }
})

const carReducer = carSlice.reducer;
const {getFormData, addCar, updateCarById, deleteCarById} = carSlice.actions;

export default carReducer;
export const carActions = {
    getFormData,
    addCar,
    updateCarById,
    deleteCarById
}