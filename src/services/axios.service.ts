import axios from "axios";

import {carApi, jsonApi} from "../constants";

export const axiosServiceForCars = axios.create({baseURL: carApi});
export const axiosServiceForJson = axios.create({baseURL: jsonApi});