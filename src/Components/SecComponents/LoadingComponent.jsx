import React from 'react';
import img from '/src/assets/LoadingImg.webp'

const LoadingComponent = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 pt-48">
            <div className='w-72 mb-10'>
                <img src={img} />
            </div>
        <div className="animate-spin rounded-full h-32 w-32 border-b-8 border-red-700"></div>
        <h2 className="text-center text-white text-xl font-semibold mt-4">Cargando...</h2>
    </div>
);
}

export default LoadingComponent;
