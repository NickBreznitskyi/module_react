import React from 'react';

import './Launche.css'

const Launche = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props;

    return (
        <div className={'Launche'}>
            <div>
                <h2>{mission_name}</h2>
                <p>{launch_year}</p>
            </div>
            <div>
                <img src={mission_patch_small} alt={mission_name}/>
            </div>
        </div>
    );
};

export default Launche;