import React from 'react'

const Nosotros = () => {
  return (
    <>
      <div className='pt-16 xl:pt-28 xl:px-20 bg-[#f8f8f8] '>
        <div className='flex justify-center'>
          <p className='text-center text-5xl font-bold  pb-4 pt-10 px-10 text-black 
                      border-t-4 border-l-4 border-[#FF98A4] ' id='contacto'>Nosotros</p>
        </div>
        <div className='xl:flex py-20'>
          <div className='xl:px-80'>
            <p className='text-sm sm:text-lg   lg:text-xl p-10 text-center'>
              Bienvenidos a Becky's Gift, donde nos apasiona crear regalos personalizados que lleguen al corazón y la mente de nuestros clientes. Nos enorgullece ofrecer una amplia gama de productos únicos y personalizables para cada ocasión, desde cumpleaños hasta bodas y todo lo demás. Nuestro objetivo es hacer que cada regalo sea especial y significativo para el destinatario, y trabajamos diligentemente para asegurarnos de que cada detalle sea perfecto. <br /> <br />  <b> ¡Gracias por elegir Becky's Gift para sus necesidades de regalos personalizados!</b>
            </p>
            <div className='flex justify-center'>
              <img src="../../src/assets/page/flores.png" alt="nosotros" className='w-40 xl:w-60 ' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nosotros