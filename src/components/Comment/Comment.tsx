import React, {FC} from 'react';

import {IComment} from "../../interfaces";
import './Comment.css'

const Comment: FC<{ comment: IComment }> = ({comment}) => {

    const {id, name, postId, body, email} = comment;

    return (
        <div className={'comment'}>
            <div>PostId: {postId}</div>
            <div>id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {Comment};