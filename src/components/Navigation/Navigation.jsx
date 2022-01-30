import React from 'react';
import {NavLink} from "react-router-dom";

import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <div>
            <nav className={style.nav}>
                <NavLink to={'/'}>Cars</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </nav>
        </div>
    );
};

export {Navigation};