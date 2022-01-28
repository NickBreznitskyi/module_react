import React from 'react';

const Cat = ({value, index, deleteItem}) => {
    return (
        <div style={{margin: '20px'}}>
            {value}
            <button onClick={(e) => deleteItem(e, 'deleteCat', index)}>Del</button>
        </div>
    );
};

export default Cat;