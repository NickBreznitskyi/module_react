import React from 'react';
import {Link} from "react-router-dom";

import style from '../../styles/style.module.css'

const Episode = ({data}) => {

    const {name, air_date, episode} = data;

    return (
        <div className={style.episode}>
            <h3>{name}</h3>
            <p><b>Episode:</b> {episode}</p>
            <p><b>AirDate:</b> {air_date}</p>
            <Link to={episode} state={data}>Episode Details</Link>
        </div>
    );
};

export {Episode};