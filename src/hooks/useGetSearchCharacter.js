import { useEffect } from "react"
import axios from "../helpers/axios";


export const UseGetSearchCharacter = (url) => {

   useEffect(() => {
       axios(url).then(data => {

        const { results} = data;

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

        return result;
       });
   },[url])
}

export default UseGetSearchCharacter;

