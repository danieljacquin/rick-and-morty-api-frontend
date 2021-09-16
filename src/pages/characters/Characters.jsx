import React from 'react';
import useGetCharacters from '../../hooks/useGetCharacters';
import './characters.css';
import Navigation from '../../components/navigation/Navigation';
import useCounter from '../../hooks/useCounter';
import CharacterCard from '../../components/characterCard/CharacterCard';

const Characters = () => {

    const { counter, increase, decrease } = useCounter();

    const url = `https://rickandmortyapi.com/api/character/?page=${counter}`;
    const data = useGetCharacters(url);
    const [characters, pages] = !data.data ? [] : data.data;
    if(!characters) return [];
    console.log(characters);


    return (
        <main className="characters__page">
            <h2 className="characters__page-title">Characters</h2>
            <section className="characters__container">
                {
                    characters.map(character => {
                      return  <CharacterCard key={character.id} character={character}/>
                    })
                }
            </section>
            <Navigation counter={counter} increase={increase} decrease={decrease}  pages={pages}/>
        </main>
    )
}

export default Characters
