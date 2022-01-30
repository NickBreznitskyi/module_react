import {axiosServiceForJson} from "./axios.service";
import {jsonUrls} from "../constants";

export const userService = {
    getAll: () => axiosServiceForJson.get(jsonUrls.users).then(value => value.data)
}