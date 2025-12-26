import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const { isAuthenticated } = useContext(AuthContext)
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" />
    
  )
}
export default PrivateRoute