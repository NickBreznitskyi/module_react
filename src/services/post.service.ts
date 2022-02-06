import {axiosServiceForJson} from "./axios.service";
import {IPost} from "../interfaces";
import {jsonUrls} from "../constants";

export const postService = {
    getAll: () => axiosServiceForJson.get<IPost[]>(jsonUrls.posts).then(value => value.data)
}