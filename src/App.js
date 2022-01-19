import {Route, Routes} from 'react-router-dom'

import './App.css';
import {Users} from "./components";
import {AlbumsPages, PhotosPages} from "./pages";

function App() {
    return (
        <div className={'App'}>
            <Routes>
                <Route path={'/'} element={<Users/>}>
                    <Route path={':id'} element={<AlbumsPages/>}>
                        <Route path={'photos'} element={<PhotosPages/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
