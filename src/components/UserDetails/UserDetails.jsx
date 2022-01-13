const UserDetails = ({user: {id, name, username, email, phone, website}, getPosts}) => {

    return (
        <div>
            <h2>User Details</h2>
            <div>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>username: {username}</p>
                <p>email: {email}</p>
                <p>phone: {phone}</p>
                <p>website: {website}</p>
            </div>
            <button onClick={() => getPosts(id)}>Get Posts</button>
        </div>
    );
};

export default UserDetails;