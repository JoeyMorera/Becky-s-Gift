import React from 'react'
import person1 from '../../src/assets/page/person1.png'
import person2 from '../../src/assets/page/person2.png'
import person3 from '../../src/assets/page/person3.png'

const Contacto = () => {
  return (
    <div className='py-16 lg:py-28 bg-[#F8F8F8] text-black xl:h-screen'>
      <div className='flex justify-center'>
        <p className='text-center text-5xl font-bold  pb-4 pt-10 px-10 text-black 
                      border-t-4 border-l-4 border-[#FF98A4] ' id='opiniones'>Opiniones</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-5 xl:px-20 py-28 gap-5'>
        <div className='flex flex-col justify-center items-center border-[#FF98A4] border-4 border-dotted rounded-2xl'>
          <div className='pt-10'>
            <img src={person1} alt="" className='w-28' />
          </div>
          <div className='px-10 py-5 text-center text-lg'>
            <p>" Super recomendados atención al cliente, presentación, sabor, puntualidad 💯💯
              Muchas gracias..❤️❤️ "</p>
            <p className='py-5'><b>Paola Araya </b></p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center border-[#FF98A4] border-4 border-dotted rounded-2xl'>
          <div className='pt-10'>
            <img src={person2} alt="" className='w-28' />
          </div>
          <div className='px-10 py-5 text-center text-lg'>
            <p>" 100% recomendados,  excelentes productos y presentación. Hechos con mucho amor. Un regalo perfecto para toda ocasion, muchas gracias  "</p>
            <p className='py-5'><b>Oliver Morera </b></p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center border-[#FF98A4] border-4 border-dotted rounded-2xl'>
          <div className='pt-10'>
            <img src={person3} alt="" className='w-28' />
          </div>
          <div className='px-10 py-5 text-center text-lg'>
            <p>" El servicio que ofrecen es demasiado bueno, solicite un desayuno para mi esposo por nuestro aniversario y llego justo a la hora que lo solicite, ademas tenia un sabor delicioso."</p>
            <p className='py-5'><b>Aurora Quiros </b></p>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Contacto