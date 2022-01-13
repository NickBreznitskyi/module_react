import {urls} from "../config/urls";

const getAll = () => {
   return fetch(urls.base)
        .then(response => response.json())
}

export const userService = {
    getAll,
}