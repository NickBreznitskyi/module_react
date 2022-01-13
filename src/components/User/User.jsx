import React from 'react';

import './User.css'

const User = ({id, name, username, email}) => {
    return (
        <div className={'user'}>
            <p>{id}--{name}--{username}--{email}</p>
        </div>
    );
};

export default User;