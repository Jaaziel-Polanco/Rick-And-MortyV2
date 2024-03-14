import React, { useRef, useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import Nav from './Nav';
import NavMobile from './NavMobile';
import LoadingC from './SecComponents/LoadingComponent';
import { useAnimatedJump } from '../hooks/useAnimateRight';
import { Search } from './SecComponents/Search';
import ErrorNoCharacter from './SecComponents/ErrorNoCharacter'; // Puede renombrarse a ErrorNoEpisode
import TarjetaE from './SecComponents/TarjetaE';

const Episodios = () => {
    const [nextPage, setNextPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const cardsRef = useRef(null);
    const { data, loading, error } = useFetch(`https://rickandmortyapi.com/api/episode/`, searchTerm, nextPage);

    const animate = useAnimatedJump(cardsRef, nextPage);

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
        <div className='Episodios h-fit pb-40'>
            <Nav margin={'mb-10'} />
            <NavMobile />
            {loading && <LoadingC />}

            <Search busqueda={handleSearch} placeholder={'Encuentra el Episodio...'} />

            <div ref={cardsRef} className='flex flex-wrap justify-center gap-12 mt-16 animate-jump-in animate-ease-in animate-duration-[1000ms]'>
                {data && data.results ? (
                    data.results.map(episode => (
                        <TarjetaE key={episode.id} episode={episode} />
                    ))
                ) : (
                    <ErrorNoCharacter /> // Puede ser renombrado a ErrorNoLocation para reflejar mejor su propósito
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
    )
}

export default Episodios
