import React, {FC} from 'react';

import {IPost} from "../../interfaces";
import './Post.css'

const Post: FC<{ post: IPost }> = ({post}) => {

    const {id, title, userId, body} = post;

    return (
        <div>
            <div className={'post'}>
                <div>id: {id}</div>
                <div>userId: {userId}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
        </div>
    );
};

export {Post};