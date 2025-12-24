import Button from "./Button"

const Main = () => {
  return (
   <div className="container mt-5 mb-5">  
    <div className="jumbotron p-5 bg-light">
      <h1 className="display-4">Welcome to the Stock Prediction Portal</h1>
      <p className="lead">Your one-stop solution for accurate stock market predictions.</p>
      <hr className="my-4" />
      <p>Get started by registering an account or logging in to access personalized features.</p>
      <Button text="Get Started" buttonColor='btn-info'/>
    </div>  
    </div>
  )
}
export default Main