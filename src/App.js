import {useState} from "react";

import './App.css';
import {Form, Image, Menu} from "./components";


function App() {
    const [photoUrl, setPhotoUrl] = useState({});

    return (
        <div className={'App'}>
            <div>
                <Form setPhotoUrl={setPhotoUrl}/>
                <Menu setPhotoUrl={setPhotoUrl}/>
            </div>
            <Image setPhotoUrl={setPhotoUrl} photoUrl={photoUrl}/>
        </div>
    );
}

export default App;
