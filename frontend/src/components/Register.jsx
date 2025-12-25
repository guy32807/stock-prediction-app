import { useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRegistration = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Handle registration logic here
    const userData = {
      username,
      email,
      password
    }
    await axios.post("http://localhost:8000/api/v1/register/", userData)
      .then(response => {
        console.log("Registration successful:", response.data)
        setSuccess(true)
        setErrors({})
      })
      .catch(error => {
        setErrors(error.response.data)
        console.error("There was an error registering!", error.response.data)
      }).finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 card">
            <h2 className="mb-4 card-title text-center pt-4">Register</h2>
            <form className="card-body br-3" onSubmit={handleRegistration}>
              <div className="mb-3 card-text">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" value={username} id="username" onChange={(e) => setUsername(e.target.value)} />
                {errors.username && <div className="text-danger">{errors.username}</div>}
              </div>
              <div className="mb-3 card-text">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <div className="mb-3 card-text">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <div className="text-danger">{errors.password}</div>}
              </div>
              {success && <div className="text-success mb-3">Registration successful! You can now log in.</div>}

              {isLoading ? (
                <button className="btn btn-primary" type="button" disabled><FontAwesomeIcon icon={faSpinner} spin />
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  &nbsp; Registering...
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">Register</button>
              )}
            </form> 
          </div>
        </div>
      </div>
    </>
  )
}
export default Register