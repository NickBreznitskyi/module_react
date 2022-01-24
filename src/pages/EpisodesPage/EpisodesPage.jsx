import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import {Episode, Header, PrevNextBtn} from "../../components";
import style from './EpisodePage.module.css'


const EpisodesPage = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        episodeService.getAll().then(value => setData(value))
    }, [])


    return (
        <div>
            <div><Header tag={'Episodes'}/></div>
            <div className={style.wrap}>
                <div className={style.episode}>{data && data.results.map(value =>
                    <Episode key={value.id}
                             data={value}/>)}</div>
                <PrevNextBtn data={data} setData={setData}/>
            </div>
        </div>
    );
};

export {EpisodesPage};