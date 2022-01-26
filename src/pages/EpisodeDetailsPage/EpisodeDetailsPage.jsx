import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import {useLocation} from "react-router-dom";

import {Character} from "../../components";
import style from './EpisodeDetailsPage.module.css'
import {characterService} from "../../services/character.service";
import {helpers} from "../../helpers/helpers";


const EpisodeDetailsPage = () => {

    const [data, setData] = useState([]);

    const {state: {name, air_date, episode, characters}} = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        const ids = helpers.getIds(characters);
        characterService.getGroupByIds(ids).then(value => setData([...value]))
    }, [])


    return (
        <div>
            <div className={style.header}>
                <h2>{name}</h2>
                <p><b>Episode:</b> {episode}</p>
                <p><b>Air Date:</b> {air_date}</p>
            </div>
            <div className={style.goBack}>
                <button onClick={goBack}>Back to Episodes</button>
            </div>
            <div className={style.characters}>
                {data.map(value => <Character key={value.id} {...value}/>)}
            </div>
        </div>
    );
};

export {EpisodeDetailsPage};