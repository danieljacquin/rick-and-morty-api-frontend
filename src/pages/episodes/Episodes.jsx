import React from 'react'
import { useGetEpisodes } from '../../hooks/useGetEpisodes'

const Episodes = () => {

    const url = 'https://rickandmortyapi.com/api/episode?page=1';
    useGetEpisodes(url);

    return (
        <div>
            <h2>Episodes</h2>
        </div>
    )
}

export default Episodes
