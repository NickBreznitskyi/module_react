import React from 'react';

const User = ({user: {id, name}, getUserId}) => {
    return (
        <div>
            <p>{id}. {name}</p>
            <button onClick={() => getUserId(id)}>Get Details</button>
        </div>
    );
};

export default User;