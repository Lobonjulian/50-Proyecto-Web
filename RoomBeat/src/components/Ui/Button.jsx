import "../../styles/ui.css"
import { useNavigate } from "react-router-dom"

const Button = ({className="btn" , titulo}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/landing')
  }

  return (
    <button className={className} onClick={handleClick}> {titulo} </button>
  )
}

export default Button