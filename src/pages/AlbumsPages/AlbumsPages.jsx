import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import {Album} from "../../components";

const AlbumsPages = () => {
    const params = useParams();
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumsService.getAllByUserId(params.id).then(value => setAlbums(value))
    }, [params.id])
    return (
        <div>
            <div>
                <h2>Albums</h2>
                <ol>{albums.map(value => <Album key={value.id} album={value}/>)}</ol>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {AlbumsPages};