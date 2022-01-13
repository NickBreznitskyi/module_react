import { useState, useEffect } from "react";

import './App.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import { userService } from "./services/user.service";

function App() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then((users) => setUsers(users));
    }, []);

    const getUserId = (id) => {
        console.log(id);
        userService.getById(id)
            .then((user) => setUser(user));
    };

    const getPosts = (id) => {
        userService.getPost(id)
            .then(posts => setPosts(posts));
    };
    return (
        <>
            <div className={'d-flex'}>
                <Users users={users} getUserId={(id) => getUserId(id)} />
                {user && <UserDetails key={user.id} user={user} getPosts={getPosts} />}
            </div>
            <div className={"d-flex f-wrap mt20"}>
                {posts && <Posts posts={posts} />}
            </div>
        </>
    );
}

export default App;
