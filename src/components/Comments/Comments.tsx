import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllComments} from "../../store/slices/comment.slice";
import {Comment} from "../Comment/Comment";

const Comments: FC = () => {

    const dispatch = useAppDispatch();
    const {comments} = useAppSelector(state => state.commentReducer);

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export {Comments};