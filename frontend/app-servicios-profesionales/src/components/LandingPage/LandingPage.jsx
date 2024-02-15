import React from 'react'

const LandingPage = () => {
    return (
        <section className='flex justify-center items-center flex-col'>

            <div className='grid grid-cols-2 gap-80 mt-20'>
                <div className='w-80'>
                    <p className='text-2xl text-wrap'>El servicio que buscas a un click de distancia</p>
                </div>
                
                <div>
                    <img src='' alt='foto-1' />
                </div>
            </div>


            <div className='grid grid-cols-2 gap-80 mt-40 '>
                <div>
                    <img src='' alt='foto-2' />
                </div>

                <div className='w-80'>
                    <p className='text-2xl text-wrap'>El servicio que buscas a un click de distancia</p>
                </div>
            </div>


            <div className='grid grid-cols-2 gap-80 mt-40'>
                <div className='w-80'>
                    <p className='text-2xl text-wrap'>El servicio que buscas a un click de distancia</p>
                </div>

                <div>
                    <img src='' alt='foto-3' />
                </div>
            </div>


            <div className='h-40'></div>




        </section>
    )
}

export default LandingPage
