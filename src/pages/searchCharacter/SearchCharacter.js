import React, { useState } from 'react';
import './searchCharacter.css';
import { useForm } from 'react-hook-form';
import axios from '../../helpers/axios';
import CharacterCard from '../../components/characterCard/CharacterCard';

const SearchCharacter = () => {

    const { register, handleSubmit} = useForm();
    const [ characters, setCharacters ] = useState({data: [], error: null});
    let url = 'https://rickandmortyapi.com/api/character/?name=';

    function onSubmit(data){
        axios(url+data.characterName).then(data => {
            const { results } = data;

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

            setCharacters({
                data: result,
                error: null
            });
            console.log(result)
        })
        .catch(err => {
            setCharacters({
                data: [],
                error: 'Character does not found'
            });
        });
    }

    return (
        <div className="search__character">
            <form className="form__search" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className="form__search-input" 
                    type="text" 
                    placeholder="search by name"
                    {...register("characterName", {required: true})}
                    >
                </input>
            </form>
            {
                (characters.error)
                ?
                    <p className="error__message">{characters.error}</p>
    
                :  
                    <section className="characters__container">
                        {
                            characters.data.map(character => {
                                return  <CharacterCard key={character.id} character={character}/>
                            })
                        }
                    </section>
            }
        </div>
    )
}

export default SearchCharacter
