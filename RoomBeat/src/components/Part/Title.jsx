const Title = ({ titulo, texto}) => {
  return (
    <div className="title">
      {titulo.length > 20 && <h1>{titulo}</h1> || titulo.length < 20 && <h3>{titulo}</h3>}
      <p>{texto}</p>
    </div>
  )
}

export default Title
