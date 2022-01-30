import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Comment} from "../Comment/Comment";
import {getAllComments} from "../../store";

const Comments = () => {

    const {comments, status, error} = useSelector(state => state['commentReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div>
            <h2>Comments</h2>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {comments.map(value => <Comment key={value.id} {...value}/>)}
        </div>
    );
};

export {Comments};