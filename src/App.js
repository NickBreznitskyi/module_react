import React from "react";
import {Route, Routes} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import {CommentsPage, PostSinglePage, PostsPage, UserPostsPage, UserSinglePage, UsersPage} from "./pages";

function App() {
    return (
        <div>
            <Header/>
            <Layout/>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserSinglePage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostSinglePage/>}>
                            <Route path={'comments'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
