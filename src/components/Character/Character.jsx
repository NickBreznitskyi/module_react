import React from 'react';

const Character = ({name, status, species, gender, origin, location, image}) => {

    return (
        <div>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p><b>Status: </b>{status}</p>
            <p><b>Species: </b>{species}</p>
            <p><b>Gender: </b>{gender}</p>
            <p><b>Origin: </b>{origin.name}</p>
            <p><b>Location: </b>{location.name}</p>
        </div>
    );
};

export {Character};