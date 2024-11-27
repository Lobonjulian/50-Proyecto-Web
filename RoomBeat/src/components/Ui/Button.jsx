import "../../styles/ui.css"

const Button = ({className="btn" , titulo}) => {
  return (
    <button className={className} onClick={() => console.log('click')}> {titulo} </button>
  )
}

export default Button