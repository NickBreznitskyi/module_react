import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            {id}) {name}
            <div>
                <Link to={id.toString()}>
                    <button>Get Albums</button>
                </Link>
            </div>
            <hr/>
        </div>
    );
};

export {User};