import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const characterService = {
    getAll: () => axiosService.get(urls.character).then(value => value.data),
}