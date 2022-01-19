import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {
    const {title} = album;
    return (
        <div>
            <li><Link to={'photos'} state={album}>{title}</Link></li>
        </div>
    );
};

export {Album};