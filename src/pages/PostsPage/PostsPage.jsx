import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import style from './PostsPage.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    }, [])

    return (
        <div className={style.dFlex}>
            <div className={style.Posts}>
                <h2>Posts</h2>
                {posts.map(value => <Post key={value.id} post={value}/>)}
            </div>
            <div className={style.Outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};