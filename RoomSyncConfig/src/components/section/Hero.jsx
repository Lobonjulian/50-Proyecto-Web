import HeroImg from '../../assets/img/HeroImage.webp'

const Hero = () => {
  return (
    <>
      <section className='px-4 flex justify-between items-center gap-4 bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500 via-purple-500 to pink-400'>
        <div className='flex flex-col items-start gap-4 w-[680px]'>
          <h1 className='text-5xl font-bold'>
            Bienvenidos a <span className="text-amber-600"> RoomSyncConfig 2025 </span>
          </h1>
          <p>Un evento global para los entusiastas de RoomBeat </p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Compra tus boletas
          </button>
        </div>
        <div className='flex justify-center items-center w-[720px]'>
          <img src={HeroImg} alt='' loading='lazy' />
        </div>
      </section>
    </>
  )
}

export default Hero
