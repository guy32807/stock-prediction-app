import React, { useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { setIsAuthenticated} = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setErrors({}); // Clear previous errors at the start
  const userData = { username, password };

  try {
    // 1. Assign the result directly to a variable
    const response = await axios.post("http://localhost:8000/api/v1/token/", userData);

    // 2. Logic happens linearly - no more .then()
    localStorage.setItem("access_token", response.data.access);
    localStorage.setItem("refresh_token", response.data.refresh);
    setSuccess(true);
    setIsAuthenticated(true);
    navigate("/"); // Redirect to dashboard after successful login
  } catch (error) {
    // 3. Catch all errors (network, 4xx, 5xx) here
    // Always check if error.response exists to avoid crashes
    const errorMsg = error.response?.data || "An unexpected error occurred";
    console.error("There was an error logging in!", errorMsg);
  }finally {
    // 4. Finally block always runs
    setLoading(false);
  }
};

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 card">
            <h2 className="mb-4 text-center pt-3" >Login</h2>
            <form className="card-body br-3" onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                {errors.username && <div className="text-danger">{errors.username}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <div className="text-danger">{errors.password}</div>}
              </div>
              {loading ? (
                <Button className="btn btn-primary w-100" type="button" disabled>
                  <FontAwesomeIcon icon={faSpinner} spin /> Logging in...
                </Button>
              ) : (
                <button type="submit" className="btn btn-info w-100" >Login</button>
              )}
              {success && <div className="text-success mt-3">Login successful!</div>}
            </form> 
          </div>
        </div>
      </div>
    </>
  )
}
export default Login