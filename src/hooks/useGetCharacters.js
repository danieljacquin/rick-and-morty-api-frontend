import { useEffect, useState } from 'react'
import axios from '../helpers/axios';

const useGetCharacters = (url) => {
    
    const [ characters, setCharacters ] = useState({data: [], loading: true, error: null});

    useEffect(() => {
        axios(url).then(data => {
            const { results, info } = data;


            let result = results.map(character => {
                return { 
                    id: character.id, 
                    genre: character.genre, 
                    image: character.image,
                    location: character.location.name,
                    name: character.name,
                    origin: character.origin.name,
                    species: character.species,
                    status: character.status
                }
            });

            result = [ result, info.pages]

            setCharacters({
                data: result,
                loading: false,
                error: false
            })
        }).catch(error => {
            setCharacters({
                data: [],
                loading: false,
                error: error
            })
        })
        
    }, [url])

    return characters;

}

export default useGetCharacters
