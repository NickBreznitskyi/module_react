import {axiosServiceForJson} from "./axios.service";
import {jsonUrls} from "../constants";

export const commentService = {
    getAll: () => axiosServiceForJson.get(jsonUrls.comments).then(value => value.data)
}