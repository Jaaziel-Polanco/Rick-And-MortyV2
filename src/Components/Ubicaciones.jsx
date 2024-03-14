import React, { useRef, useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import Nav from './Nav';
import NavMobile from './NavMobile';
import LoadingC from './SecComponents/LoadingComponent';
import { useAnimatedDown } from '../hooks/useAnimateRight';
import { TarjetaU } from './SecComponents/TarjetaU';
import { Search } from './SecComponents/Search';
import ErrorNoCharacter from './SecComponents/ErrorNoCharacter';

export const Ubicaciones = () => {
    const [nextPage, setNextPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const cardsRef = useRef(null);
    const { data, loading, error } = useFetch(`https://rickandmortyapi.com/api/location/`, searchTerm, nextPage);

    const animate = useAnimatedDown(cardsRef, nextPage);

    const pagSiguiente = () => {
        setNextPage(prevPage => prevPage + 1);
    };

    const pagAnterior = () => {
        setNextPage(prevPage => prevPage - 1);
    };

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    const debouncedSetSearchTerm = debounce(value => setSearchTerm(value), 500);

    const handleSearch = (event) => {
        debouncedSetSearchTerm(event.target.value);
    };

    useEffect(() => {
        setNextPage(1);
    }, [searchTerm]);

    if (error) return <p>Error al cargar datos: {error.message}</p>;

    return (
        <div className='Ubicaciones h-fit pb-40'>
            <Nav margin={'mb-10'} />
            <NavMobile />
            {loading && <LoadingC />}

            <Search busqueda={handleSearch} placeholder={'Encuentra la Ubicacion...'} />

            <div ref={cardsRef} className='flex flex-wrap justify-center gap-10 mt-10 animate-flip-down animate-ease-in'>
                {data && data.results ? (
                    data.results.map(location => (
                        <TarjetaU key={location.id} location={location} />
                    ))
                ) : (
                    <ErrorNoCharacter ErrorBusqueda={"Parece que la ubicacion que buscas no esta en este Universo..."} />
                )}
            </div>

            <div className='text-center mt-16 flex justify-center gap-3'>
                {nextPage > 1 && (
                    <button className='bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-2xl text-base px-7 py-3.5 text-center me-2 mb-2 hover:px-8 hover:py-4 transition-all'
                        onClick={pagAnterior}>
                        Anterior
                    </button>
                )}
                {data && data.info && nextPage < data.info.pages && (
                    <button className='bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-2xl text-base px-7 py-3.5 text-center me-2 mb-2 hover:px-8 hover:py-4 transition-all'
                        onClick={pagSiguiente}>
                        Siguiente
                    </button>
                )}
            </div>
        </div>
    );
};
export default Ubicaciones;
