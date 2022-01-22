import React from 'react';
import {UncachedImage} from "react-uncached-image";

import baseURL from "../../configs/urls";
import './Image.css'

const Image = ({setPhotoUrl, photoUrl}) => {

    function update() {
        const newPhoto = {...photoUrl}
        setPhotoUrl(newPhoto)

    }

    return (
        <div className={'Image'}>
            <UncachedImage src={`${baseURL}/${photoUrl.keywords}`}/>
            <button onClick={() => {
                update()
            }}>Update
            </button>
        </div>
    );
};

export {Image};