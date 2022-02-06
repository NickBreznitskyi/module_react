import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllUsers} from "../../store";
import {User} from "../User/User";

const Users: FC = () => {

    const {users} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export {Users};