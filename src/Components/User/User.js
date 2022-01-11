import React from 'react';

import './User.css'
const User = (props) => {
    const {id, name, username, email, phone, website} = props;
    return (
        <div className='User'>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
        </div>
    );
};

export default User;