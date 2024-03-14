import React from 'react';

const TarjetaE = ({ episode }) => {
    const seasonNumber = parseInt(episode.episode.substring(1, 3), 10);

    const gradients = {
        1: 'bg-gradientS1',
        2: 'bg-gradientS2',
        3: 'bg-gradientS3',
        4: 'bg-gradientS4',
        5: 'bg-gradientS5',
    };

    const gradientClass = gradients[seasonNumber] || 'bg-defaultGradient';

    return (
        <div className="container w-44 h-64 lg:w-[240px] lg:h-[294px]">
            <div className="card">
                <div className={`front text-center ${gradientClass}`}>
                    <p className="front-heading">{episode.episode}</p>
                    <p>{episode.name}</p>
                </div>
                <div className={`back text-center ${gradientClass}`}>
                    <p className="back-heading">Estreno: {episode.air_date}</p>
                    <p>Personajes: {episode.characters.length}</p>
                </div>
            </div>
        </div>
    );
}

export default TarjetaE;


