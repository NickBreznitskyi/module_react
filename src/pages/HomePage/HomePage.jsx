import React from 'react';

import {Header} from "../../components";
import style from './HomePage.module.css'


const HomePage = () => {
    return (
        <div className={style.homePage}>
            <Header tag={'Library'}/>
            <img
                src="https://m.media-amazon.com/images/M/MV5BZmZhNWMyODgtMzA0OC00NWFhLTllODQtYmJkZjYxYWU4MGU1XkEyXkFqcGdeQWFybm8@._V1_.jpg"
                alt="Rick and Morty "/>
        </div>
    );
};

export {HomePage};