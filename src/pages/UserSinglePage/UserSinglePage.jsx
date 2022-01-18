import React from 'react';
import {Link, useLocation, Outlet} from "react-router-dom";

import style from './UserSinglePage.module.css'

const UserSinglePage = () => {
    const location = useLocation();
    const {state} = location;
    const {id, name, username, email, phone, website} = state
    return (
        <div>
            <div className={style.UserSinglePage}>
                <div>id: {id},</div>
                <div>name {name},</div>
                <div>username: {username},</div>
                <div>email: {email},</div>
                <div>phone: {phone},</div>
                <div>website: {website}</div>
                <Link to={'posts'} state={state}>
                    <button>Get Posts</button>
                </Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserSinglePage};