import React, {useEffect, useState} from 'react';

import {locationService} from "../../services/location.service";
import {Header, Location, PrevNextBtn} from "../../components";
import style from './LocationsPage.module.css'

const LocationsPage = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        locationService.getAll().then(value => setData(value))
    }, [])

    return (
        <div>
            <Header tag={'Locations'}/>
            <div className={style.wrap}>
                <div className={style.locations}>
                    {data && data.results.map(value => <Location key={value.id} {...value}/>)}
                </div>
                <PrevNextBtn data={data} setData={setData}/>
            </div>
        </div>
    );
};

export {LocationsPage};