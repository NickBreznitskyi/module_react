import React from 'react';

import {apiService} from "../../services/api.service";
import './PrevNextBtn.css'

const PrevNextBtn = ({data, setData}) => {

    function prev() {
        apiService.getByUrl(data.info.prev).then(value => setData(value))
        window.scrollTo(0, 0)
    }

    function next() {
        apiService.getByUrl(data.info.next).then(value => setData(value))
        window.scrollTo(0, 0)
    }

    return (
        <div className={'btn'}>
            <button onClick={prev} disabled={data && !data.info.prev}>Prev</button>
            <button onClick={next} disabled={data && !data.info.next}>Next</button>
        </div>
    );
};

export {PrevNextBtn};