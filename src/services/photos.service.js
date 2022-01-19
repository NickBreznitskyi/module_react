import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photosService = {
    getAllById: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}