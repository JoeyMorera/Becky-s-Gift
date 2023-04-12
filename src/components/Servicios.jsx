import React from 'react'

const Servicios = () => {
  return (
    <div className='pt-16 2xl:pt-28 2xl:px-20 bg-[#FF98A4]'>
      <div className='flex justify-center'>
        <p className='text-center text-5xl font-bold  pb-4 pt-10 px-10 text-black 
                      border-r-4 border-b-4 border-white ' id='contacto'>Servicios</p>
      </div>
      <div className='flex justify-center'>
        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 xl:gap-4 pt-20 xl:pt-40 px-5 xl:px-40 text-white pb-40 '>
            <div className='w-40 h-40 xl:w-80 xl:h-80 border-dotted border-8 border-[#f8f8f8] flex justify-center items-center'>
              <p className='text-xl xl:text-3xl'> Día de la madre</p>
            </div>
            <div className='w-40 h-40 xl:w-80 xl:h-80 shadow-lg shadow-black'>
              <img src="../../src/assets/products/madre1.png" alt="producto" />
            </div>
            <div className='hidden md:flex md:visible w-40 h-40 xl:w-80 xl:h-80 shadow-lg shadow-black'>
              <img src="../../src/assets/products/madre2.png" alt="producto" />
            </div>


            <div className='hidden md:flex md:visible w-40 h-40 xl:w-80 xl:h-80 shadow-lg shadow-black'>
              <img src="../../src/assets/products/aniversario1.png" alt="producto" />
            </div>
            <div className='w-40 h-40 xl:w-80 xl:h-80 shadow-lg shadow-black'>
              <img src="../../src/assets/products/aniversario2.png" alt="producto" />
            </div>
            <div className='w-40 h-40 xl:w-80 xl:h-80 border-dotted border-8 border-[#f8f8f8] flex justify-center items-center'>
              <p className='text-xl xl:text-3xl'> Aniversarios</p>
            </div>

            <div className='w-40 h-40 xl:w-80 xl:h-80  border-dotted border-8 border-[#f8f8f8] flex justify-center items-center'>
              <p className='text-xl xl:text-3xl'> Día del padre</p>
            </div>
            <div className='w-40 h-40 xl:w-80 xl:h-80  shadow-lg shadow-black'>
              <img src="../../src/assets/products/padre1.png" alt="producto" />
            </div>
            <div className=' hidden md:flex md:visible w-40 h-40 xl:w-80 xl:h-80  shadow-lg shadow-black'>
              <img src="../../src/assets/products/padre2.png" alt="producto" />
            </div>

            <div className='hidden md:flex md:visible w-40 h-40 xl:w-80 xl:h-80  shadow-lg shadow-black'>
              <img src="../../src/assets/products/cumple1.png" alt="producto" />
            </div>
            <div className='w-40 h-40 xl:w-80 xl:h-80  shadow-lg shadow-black'>
              <img src="../../src/assets/products/cumple2.png" alt="producto" />
            </div>
            <div className='w-40 h-40 xl:w-80 xl:h-80  border-dotted border-8 border-[#f8f8f8] flex justify-center items-center'>
              <p className='text-xl xl:text-3xl'> Cumpleaños</p>
            </div>

            <div className='w-40 h-40 xl:w-80 xl:h-80  border-dotted border-8 border-[#f8f8f8] flex justify-center items-center'>
              <p className='text-xl xl:text-3xl'> Graduaciones</p>
            </div>
            <div className='w-40 h-40 xl:w-80 xl:h-80  shadow-lg shadow-black'>
              <img src="../../src/assets/products/graduacion1.png" alt="producto" />
            </div>
            <div className=' hidden md:flex md:visible w-40 h-40 xl:w-80 xl:h-80  shadow-lg shadow-black'>
              <img src="../../src/assets/products/graduacion2.png" alt="producto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios