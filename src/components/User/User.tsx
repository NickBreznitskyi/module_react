import React, {FC} from 'react';

import {IUser} from "../../interfaces";
import './User.css';

const User: FC<{ user: IUser }> = ({user}) => {

    const {id, name, username, email} = user;

    return (
        <div className={'user'}>
            <div>id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export {User};