import { Link } from "react-router-dom"

const Button = ({text, buttonColor, url}) => {
  return (
    <>
        <Link className={`btn ${buttonColor}`} to={url}>{text}</Link>
    </>
  )
}
export default Button