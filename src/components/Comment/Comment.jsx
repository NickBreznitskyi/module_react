import React from 'react';

import style from './Comment.module.css';

const Comment = ({postId, id, name, email, body}) => {

    return (
        <div className={style.comment}>
            <div>PostId: {postId}</div>
            <div>id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {Comment};