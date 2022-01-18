import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import style from './Header.module.css'


const Header = () => {
    return (
        <div>
            <div className={style.header}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export default Header;