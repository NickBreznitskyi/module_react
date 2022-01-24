import React from 'react';

import style from '../../styles/style.module.css'

const Location = ({name, type, dimension}) => {
    return (
        <div className={style.location}>
            <h3>{name}</h3>
            <p><b>Type:</b> {type}</p>
            <p><b>Dimension:</b> {dimension}</p>
        </div>
    );
};

export {Location};