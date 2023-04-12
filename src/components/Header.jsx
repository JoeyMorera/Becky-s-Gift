import React from 'react'
import logo from '../../src/assets/page/logo.jpg'

const Header = () => {

    return (
        <>
            <header className='w-full inline-block justify-center items-center  text-white h-screen background '>
                <div className='bg-black'>
                    <div className='w-full flex justify-center py-2 lg:py-7'>
                        <img src={logo} alt="logo" className='w-52 ' />
                    </div>
                    <hr className='border-[#FF98A4] mb-10 mx-6 xl:mx-20 border-dashed border-t-2 lg:border-t-4' />
                    <div className="flex justify-around items-center pb-4 md:pb-16">
                        <ul className='flex flex-col md:flex-row 
                            text-xl md:text-2xl text-center '>
                            <li className="py-1 md:py-0 md:px-10  hover:text-[#FF98A4]"><a href="#nosotros">NOSOTROS</a></li>
                            <li className="py-1 md:py-0 md:px-10   hover:text-[#FF98A4]"><a href="#servicios">SERVICIOS</a></li>
                            <li className="py-1 md:py-0 md:px-10  hover:text-[#FF98A4]"><a href="#contacto">CONTACTO</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col w-full items-center justify-center h-[500px] '>
                        <p className='text-4xl px-10 md:text-5xl lg:px-0 xl:text-7xl uppercase lg:tracking-wide'>Regalos Personalizados</p>
                        <p className='text-xl md:text-3xl lg:text-4xl font-extralight uppercase pt-3'> - Que te llegan al corazón -</p>
                </div>
            </header>
        </>
    )
}

export default Header