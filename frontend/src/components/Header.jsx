import Button from "./Button"

const Header = () => {
  return (
   <>
    <nav className="navbar container pt-3 pb-3 d-flex justify-content-between">
      <a className="navbar-brand" href="">Stock Prediction Portal</a>
      <div>
        <Button text="Login" buttonColor='btn-outline-info'/>
        &nbsp;
        <Button text="Register" buttonColor='btn-info' />
      </div>
    </nav>
   </>
  )
}
export default Header