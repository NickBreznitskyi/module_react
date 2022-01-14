import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";
import {filterService} from "../../services/filter.service";

const Users = ({name, username, email}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(users => setUsers(users))
    }, [])
    return (
        <div>
            {filterService.setFilter(users, name, username, email).map(value => <User key={value.id} id={value.id}
                                                                                      name={value.name}
                                                                                      username={value.username}
                                                                                      email={value.email}/>)}
        </div>
    );
};

export default Users;