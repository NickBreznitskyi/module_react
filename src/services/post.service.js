import {axiosServiceForJson} from "./axios.service";
import {jsonUrls} from "../constants";

export const postService = {
    getAll: () => axiosServiceForJson.get(jsonUrls.posts).then(value => value.data)
}