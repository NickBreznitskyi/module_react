import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService ={
    getAll:() => axiosService.get(urls.posts).then(value => value.data),
    getByUserId: (userId) => axiosService.get(`${urls.users}/${userId}/posts`)
}