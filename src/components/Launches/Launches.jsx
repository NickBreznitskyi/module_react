import React from 'react';

import {GetLaunches} from "../../services/api";

const Launches = () => {
    return (
        <div>
            {GetLaunches()}
        </div>
    );
};

export default Launches;