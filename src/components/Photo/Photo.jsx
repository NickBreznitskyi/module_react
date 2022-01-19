import React from 'react';

import style from './Photo.module.css'

const Photo = ({photo: {title, thumbnailUrl}}) => {
    return (
        <div className={style.Photo}>
            <p>{title}</p>
            <img src={thumbnailUrl} alt={title}/>
        </div>
    );
};

export {Photo};