import {axiosServiceForJson} from "./axios.service";
import {jsonUrls} from "../constants";
import {IUser} from "../interfaces";

export const userService = {
    getAll: () => axiosServiceForJson.get<IUser[]>(jsonUrls.users).then(value => value.data)
}