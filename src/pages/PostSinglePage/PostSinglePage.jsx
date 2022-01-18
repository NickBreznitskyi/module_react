import React from 'react';
import {Link, useLocation, Outlet} from "react-router-dom";

import style from './PostSinglePage.module.css'

const PostSinglePage = () => {
    const location = useLocation();
    const {state} = location;
    return (
        <div>
            <div className={style.PostSinglePage}>
                <div>id: {state.id}</div>
                <div>userId: {state.userId}</div>
                <div>title: {state.title}</div>
                <div>body: {state.body}</div>
                <div>
                    <Link to={'comments'} state={state}>
                        <button>Get Comments</button>
                    </Link>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostSinglePage};