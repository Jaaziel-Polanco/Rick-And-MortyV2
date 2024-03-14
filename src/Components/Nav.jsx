import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logoApp.png'


function Nav({ margin }) {
  return (
    <>
      <div> <a href="/"> <img src={logo} alt="logo" className='hidden lg:flex m-5 lg:m-0 lg:ml-12 lg:mt-14 w-16 h-16 absolute hover:w-[70px] hover:h-[70px] transition-all animate-pulse animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-normal' /></a></div>
      <div className={` hidden min-[700px]:flex justify-center lg:py-12 ${margin} `}>

        <div className="navMenu h-[110px] flex gap-7 rounded-full flex-row p-8 lg:px-28 shadow-lg bg-slate-400 bg-opacity-10 backdrop-blur-md" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
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
    </>
  )
}

export default Nav
