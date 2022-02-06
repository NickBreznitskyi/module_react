import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './Navigation.css';

const Navigation: FC = () => {
    return (
        <div>
            <nav className={'nav'}>
                <NavLink to={'/'}>Cars</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </nav>
        </div>
    );
};

export {Navigation};