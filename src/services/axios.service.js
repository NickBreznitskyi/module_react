import axios from "axios";

import {carUrls, jsonApi} from "../constants";

const axiosServiceForCars = axios.create({baseURL: carUrls.cars});
const axiosServiceForJson = axios.create({baseURL: jsonApi});

export {axiosServiceForCars, axiosServiceForJson};