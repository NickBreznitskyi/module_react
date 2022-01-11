import React, {useEffect, useState} from 'react';

import User from "../User/User";
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value))
    }, [])


    return (
        <div className='Users'>
            {users.map(value => <User key = {value.id} id = {value.id} name = {value.name} username = {value.username} email = {value.email} phone = {value.phone} website = {value.website}/>)}
        </div>
    );
};

export default Users;