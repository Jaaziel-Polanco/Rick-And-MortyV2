import React from 'react'
import Nav from '../Nav'
import NavMobile from '../NavMobile'
import nameImg from '/src/assets/nombre.png'
import Jaaziel from './Jaaziel'


const HomePage = () => {
  return (
    <div className='bodyHp h-screen'>
      <Nav />
      <NavMobile />
      <div className='hidden lg:flex lg:justify-end'>
        <Jaaziel />
      </div>
      <div className='flex justify-center mt-28 lg:mt-0 '>
        <img className='w-[900px] lg:mt-[-250px] animate-shake animate-infinite animate-duration-[1300ms] animate-ease-linear animate-normal'
          src={nameImg} alt="" /> </div>

    </div>
  )
}

export default HomePage