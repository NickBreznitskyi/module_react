import {useEffect, useState} from "react";

export const GetLaunches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('')
          .then(response => response.json())
          .then(value => setLaunches(value))
    },[])

    return launches.map(value => value)
}
