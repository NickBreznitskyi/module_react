const Posts = ({post:{userId, id, title, body}}) => {


    return (
        <div>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default Posts;