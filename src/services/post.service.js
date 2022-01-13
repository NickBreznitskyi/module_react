import {urls} from "../configs/urls";

const getAll = () => {
    return fetch(urls.posts)
        .then(response => response.json())
}

export const postService = {getAll}