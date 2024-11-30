import Title from "../Part/Title"
import Card from "../Ui/Card"

const Beneficio = ({titulo, texto, BeneficioData }) => {
  return (
    <section>
      <Title titulo={titulo} texto={texto} />
      {
        BeneficioData.map((beneficio, index) => (
          <div key={index}>
            <Card {...beneficio} />
          </div>
        ))
      }
    </section>
  )
}

export default Beneficio