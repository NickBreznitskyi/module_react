import React, {FC} from 'react';
import {Outlet} from 'react-router-dom'

import {Navigation} from "../Navigation/Navigation";
import './Layout.css'


const Layout: FC = () => {
    return (
        <div>
            <div><Navigation/></div>
            <div className={"outlet"}><Outlet/></div>
        </div>
    );
};

export {Layout};