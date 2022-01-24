import React from 'react';
import {NavLink} from "react-router-dom";

import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <NavLink to={'/'}>Rick and Morty</NavLink>
            <NavLink to={'/episodes'}>Episodes</NavLink>
            <NavLink to={'/characters'}>Characters</NavLink>
            <NavLink to={'/locations'}>Locations</NavLink>
        </div>
    );
};

export {Navigation};