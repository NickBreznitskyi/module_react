import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import {userServise} from "../../services/user.servise";
import User from "../../components/User/User";
import style from './UsersPage.module.css'

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userServise.getAll().then(value => setUsers(value))
    },[])

    return (
        <div className={style.dFlex}>
            <div className={style.Users}>
                <h2>Users</h2>
                {users.map(value => <User key={value.id} user={value}/>)}
            </div>
            <div className={style.Outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};