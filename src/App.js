import {Routes, Route} from 'react-router-dom'

import './App.css';
import {Layout} from "./components";
import {CarsPage, CommentsPage, PostPage, UsersPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<CarsPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
