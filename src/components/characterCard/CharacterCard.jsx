import React from 'react';
import './characterCard.css';
import { GoPrimitiveDot } from 'react-icons/go';

const CharacterCard = ({character}) => {
    const { image, name, species, status, location, origin } = character;
    return (
        <>
            <div className="character__card">
                <picture className="character__card-image-container">
                    <img className="character__card-image animate__animated animate__zoomIn" src={image} alt=""></img>
                </picture>
                <div className="character__card-info-container">
                    <div className="character__card-info">
                        <h3 className="character__name">{name}</h3>
                        <div className="character__status-container">
                            <span className={`character__status-icon ${(status === 'Alive') ? 'status__alive' : 'status__dead'}`}><GoPrimitiveDot/></span>
                            <span className="character__status">{species} - {status}</span>
                        </div>
                    </div>
                    <div className="character__card-info">
                        <p className="character__paragraph">Last known location:</p>
                        <p>{location}</p>
                    </div>
                    <div className="character__card-info">
                    <p className="character__paragraph">First seen in:</p>
                        <p>{origin}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterCard
