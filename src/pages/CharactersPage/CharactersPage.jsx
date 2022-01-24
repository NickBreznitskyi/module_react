import React, {useEffect, useState} from 'react';

import {characterService} from "../../services/character.service";
import {Character, Header, PrevNextBtn} from "../../components";
import style from './CharactersPage.module.css'

const CharactersPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        characterService.getAll().then(value => setData(value))
    }, [])


    return (
        <div>
            <div>
                <Header tag={'Characters'}/>
            </div>
            <div className={style.wrap}>
                <div className={style.characters}>{data && data.results.map(value =>
                    <Character key={value.id}
                               {...value}/>)}
                </div>
                <PrevNextBtn data={data} setData={setData}/>
            </div>
        </div>
    );
};

export {CharactersPage};