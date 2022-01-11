import {useEffect, useState} from "react";

export const GetUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value))
    }, [])

    return users;
}

export const GetPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => setPosts(value))
    }, [])

    return posts;
}

export const GetComments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(value => setComments(value))
    },[])

    return comments;
}