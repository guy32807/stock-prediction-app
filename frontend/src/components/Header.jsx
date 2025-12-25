import Button from "./Button"
import { Link } from "react-router-dom"

const Header = () => {
  return (
   <>
    <nav className="navbar container pt-3 pb-3 d-flex justify-content-between">
      <Link className="navbar-brand" to="/">Stock Prediction Portal</Link>
      <div>
        <Button text="Login" buttonColor='btn-outline-info' url={'/login'}/>
        &nbsp;
        <Button text="Register" buttonColor='btn-info' url={'/register'} />
      </div>
    </nav>
   </>
  )
}
export default Header