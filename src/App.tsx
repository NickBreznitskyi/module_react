import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom'

import {Layout} from "./components";
import {CarsPage, CommentsPage, PostsPage, UsersPage} from "./pages";

const App: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<CarsPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};