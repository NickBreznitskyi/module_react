import React from 'react';

const Comment = ({comments}) => {
    const {postId, id, name, email, body} = comments;
    return (
        <div>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export default Comment;