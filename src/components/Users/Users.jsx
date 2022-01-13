import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import './Users.css'
import {postService} from "../../services/post.service";
import Posts from "../Posts/Posts";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(users => setUsers(users))
    }, [])

    const getUserId = (id) => {
        userService.getById(id)
            .then(user => setUser(user))
    }

    const getPosts = () => {
        postService.getAll()
            .then(posts => setPosts(posts))
    }
    return (
        <div>
            <div className={'wrap'}>
                <div className={'users'}>
                    <h2>Users</h2>
                    {users.map(value => <User
                        key={value.id}
                        user={value}
                        getUserId={getUserId}/>)}
                </div>
                <div className={'usersDetails'}>
                    {user && <UserDetails
                        key={user.id}
                        user={user}
                        getPosts={getPosts}
                    />}
                </div>
            </div>
            <div className={'posts'}>
                {posts && posts.filter((value => value.userId === user.id)).map((value => <Posts key ={value.id} post={value}/> ))}
            </div>
        </div>
    );
};

export default Users;