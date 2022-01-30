import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store";
import {User} from "../User/User";
import style from './Users.css'

const Users = () => {

    const {users, status, error} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div>
            <h2 className={style.users__header}>Users</h2>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {users.map(value => <User key={value.id} {...value}/>)}
        </div>
    );
};

export {Users};