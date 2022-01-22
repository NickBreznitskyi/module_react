import React from 'react';

import './Menu.css'

const Menu = ({setPhotoUrl}) => {
    function submit(e) {
        e.preventDefault();
        const link = {keywords: e.target.innerText.toLowerCase()}
        setPhotoUrl(link)
    }

    return (
        <div className={'Menu'}>
            <button onClick={(e) => submit(e)}>CAT</button>
            <hr/>
            <button onClick={(e) => submit(e)}>CAR</button>
            <hr/>
            <button onClick={(e) => submit(e)}>DOG</button>
            <hr/>
            <button onClick={(e) => submit(e)}>GIRL</button>
            <hr/>
            <button onClick={(e) => submit(e)}>LAPTOP</button>
        </div>
    );
};

export {Menu};