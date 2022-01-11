import {useEffect, useState} from "react";

export const GetLaunches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
          .then(response => response.json())
          .then(value => setLaunches(value))
    },[])

    return launches.filter(value => value.launch_year !== "2020");
}
