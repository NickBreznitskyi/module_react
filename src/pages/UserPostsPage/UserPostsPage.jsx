import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const UserPostsPage = () => {
    const [posts, setPosts] = useState([]);

    const {state: {id}} = useLocation();

    useEffect(() => {
        postService.getByUserId(id).then(value => setPosts(value.data))
    }, [id])

    return (
        <>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </>
    );
};

export {UserPostsPage};