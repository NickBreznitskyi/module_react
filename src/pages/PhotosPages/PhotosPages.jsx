import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {photosService} from "../../services/photos.service";
import {Photo} from "../../components";
import style from './PhotosPages.module.css'

const PhotosPages = () => {
    const location = useLocation();
    const {state: {id}} = location;
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photosService.getAllById(id).then(value => setPhotos([...value]))
    }, [id])
    return (
        <div>
            <h2>Photos</h2>
            <div className={style.PhotosPages}>
                {photos.map(value => <Photo key={value.id} photo={value}/>)}
            </div>
        </div>
    );
};

export {PhotosPages};