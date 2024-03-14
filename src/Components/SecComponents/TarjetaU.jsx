import React from 'react';

export const TarjetaU = ({ location }) => {
    let statusColorClass;
    switch (location.dimension) {
        case 'unknown':
            statusColorClass = 'text-yellow-300';
            break;
        default:
            statusColorClass = 'text-blue-600';
            break;
    }

    return (
        <div className="book gap-4 w-44 h-64 lg:w-[220px] lg:h-[300px]">
            <p className=" text-base lg:text-xl font-bold">
                Dimension: <h3 className={statusColorClass}> {location.dimension}</h3></p>

            <p className="text-base lg:text-[18px] font-bold">
                Residentes: {location.residents.length}</p>

            <p className="text-sm lg:text-[18px]">Creacion: {location.created}</p>
            <div className="cover text-white">
                <h2 className="mt-4 text-xl font-medium sm:text-2xl mb-5">{location.name}</h2>
                <p><span>Tipo: </span>{location.type}</p>
            </div>
        </div>
    );
};
