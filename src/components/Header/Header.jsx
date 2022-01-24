import React from 'react';

import style from './Header.module.css'

const Header = ({tag}) => {

    return (
        <div className={style.header}>
            <h2>Rick and Morty {tag}</h2>
        </div>
    );
};

export {Header};