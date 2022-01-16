import React, {useState} from 'react';

import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";


const App = () => {

    const [car, setCar] = useState(null);

    return (
        <div>
            <Form setCar={setCar} btn={'Create Car'}/>
            <Cars car={car} setCar={setCar}/>
        </div>
    );
};

export default App;