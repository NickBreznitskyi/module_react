import React from 'react';
import {Link, useLocation, Outlet} from "react-router-dom";

import style from './PostSinglePage.module.css'

const PostSinglePage = () => {
    const location = useLocation();
    const {state} = location;
    return (
        <>
            <div className={style.PostSinglePage}>
                <div>id: {state.id}</div>
                <hr/>
                <div>userId: {state.userId}</div>
                <hr/>
                <div>title: {state.title}</div>
                <hr/>
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
        </>
    );
};

export {PostSinglePage};