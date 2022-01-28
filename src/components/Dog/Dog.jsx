import React from 'react';

const Dog = ({value, index, deleteItem}) => {
    return (
        <div style={{margin: '20px'}}>
            {value}
            <button onClick={(e) => deleteItem(e, 'deleteDog', index)}>Del</button>
        </div>
    );
};

export default Dog;