import {axiosService} from "./axios.service";

export const apiService = {
    getByUrl: (url) => axiosService.get(url).then(value => value.data)
}