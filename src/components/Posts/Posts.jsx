import './Posts.css'

const Posts = ({post: {userId, id, title, body}}) => {


    return (
        <div className={'post'}>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default Posts;