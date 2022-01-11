import React from 'react';

import './Post.css'

const Post = (props) => {
    const {userId, id, title, body} = props;
    return (
        <div className='Post'>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Post;