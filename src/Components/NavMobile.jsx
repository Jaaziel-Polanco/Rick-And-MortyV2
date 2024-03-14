import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../assets/icon-hamburger.svg'
import logo from '../assets/logoApp.png'



function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='flex justify-between min-[700px]:hidden px-5 py-8'>
                <div> <a href="/"> <img src={logo} alt="logo" className='w-14 h-14 hover:w-16 hover:h-16 transition-all absolute rounded-full animate-pulse animate-infinite animate-ease-linear' /></a></div>
                <button type="button" onClick={() => setIsOpen(!isOpen)}>
                    <img src={menu} alt="icon-menu" className='w-10 h-[31px] mt-2 hover:w-12 hover:h-[35px] transition-all ' /> </button>
            </div>
            {isOpen ? (
                <div className="fixed top-0 right-0 w-4/6 h-screen shadow-lg bg-transparent bg-opacity-100 backdrop-blur-lg text-white z-10 animate-fade-left animate-once animate-duration-[2300ms] animate-ease-in-out animate-normal animate-fill-both">
                    <button className='right-5 absolute mt-3 font-bold text-2xl hover:text-3xl transition-all' type="button" onClick={() => setIsOpen(!isOpen)}>
                        X
                    </button>
                    <div className="navMenu py-1 ml-11 w-36 mt-16 flex flex-col gap-7" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <NavLink className={({ isActive }) => (isActive ? "activo" : null)}
                            to={'/'}
                        >
                            <span className='font-bold pr-3'></span>INICIO</NavLink>

                        <NavLink to={'/Personajes'} className={({ isActive }) => (isActive ? "activo" : null)}>
                            <span className='font-bold pr-3'></span>PERSONAJES</NavLink>

                        <NavLink to={'/Ubicaciones'} className={({ isActive }) => (isActive ? "activo" : null)}>
                            <span className='font-bold pr-3'></span>UBICACIONES</NavLink>

                        <NavLink to={'/Episodios'} className={({ isActive }) => (isActive ? "activo" : null)}>
                            <span className='font-bold pr-3'></span>EPISODIOS</NavLink>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Nav
