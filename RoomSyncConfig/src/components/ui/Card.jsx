import { faker } from '@faker-js/faker'

const oradores = Array.from({ length: 6 }, () => ({
  nombre: faker.person.fullName(),
  empresa: faker.company.name(),
  description: faker.person.bio(),
  imagen: faker.image.avatar()
}))

const Tarjeta = ({ orador }) => {
  const { nombre, empresa, description, imagen } = orador

  return (
    <article className='flex flex-col items-center gap-4'>
      <img
        src={imagen}
        alt={nombre}
        loading='lazy'
        className='rounded-full w-32 h-32'
      />
      <h3 className='text-lg font-bold'>{nombre}</h3>
      <p className='text-gray-600'>{empresa}</p>
      <p className='text-center'>{description}</p>
    </article>
  )
}

const Card = () => {
  return (
    <section className='py-16 sm:py-24' aria-labelledby='oradores-titulo'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {oradores.map((orador, index) => (
          <Tarjeta orador={orador} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Card
