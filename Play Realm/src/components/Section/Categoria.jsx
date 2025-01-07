import Section from "./Section"

const Categoria = [
  { 
    title: "Videojuegos",
    description: "Explorar nuestra selección de juegos"
  },
  {
    title: "Merchandising",
    description: "Ropa y accesorios de tu juegos favoritos"
  },
  {
    title: "Colecciones",
    description: "Figuras y objetos de colección"
  },
  {
    title: "Accesorios",
    description: "Mejora tu experiencia de juego"
  }
]

const Categorias = () => {
  return (
    <Section title={"Categorias Destacadas"} card={Categoria}></Section>
  )
}

export default Categorias