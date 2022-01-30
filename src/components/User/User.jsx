import React from 'react';

import style from './User.module.css'

const User = ({id, name, email}) => {

    return (

        <div className={style.user}>
            <div>id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export {User};