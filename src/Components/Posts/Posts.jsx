import Post from "../Post/Post";
import './Posts.css';
import {GetPosts} from "../../services/api";


const Posts = () => {

    return (
        <div className='Posts'>
            {GetPosts().map(value => <Post key = {value.id} userId = {value.userId} id = {value.id} title = {value.title} body = {value.body}/>)}
        </div>
    );
};

export default Posts;