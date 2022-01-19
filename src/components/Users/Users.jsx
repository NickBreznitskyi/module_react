import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import {usersService} from "../../services/users.service";
import {User} from "../User/User";
import style from './Users.module.css'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value))
    }, [])
    return (
        <>
            <div className={style.Users}>
                <h2>Users</h2>
                {users.map(value => <User key={value.id} user={value}/>)}
            </div>
            <div className={style.Outlet}>
                <Outlet/>
            </div>
        </>
    );
};

export {Users};