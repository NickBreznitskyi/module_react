import Comment from "../Comment/Comment";
import './Comments.css';
import {GetComments} from "../../services/api";

const Comments = () => {


    return (
        <div className={'Comments'}>
            {GetComments().map(value => <Comment key ={value.id} postId = {value.postId} id = {value.id} name = {value.name} email = {value.email} body = {value.body}/>)}
        </div>
    );
};

export default Comments;