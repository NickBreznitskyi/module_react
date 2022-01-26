import React from 'react';

const Count = ({numberOfCount, stateCount, dispatch}) => {
    return (
        <div>
            <div>
                <div>Count {numberOfCount}: {stateCount}</div>
                <button onClick={() => dispatch({type: `inc${numberOfCount}`})}>Inc</button>
                <button onClick={() => dispatch({type: `dec${numberOfCount}`})}>Dec</button>
                <button onClick={() => dispatch({type: `reset${numberOfCount}`, payload: 0})}>Reset</button>
            </div>
        </div>
    );
};

export default Count;