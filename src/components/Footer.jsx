import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='w-full '>
                <div className="w-full pt-20 pb-6">
                    <div className='flex justify-center '>
                        <p className='px-10 xl:px-0 text-center text-md xl:text-xl'>¡Gracias por visitar Becky's Gift! <br /> Si tiene alguna pregunta, sugerencia o necesita ayuda con su pedido, no dude en ponerse en contacto con nosotros. Estamos aquí para ayudarlo en todo lo que podamos.
                        <br /><br />
                        beckys.giftcr@gmail.com
                        <br />
                        7277 9897</p>
                    </div>
                    <div className='flex justify-center py-10'>
                        <a href="https://www.facebook.com/BeckysGiftCR" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="55" height="55" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg></a>

                        <a href="https://www.instagram.com/beckys_gift/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="55" height="55" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg></a>
                    </div>
                </div>
                <hr />
                <div className="p-4 text-center text-md font-normal bg-black">
                    <p>Urban Garden CR 2023 © All rights reserved</p>
                    <p>Developed by Jocsan Morera</p>
                </div>
            </div>
        </div>
    )
}

export default Footer