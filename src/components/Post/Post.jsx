import React from 'react';

import style from './Post.module.css';

const Post = ({id, userId, title, body}) => {

    return (
        <div className={style.post}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {Post};