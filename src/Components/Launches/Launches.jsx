import React from 'react';

import {GetLaunches} from "../../services/api";
import Launche from "../Launche/Launche";

const Launches = () => {
    return (
        <div className={'Launches'}>
            {GetLaunches().map(value => <Launche key = {value.mission_name} mission_name = {value.mission_name} launch_year = {value.launch_year} mission_patch_small = {value.links.mission_patch_small}/>)}
        </div>

    );
};

export default Launches;