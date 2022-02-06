import {axiosServiceForJson} from "./axios.service";
import {IComment} from "../interfaces";
import {jsonUrls} from "../constants";

export const commentService = {
    getAll: () => axiosServiceForJson.get<IComment[]>(jsonUrls.comments).then(value => value.data)
}