import React from 'react';
import errorimg from '/src/assets/RickError.webp'
import { Link } from 'react-router-dom';

const ErrorNoCharacter = () => {
    return (
        <div className="flex flex-col items-center text-center h-screen">
            <div className="bg-slate-800 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-4">
                <h2 className="text-lg font-bold text-white text-center">Wubba Lubba Dub Dub!</h2>
                <p className="text-white text-opacity-80 text-center">Parece que el personaje que buscas no está en este universo...</p>
                <img
                    className="mx-auto mt-4 mb-6"
                    src={errorimg} 
                    alt="Rick and Morty"
                    width="300"
                    height="200"
                />
            </div>
        </div>
    );
};

export default ErrorNoCharacter;
