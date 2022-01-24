import React from 'react';
import {Outlet} from 'react-router-dom'

import {Navigation, Footer} from '../index'
import style from './Layout.module.css'

const Layout = () => {

    return (
        <div>
            <Navigation/>

            <div className={style.outlet}>
                <Outlet/>
            </div>

            <div className={style.footer}><Footer/></div>
        </div>
    );
};

export {Layout};