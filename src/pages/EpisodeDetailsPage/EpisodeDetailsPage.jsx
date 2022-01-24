import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import {useLocation} from "react-router-dom";

import {apiService} from "../../services/api.service";
import {Character} from "../../components";
import style from './EpisodeDetailsPage.module.css'


const EpisodeDetailsPage = () => {

    const [counter, setCounter] = useState(0);
    const [isLoaded, setIsLoaded] = useState(true);
    const [data, setData] = useState([]);

    const {state: {name, air_date, episode, characters}} = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    useEffect(async () => {
        if (counter !== characters.length) {
            try {
                const charactersResult = await apiService.getByUrl(characters[counter]);
                setData([...data, charactersResult]);

                if (counter + 1 === characters.length)
                    setIsLoaded(false)

                setCounter(counter + 1);
            } catch (e) {
                console.log(e);
            }
        }

    }, [counter])

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
            {isLoaded ?
                <span>Loading...</span>
                : <div className={style.characters}>
                    {data.map(value => <Character {...value}/>)}
                </div>
            }
        </div>
    );
};

export {EpisodeDetailsPage};