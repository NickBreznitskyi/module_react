import React from 'react';
import {Outlet} from 'react-router-dom'

import {Navigation} from "../Navigation/Navigation";
import style from './Layout.module.css';

const Layout = () => {

    return (
        <div>
            <div><Navigation/></div>
            <div className={style.outlet}><Outlet/></div>
        </div>
    );
};

export {Layout};