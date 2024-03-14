import React from 'react'

export const TarjetaP = ({ character }) => {

  let statusColorClass;
  switch (character.status) {
    case 'Alive':
      statusColorClass = 'text-green-600 text-xl';
      break;
    case 'Dead':
      statusColorClass = 'text-red-600 text-xl';
      break;
    default:
      statusColorClass = 'text-yellow-300 text-xl';
      break;
  }

  return (

    <div className="group relative block h-96 lg:h-96">
      <span className="absolute rounded-xl inset-0 border-2 border-dashed border-black"></span>

      <div className="relative rounded-xl w-60 flex h-full transform text-center border-2 border-black bg-white bg-opacity-40 backdrop-blur-sm transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">

        <div className=" !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 ">
          <img className="w-full rounded-xl" src={character.image} alt={character.name} />

          <h2 className="mt-4 text-2xl font-medium mb-5">{character.name}</h2>

          <p className={`${statusColorClass}`}><span className='text-black'>Estado: </span>{character.status}</p>
        </div>

        <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-8">
          <h3 className="mt-4 text-2xl font-medium">{character.species}</h3>

          <p className="mt-4 text-base font-bold">
            Origen: {character.origin.name}</p>

          <p className="mt-4 text-base font-bold">
            Ubicacion: {character.location.name}</p>

          <p className="mt-8 text-[18px] font-bold">Creacion: {character.created}</p>
        </div>
      </div>
    </div>
  )
}