import React, {useEffect, useState} from 'react';
import {useLocation, Outlet} from "react-router-dom";

import {commentService} from "../../services/comment.service";
import Comment from "../../components/Comment/Comment";
import style from './CommentsPage.module.css'

const CommentsPage = () => {
    const location = useLocation();
    const {state} = location;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getByPostId(state.id).then(value => setComments(value.data))
    }, [state.id])
    return (
        <>
            <div className={style.CommentsPage}>{comments.map(value => <Comment key={value.id}
                                                                                comments={value}/>)}</div>
            <div><Outlet/></div>
        </>
    );
};

export {CommentsPage};