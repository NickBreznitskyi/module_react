import './Posts.css'

const Posts = ({posts}) => {


    return (
        <>
            {posts.map((post) => (
                <div className={"post"}>
                    <p>userId: {post.userId}</p>
                    <p>id: {post.id}</p>
                    <p>title: {post.title}</p>
                    <p>body: {post.body}</p>
                </div>
            ))}
        </>
    );
};

export default Posts;