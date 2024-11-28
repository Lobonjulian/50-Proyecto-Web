import Title from "../Part/Title"
import Card from "../Ui/Card"

const Caracteristica = ({ titulo="Caracteristicas", description }) => {
  return (
    <section>
    <Title titulo={titulo} texto={description} />
    <Card />
    </section>
  )
}

export default Caracteristica