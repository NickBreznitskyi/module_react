import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllPost} from "../../store";
import {Post} from "../Post/Post";

const Posts: FC = () => {

    const dispatch = useAppDispatch();
    const {posts} = useAppSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(getAllPost())
    }, [])

    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export {Posts};