import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "../Post/Post";
import {getAllPosts} from "../../store";

const Posts = () => {

    const {posts, status, error} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (

        <div>
            <h2>Posts</h2>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {posts.map(value => <Post key={value.id} {...value}/>)}
        </div>

    );
};

export {Posts};